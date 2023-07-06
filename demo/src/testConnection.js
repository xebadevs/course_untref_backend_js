const { connect, disconnect } = require("../mongodb.js");

async function getCoche() {
    const client = await connect();
  
    try {
      const db = client.db("untref");
      const cocheCursor = db.collection("coches").find();
      const coche = await cocheCursor.toArray();
  
      console.table(coche);
    } catch (error) {
      console.log("Error retrieving coches:", error);
    } finally {
      await disconnect();
    }
  }
  
  getCoche();
  