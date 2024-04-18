import { MongoClient } from "mongodb";
const uri = process.env.MONGODB_URI;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export default async function connectToDatabase() {
  const client = await MongoClient.connect(uri, options);
  const db = client.db("Cluster0");
  return { db, client };
}
