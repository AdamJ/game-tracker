// generateManifest();
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

const DIST_DIR = 'dist';
const MANIFEST_FILE = 'sw-manifest.js'; // Name of the file to create

async function getFileRevision(filePath) {
  try {
    const fileBuffer = await fs.readFile(filePath);
    const hashSum = crypto.createHash('md5');
    hashSum.update(fileBuffer);
    return hashSum.digest('hex');
  } catch (error) {
    console.error(`Error getting revision for ${filePath}:`, error);
    return null;
  }
}

async function generateManifest() {
  const filesToCache = [];

  async function traverseDir(dir) {
    const items = await fs.readdir(dir);
    for (const item of items) {
      const itemPath = path.join(dir, item);
      const stats = await fs.stat(itemPath);
      const relativePath = path.relative(DIST_DIR, itemPath).replace(/\\/g, '/'); // Ensure forward slashes for URLs

      if (stats.isDirectory()) {
        await traverseDir(itemPath);
      } else {
        const revision = await getFileRevision(itemPath);
        if (revision) {
          filesToCache.push({ url: `/${relativePath}`, revision });
        } else {
          filesToCache.push({ url: `/${relativePath}`, revision: null }); // Or handle differently
        }
      }
    }
  }

  await traverseDir(DIST_DIR);

  const manifestContent = `const __WB_MANIFEST = ${JSON.stringify(filesToCache, null, 2)};`;

  try {
    await fs.writeFile(path.join(DIST_DIR, MANIFEST_FILE), manifestContent, 'utf-8');
    console.log(`Manifest file "${MANIFEST_FILE}" generated in "${DIST_DIR}".`);
  } catch (error) {
    console.error('Error writing manifest file:', error);
  }
}

generateManifest();
