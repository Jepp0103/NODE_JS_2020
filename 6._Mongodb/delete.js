const mongoClient = require("mongodb").MongoClient;

const connectionUrl = "mongodb://localhost:27017";
const dbName = "bigcatszoo";

mongoClient.connect(connectionUrl, {useUnifiedTopology: true}, (error, client) => {
    const bigCatsDB = client.db(dbName);

    const cats = bigCatsDB.collection("cats");

    cats.deleteOne({species: "lion"}, (error, deletedCats) => {
        console.log(deletedCats);
        client.close();
    });

});
