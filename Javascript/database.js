const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Osborn:Osborn710@cityudatabase.bz3af5t.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

//running the code
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

//adding collections
async function addCollection() {
  const uri = "mongodb+srv://Osborn:Osborn710@cityudatabase.bz3af5t.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try {
    await client.connect();
    const database = client.db('cityudatabase');
    await database.createCollection('test app');
    console.log('New collection added to the "cityudatabase" database.');
  } finally {
    await client.close();
  }
}
addCollection.catch(console.log(console.error))
