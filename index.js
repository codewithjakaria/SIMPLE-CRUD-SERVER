import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { MongoClient, ServerApiVersion } from 'mongodb';

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    await client.db('admin').command({ ping: 1 });
    console.log('You successfully connected to MongoDB!');
  } catch (err) {
    console.error('Connection error:', err.message);
  }
}
run();

app.get('/', (req, res) => {
  res.send('Hello Iam Jakaria Rahman');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
