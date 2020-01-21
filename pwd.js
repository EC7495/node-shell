// Output a promt
process.stdout.write("prompt > ");

// // The stdin 'data' event fires after a user types in a line
// process.stdin.on("data", data => {
//   const cmd = data.toString().trim(); // removes the newline

//   process.stdout.write("You typed: " + cmd);
//   process.stdout.write("\nprompt > ");
// });

let pwdFuction = process.stdin.on("data", data => {
  const cmd = data.toString().trim(); // removes the newline
  if (cmd === "pwd") {
    process.stdout.write(process.cwd());
    process.stdout.write("\nprompt > ");
  }
});

module.exports = pwdFuction;
