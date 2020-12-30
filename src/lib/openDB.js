//mongodb+srv://<username>:<password>@cluster0.atavq.mongodb.net/<dbname>?retryWrites=true&w=majority
import { MongoClient } from 'mongodb';

export async function openDB(){


  const client = new MongoClient(process.env.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  if(!client.isConnected()){
    await client.connect();
  }

  return client.db('tiktokclone');

}