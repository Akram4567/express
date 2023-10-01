// 1) Create a new collection:
db.createCollection("newCollectionName");




// 2) Remove a collection from the database:
db.collectionName.drop();



// 3) Insert a single document into a collection:
db.collectionName.insertOne({
    key1: "value1",
    key2: "value2",
    // Additional fields as needed
});




// 4) Delete/remove a single document from the collection:
db.collectionName.deleteOne({
    key1: "value1" // Specify the criteria to match the document you want to delete
});
