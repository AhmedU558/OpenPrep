// Local server: serves the app and keeps your progress in data/progress.json on this computer.
// Run:  node server.js          -> http://localhost:8642 (this computer only)
//       node server.js --lan    -> also reachable from your phone/tablet on the same Wi-Fi
const http = require('http'), fs = require('fs'), path = require('path'), os = require('os');
const { mergeState } = require('./app.js');

const ROOT = __dirname;
const DATA = path.join(ROOT, 'data', 'progress.json');
const PORT = +process.env.PORT || 8642;
const LAN = process.argv.includes('--lan');
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css', '.json': 'application/json', '.md': 'text/plain; charset=utf-8', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.svg': 'image/svg+xml', '.webp': 'image/webp' };

const read = () => { try { return JSON.parse(fs.readFileSync(DATA, 'utf8')); } catch { return {}; } };
const write = s => { // write-then-rename so a crash never leaves a half-written file
  fs.mkdirSync(path.dirname(DATA), { recursive: true });
  fs.writeFileSync(DATA + '.tmp', JSON.stringify(s));
  fs.renameSync(DATA + '.tmp', DATA);
};
const send = (res, code, body, type = 'application/json') => { res.writeHead(code, { 'Content-Type': type, 'Cache-Control': 'no-store' }); res.end(type === 'application/json' ? JSON.stringify(body) : body); };

http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');

  if (url.pathname === '/api/progress') {
    if (req.method === 'GET') return send(res, 200, read());
    if (req.method !== 'POST') return send(res, 405, { error: 'GET or POST' });
    let body = '';
    req.on('data', c => { body += c; if (body.length > 50e6) req.destroy(); });
    req.on('end', () => {
      let incoming;
      try { incoming = JSON.parse(body); } catch { return send(res, 400, { error: 'invalid JSON' }); }
      if (!incoming || typeof incoming !== 'object' || Array.isArray(incoming)) return send(res, 400, { error: 'expected an object' });
      const merged = url.searchParams.has('overwrite') ? mergeState({}, incoming) : mergeState(read(), incoming);
      write(merged);
      send(res, 200, merged);
    });
    return;
  }

  // static files, never outside the app folder, never dotfiles or the data folder
  let rel;
  try { rel = decodeURIComponent(url.pathname); } catch { return send(res, 400, 'bad path', 'text/plain'); }
  if (rel === '/') rel = '/index.html';
  const file = path.resolve(ROOT, '.' + rel);
  if (!file.startsWith(ROOT + path.sep) || /[\\/]\./.test(rel) || file.startsWith(path.join(ROOT, 'data'))) return send(res, 403, 'forbidden', 'text/plain');
  fs.readFile(file, (err, buf) => err
    ? send(res, 404, 'not found', 'text/plain')
    : send(res, 200, buf, TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream'));
}).listen(PORT, LAN ? '0.0.0.0' : '127.0.0.1', () => {
  console.log(`OpenUworld running at http://localhost:${PORT}`);
  console.log(`Progress file: ${DATA}`);
  if (LAN) Object.values(os.networkInterfaces()).flat()
    .filter(i => i.family === 'IPv4' && !i.internal)
    .forEach(i => console.log(`On other devices (same Wi-Fi): http://${i.address}:${PORT}`));
  else console.log('Add --lan to sync with your phone/tablet on the same Wi-Fi.');
});
