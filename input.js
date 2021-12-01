let connection;

const handleUserInput = function(data) {
  if (data === "\u0003") {
    process.exit();
  }
  switch(data) {
    case "w":
      connection.write("Move: up");
      connection.write("Say: uuu");
      break;
    case "a":
      connection.write("Move: left");
      connection.write("Say: let");
      break;
    case "s":
      connection.write("Move: down");
      connection.write("Say: dep");
      break;
    case "d":
      connection.write("Move: right");
      connection.write("Say: okk");
  }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {
  setupInput
};