import { MongoClient, ServerApiVersion } from "mongodb";

import app from "./index.js";
const port = 7001;
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
await client.connect();
const db = client.db("recipe-database");
const users = db.collection("user");
const recipes = db.collection("recipes");
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export { users, recipes };
