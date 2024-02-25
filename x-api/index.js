require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const { usersRouter } = require("./routers/users");
app.use(usersRouter);

app.listen(process.env.PORT, () => {
    console.log(`X API running at ${process.env.PORT}`)
})


// const jwt = require("jsonwebtoken");

// const token = jwt.sign({name:'Tom', role:'admin'}, 'secret');
// console.log(token);

// const data = jwt.verify(token, 'secret');
// console.log(data);