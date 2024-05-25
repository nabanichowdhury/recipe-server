// db.js
import { MongoClient, ServerApiVersion } from "mongodb";

const uri =
  "mongodb+srv://dbadmin:lashmRyT6EP6ESL8@cluster0.vdcw4ws.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db;

const connectToDatabase = async () => {
  try {
    await client.connect();
    db = client.db("recipe-database");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
};

const getDb = () => db;

export { connectToDatabase, getDb };
