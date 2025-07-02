const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/todo", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDb Connect");
  } catch (error) {
    console.log(`MogoDB Conncted Error${error}`);
    process.exit(1);
  }
};
module.exports = dbConnect;
