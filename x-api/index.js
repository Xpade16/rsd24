require("dotenv").config();

const express = require("express");
const app = express();

// require("express-ws")(app);
// const { auth } = require("../middlewares/auth");
const cors = require("cors");
app.use(cors());

app.use("/static", express.static("./photos"));

const { usersRouter } = require("./routers/users");
app.use(usersRouter);

const { postsRouter } = require("./routers/posts");
app.use(postsRouter);

const { notisRouter } = require("./routers/notis");
app.use(notisRouter);

// const clients =[];

// app.ws("/subscribe", (ws, req)=>{
//     const user = r
//     clients.push(ws);
//     ws.on("message", msg=>{
//         const data = JSON.parse(msg);
//         if(!clients.find(client => client._id === data._id)){
//             clients.push({_id:data._id, ws})
//         }
//     })
// })

app.listen(process.env.PORT, () => {
    console.log(`X API runnint at ${process.env.PORT}`);
});
