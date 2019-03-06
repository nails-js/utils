const executeFromRoot = callback => {
  const shell = require("shelljs");
  const fs = require("fs");

  let condition = true;
  while (condition) {
    const localPath = process.cwd();
    const pkgCheck = fs.existsSync(`${localPath}/package.json`);
    if (pkgCheck) {
      const pkg = require(`${localPath}/package.json`);

      if (pkg.nails) {
        // shell.cd("");
        callback(localPath);
        condition = false;
      }
      shell.cd("..");
    } else if (!pkgCheck || localPath === "/") {
      // console.log(
      //   nailsError +
      //     "You must be inside the directory of a nails project to perform that action."
      // );
      condition = false;
    }
  }
};

module.exports = executeFromRoot;
