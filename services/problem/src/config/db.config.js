const mongoose = require("mongoose");
const {
  NODE_ENV,
  ATLAS_DB_URL_DEV,
  ATLAS_DB_URL_PROD,
} = require("./server.config");

async function connectToDB() {
  try {
    if (NODE_ENV == "development") {
      await mongoose.connect(ATLAS_DB_URL_DEV);
    } else if (NODE_ENV == "production") {
      await mongoose.connect(ATLAS_DB_URL_PROD);
    }
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("Unable to connect to the DB server");
    console.log(error);
  }
}

module.exports = connectToDB;

// let instance; // stores db instance

// class DBConnection {
//   #isConnected;
//   constructor(db_uri) {
//     if (instance) {
//       // if the instance variable already has a value
//       throw new Error("Only one connection can exist");
//     }
//     this.uri = db_uri;
//     instance = this;
//     this.#isConnected = false;
//   }

//   async connect() {
//     if (this.#isConnected) {
//       throw new Error("DB Already connected");
//     }
//     if (NODE_ENV == "development") {
//       await mongoose.connect(ATLAS_DB_URL);
//       this.#isConnected = true;
//     }
//   }

//   async disconnect() {
//     this.isConnected = false;
//   }
// }

// const db = Object.freeze(new DBConnection());

// module.exports = db;
