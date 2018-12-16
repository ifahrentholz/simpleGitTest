var fs = require("fs");
const uuidv1 = require("uuid/v1");
const simpleGit = require("simple-git")(__dirname);

const fileContent = "Hello Ingo";
const filename = `${uuidv1()}.txt`;

fs.writeFileSync(filename, fileContent);

simpleGit
  .add(filename)
  .commit(`Add ${filename}`)
  .push("origin", "master");
