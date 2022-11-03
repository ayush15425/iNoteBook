const { default: mongoose } = require("mongoose");

const MONGOURI = "mongodb://localhost:27017";

const mongoconnect = () => {
  mongoose.connect(MONGOURI, () => {
    console.log("connected");
  });
};

module.exports = mongoconnect;
