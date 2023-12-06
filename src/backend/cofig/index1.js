const {MongoClient} = require('mongodb');

async function main() {
    // mongodb+srv://karo94:<password>@cluster0.4lbl1xt.mongodb.net/?retryWrites=true&w=majority
	const uri = "mongodb+srv://karo94:E66kabKN2vRjMFjT@cluster0.4lbl1xt.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);

    try{
    await listDB(client)
    console.log("connecting...")
    await client.connect();
    } catch (error){
        console.error(error);
    }   finally {
        await client.close();
    }

}

main().catch(console.error)

async function listDB(client) {
   const ListDB= await client.db().admin().listDatabases();
   console.log("reading...")

   console.log("Data read", ListDB);
   
}

function create  (){
    
}


