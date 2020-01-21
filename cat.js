const fs = require("fs");

let catFunction = process.stdin.on("data", data => {
  const cmdString = data.toString().trim(); // removes the newline
  const cmd = cmdString.split(" ")[0];
  const file = cmdString.split(" ")[1];
  if (cmd === "cat") {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) throw err;
      else {
        process.stdout.write(data);
        process.stdout.write("\nprompt > ");
      }
    });
  }
});

module.exports = catFunction;
