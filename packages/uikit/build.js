const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Remove dist directory if exists
if (fs.existsSync(path.join(__dirname, 'dist'))) {
    fs.rmSync(path.join(__dirname, 'dist'), { recursive: true, force: true });
}

// Run TypeScript compiler
execSync('tsc', { stdio: 'inherit' }); 