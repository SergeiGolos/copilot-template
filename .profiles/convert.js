import fs from 'fs/promises';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';

// Promisify the exec function to use it with async/await
const execPromise = promisify(exec);

/**
 * Recursively finds and converts all .docx files in a given directory.
 * @param {string} dir - The directory to start scanning from.
 */
async function findAndConvert(dir) {
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    // Process all entries in the current directory in parallel
    const conversionPromises = entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        // If it's a directory, recurse into it
        await findAndConvert(fullPath);
      } else if (path.extname(entry.name).toLowerCase() === '.docx') {
        // If it's a .docx file, convert it
        const baseName = path.basename(entry.name, '.docx');
        const outputFile = path.join(dir, `${baseName}.md`);
        const command = `pandoc "${fullPath}" -o "${outputFile}"`;

        try {
          await execPromise(command);
          console.log(`✅ Converted: ${fullPath}`);
        } catch (error) {
          console.error(`❌ Error converting ${entry.name}: ${error.message}`);
        }
      }
    });

    await Promise.all(conversionPromises);
  } catch (error) {
    console.error(`Error reading directory ${dir}: ${error.message}`);
  }
}

// --- Main Execution ---
async function main() {
  const rootDir = process.cwd(); // Get the current working directory
  console.log(`🚀 Starting conversion process in: ${rootDir}`);
  await findAndConvert(rootDir);
  console.log('✨ All conversions complete!');
}

main();
