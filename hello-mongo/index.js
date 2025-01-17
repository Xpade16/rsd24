const { MongoClient } = require("mongodb");

const client = new MongoClient("mongodb://localhost:27017");
// const db = client.db("todo");
// const tasks = db.collection("tasks");

const x = client.db("x");

async function getData(){
    const data = await x.collection("posts").aggregate([
        {
            $lookup:{
                from:"users",
                localField:"owner",
                foreignField: "_id",
                as:"owner_user",
            },
        },
        {$limit:1},
    ]).toArray();
    console.log(data[0].owner_user);
    process.exit(0);
}
getData();
// async function getData() {
//     const data = await tasks.find().toArray();
//     console.log(data);
//     process.exit(0);
// }
// async function insertData(data) {
//     const result = await tasks.insertOne(data);
//     console.log(data);
//     process.exit(0);
// }

// // insertData({ subject: 'Test', done: false })
// getData();