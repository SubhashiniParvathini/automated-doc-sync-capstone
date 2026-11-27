import fs from 'fs';
import path from 'path';

export function syncDocumentation(sourceFile, targetDoc) {
  console.log(`[Doc-Sync] Reading source file: ${sourceFile}`);
  if (!fs.existsSync(sourceFile)) {
    throw new Error(`Source file not found: ${sourceFile}`);
  }
  const content = fs.readFileSync(sourceFile, 'utf8');
  const comments = content.match(/\/\/\s*@doc-sync:\s*(.*)/g) || [];
  const extractedDocs = comments.map(c => c.replace(/\/\/\s*@doc-sync:\s*/, '')).join('\n- ');
  
  const updateText = `\n\n## Auto-Synced from Code\n- ${extractedDocs}\n`;
  fs.appendFileSync(targetDoc, updateText);
  console.log(`[Doc-Sync] Successfully synchronized code comments to ${targetDoc}`);
}