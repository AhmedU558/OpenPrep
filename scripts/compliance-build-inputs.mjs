import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';

export default function buildInputs(root = process.cwd()) {
  const files = [];
  const walk = (relative) => {
    if (!fs.existsSync(path.join(root, relative))) return;
    for (const entry of fs.readdirSync(path.join(root, relative), { withFileTypes: true })) {
      const file = path.posix.join(relative, entry.name);
      if (file.startsWith('src/generated/')) continue;
      if (entry.isSymbolicLink()) throw new Error(`Unreviewed build-input symlink: ${file}`);
      if (entry.isDirectory()) walk(file); else if (entry.isFile()) files.push(file);
    }
  };
  walk('src'); walk('content'); walk('public');
  for (const file of ['package.json', 'package-lock.json', 'next.config.ts', 'tsconfig.json', 'postcss.config.mjs', 'prisma/schema.prisma', 'scripts/webpack-compliance-plugin.mjs', 'scripts/compliance-build-inputs.mjs']) if (fs.existsSync(path.join(root, file))) files.push(file);
  return [...new Set(files)].sort().map((file) => ({ path: file, sha256: createHash('sha256').update(fs.readFileSync(path.join(root, file))).digest('hex') }));
};
