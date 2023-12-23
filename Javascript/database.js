const { MongoClient } = require('mongodb');

const uri = 'https://cloud.mongodb.com/v2/658699197142f07ece5b3f47#/metrics/replicaSet/6586a88463df002ea201d018/explorer/Numbers/Numbers/find';

const client = new MongoClient(uri);

async function addData() {
  try {
    await client.connect();
    const database = client.db('Numbers');
    const collection = database.collection('Numbers');

    const data = { name: 'John Doe', age: 30 };

    const result = await collection.insertOne(data);
    console.log(`Document inserted with _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}

addData().catch(console.dir);