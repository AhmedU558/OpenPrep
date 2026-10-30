import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import buildInputs from './compliance-build-inputs.mjs';

export default class ComplianceStatsPlugin {
  constructor(target) { this.target = target; }
  apply(compiler) {
    compiler.hooks.done.tap('OpenPrepComplianceStats', (stats) => {
      const dir = resolve('.release/phase3/webpack');
      mkdirSync(dir, { recursive: true });
      const graph = stats.toJson({ all: false, cachedModules: true, cachedAssets: true, hash: true, assets: true, chunks: true, chunkModules: true, modules: true, nestedModules: true, ids: true, source: false, orphanModules: true, groupModulesByAttributes: false, groupModulesByType: false, groupModulesByLayer: false, groupModulesByPath: false, groupModulesByCacheStatus: false, groupModulesByExtension: false, modulesSpace: Infinity, chunkModulesSpace: Infinity, nestedModulesSpace: Infinity });
      writeFileSync(resolve(dir, `${this.target}.json`), JSON.stringify({ ...graph, audit: { target: this.target, node: process.version, platform: process.platform, architecture: process.arch, outputPath: compiler.outputPath, buildInputs: buildInputs() } }));
    });
  }
};
