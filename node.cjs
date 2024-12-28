const fs = require('fs');
const path = require('path');

/**
 * Convert all subdirectory names in the "src" directory to lowercase.
 */
function convertDirectoryNamesToLowercase() {
  const srcPath = path.join(__dirname, 'src');

  // Check if src directory exists
  if (!fs.existsSync(srcPath)) {
    console.error('Error: "src" directory does not exist.');
    return;
  }

  // Read all contents of the src directory
  const items = fs.readdirSync(srcPath, { withFileTypes: true });

  items.forEach((item) => {
    // Process only directories
    if (item.isDirectory()) {
      const originalName = item.name;
      const lowerCaseName = originalName.toLowerCase();

      // Skip if the directory name is already lowercase
      if (originalName === lowerCaseName) {
        console.log(`Skipping: ${originalName}`);
        return;
      }

      const originalPath = path.join(srcPath, originalName);
      const lowerCasePath = path.join(srcPath, lowerCaseName);

      try {
        // Rename the directory
        fs.renameSync(originalPath, lowerCasePath);
        console.log(`Renamed: ${originalName} -> ${lowerCaseName}`);
      } catch (err) {
        console.error(`Error renaming ${originalName}:`, err.message);
      }
    }
  });

  console.log('Completed directory renaming.');
}

// Execute the function
convertDirectoryNamesToLowercase();
