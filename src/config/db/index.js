const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/db_courses");
    console.log("Connect successfully!!!");
  } catch (error) {
    console.log("Connect Failure!!!");
  }
}

module.exports = { connect };
