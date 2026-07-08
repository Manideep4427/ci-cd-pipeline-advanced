const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');
const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.js'));

let errors = 0;

files.forEach(file => {
  const content = fs.readFileSync(path.join(srcDir, file), 'utf8');
  const lines = content.split('\n');

  lines.forEach((line, i) => {
    if (line.includes('\t')) {
      console.error(`${file}:${i + 1} - No tabs allowed, use spaces`);
      errors++;
    }
    if (line.length > 120) {
      console.error(`${file}:${i + 1} - Line exceeds 120 characters`);
      errors++;
    }
  });
});

if (errors > 0) {
  console.error(`\nFound ${errors} linting error(s)`);
  process.exit(1);
} else {
  console.log('All files pass linting checks');
}