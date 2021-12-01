const { connect } = require("./client");
const { setupInput } = require.apply("./input");

console.log("Connecting ...");
connect();

setupInput();

