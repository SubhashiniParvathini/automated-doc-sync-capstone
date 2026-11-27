import { syncDocumentation } from '../src/sync.js';
import fs from 'fs';

console.log('[Test Suite] Running unit tests for Automated Documentation Sync...');
try {
  syncDocumentation('src/sample.js', 'docs/requirements.md');
  console.log('? TEST PASSED: Documentation synchronized successfully.');
} catch (err) {
  console.error('? TEST FAILED:', err.message);
}
