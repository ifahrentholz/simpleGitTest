var fs = require("fs");
const uuidv1 = require("uuid/v1");
const simpleGit = require("simple-git")(__dirname);

const fileContent = "About Page";
const filename = `about.txt`;

fs.writeFileSync(filename, fileContent);

simpleGit.mergeFromTo("aboutPage", "master", null, () => {
  simpleGit.checkout("master", () => {
    simpleGit.add(".", () => {
      simpleGit.commit("added about page", null, null, () => {
        simpleGit.push("origin", "master", () => {
          console.log("DONE");
        });
      });
    });
  });
});
// simpleGit
//   // .checkoutBranch("aboutPage", "master")
//   // .add(filename)
//   // .commit(`Add ${filename}`)
//   .mergeFromTo("aboutPage", "master")
//   .checkout("master")
//   .add()
//   .commit("added aboutPage")
//   .push("origin", "master");
