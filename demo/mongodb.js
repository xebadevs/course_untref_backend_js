const { MongoClient } = require("mongodb");
const path = require("path");

require("dotenv").config({ path: path.join(__dirname, ".env") });

const URL = process.env.DATABASE_URL;
const client = new MongoClient(URL);

async function connect() {
    console.log("Connecting...");
  
    try {
      await client.connect();
      console.log("Connection successful...");
  
      return client;
    } catch (error) {
      console.log("Connection error:", error.message);
      throw error;
    }
  }
  

async function disconnect() {

    try {
        await client.close();
        console.log("Disconnection successfull...");


    } catch (error) {
        console.log("Disconnection error...");
        
    }
}

module.exports = { connect, disconnect }