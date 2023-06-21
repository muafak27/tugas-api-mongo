const {MongoClient} = require('mongodb')
const uri = 'mongodb://127.0.0.1:27017';
const dbName = 'reactExpress';
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    
})

async function main(){
    
   await client.connect()
   const db = client.db(dbName);
   const collection = db.collection('produk');
   return collection;
}


module.exports = main;