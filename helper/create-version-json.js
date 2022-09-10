const fs = require("fs");

const FILE_NAME = "version.json";

fs.readFile(FILE_NAME, "utf-8", (err, data) => {
  console.log(`Generating new ${FILE_NAME}, please wait...`);

  if (err) {
    console.log(`Error while reading ${FILE_NAME}: `, err);
    throw err;
  }

  const versionJson = JSON.parse(data);
  const majorVersion = versionJson.version.split(".")[0];
  const minorVersion = versionJson.version.split(".")[1];
  const patchVersion = versionJson.version.split(".")[2];

  const countPatchVersionUp = () => {
    return +patchVersion + 1;
  };

  const buildNewVersionNumber = () => {
    return `${majorVersion}.${minorVersion}.${countPatchVersionUp()}`;
  };

  const newVersionJson = {
    date: new Date().toLocaleString(),
    version: buildNewVersionNumber(),
  };

  fs.writeFile(FILE_NAME, JSON.stringify(newVersionJson), "utf-8", (err) => {
    if (err) {
      console.log(`Error while writing file: `, err);
    } else {
      console.log(`Generation of ${FILE_NAME} successful`);
    }
  });
});

// fs.writeFile(FILE_NAME, "", (err) => {
//   console.log(err);
// });
