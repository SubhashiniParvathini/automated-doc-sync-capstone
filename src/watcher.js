import { syncDocumentation } from './sync.js';

console.log('[Doc-Watcher] Initializing automated doc-sync watcher...');
// Simulate syncing a sample source file to requirements.md
setTimeout(() => {
  syncDocumentation('src/sample.js', 'docs/requirements.md');
}, 1000);
