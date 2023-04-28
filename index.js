const dir = './src';
const fs = require('fs');
const path = require('path');

const files = fs.readdirSync(dir);
files.forEach((file) => {
  fs.renameSync(path.resolve(dir, file), path.resolve(dir, file.replaceAll(' ', '_')));
});
