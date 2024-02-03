const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const  cors = require("cors");
app.use(cors());

const { MongoClient, ObjectId } = require("mongodb");

const client = new MongoClient("mongodb://localhost:27017");
const db = client.db("todo");
const tasks = db.collection("tasks");

// app.get('/tasks', function (req, res) {
//     return res.json([
//         { id: 1, subject: 'Kitty', done: false },
//         { id: 2, subject: 'Milk', done: false },
//         { id: 3, subject: 'Peach', done: false }
//     ]);
// });

// app.get('/tasks/:id', function (req, res) {
//     const { id } = req.params;
//     return res.json({ id, subject: 'stick' });
// });

app.get('/tasks', async (req, res) => {
    const data = await tasks.find().toArray();
    return res.json(data);
});

app.get('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    _id = new ObjectId(id);

    const data = await tasks.findOne({ _id });
    return res.json(data);
});
app.post('/tasks', async (req, res) => {
    const { subject } = req.body;
    if (!subject) {
        return res.status(400).json({ msg: 'subject Required' });
    }
    try {
        const result = await tasks.insertOne({ subject, done: false });
        // const data = await tasks.findOne({ _id: new ObjectId(result.insertedId) });
        const data = {_id: result.insertedId, subject};
        return res.json(data);
    }
    catch (e) {
        return res.json(e);
    }
});

app.delete('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    _id = new ObjectId(id);

    await tasks.deleteOne({_id});
    return res.sendStatus(204);
});

app.put('/tasks/:id', async(req,res)=>{
    
    const{subject} = req.body;
    if (!subject) {
        return res.status(400).json({ msg: 'subject Required' });
    }
    try
    {
        const{id} = req.params;
        const _id = new ObjectId(id);
        const result = await tasks.updateOne(
            {_id},
            {
                $set:{subject}
            }
        );
        const data = await tasks.findOne({_id});
        return res.json(data);
    }
    catch(e){
        res.status(500).json({msg: e.message});
    }
})

app.put('/tasks/toggle/:id', async(req,res)=>{
    const{id} = req.params;
    const _id = new ObjectId(id);
    const current = await tasks.findOne({_id});
    const done = !current.done;
    const result = await tasks.updateOne(
        {_id},
        {
            $set:{done},
        }
    )
    const data = await tasks.findOne({_id});
    return res.json(data);
})

app.listen(6969, () => {
    console.log("Todo API running at 6969");
});