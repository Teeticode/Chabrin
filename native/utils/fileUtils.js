const fs = require("fs");
const path = require("path");

const readFilesRecursively = (dir, filelist = []) => {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory() && file !== "node_modules") {
      filelist = readFilesRecursively(fullPath, filelist);
    } else {
      filelist.push(fullPath);
    }
  });
  return filelist;
};

module.exports = {
  readFilesRecursively,
};
