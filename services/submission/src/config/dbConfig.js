const mongoose = require("mongoose");
const {
  ATLAS_DB_URL,
  NODE_ENV,
  ATLAS_DB_URL_DEV,
  ATLAS_DB_URL_PROD,
} = require("./serverConfig");

async function connectToDB() {
  try {
    if (NODE_ENV == "development") {
      await mongoose.connect(ATLAS_DB_URL_DEV);
    } else if (NODE_ENV == "production") {
      await mongoose.connect(ATLAS_DB_URL_PROD);
    }
    console.log("Mongodb connected successfully!");
  } catch (error) {
    console.log("Unable to connect to the DB server");
    console.log(error);
  }
}

module.exports = connectToDB;
