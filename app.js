const path = require("path");
const express = require("express")
const mongoose = require("mongoose")
const db = require("./db/db")
const header_middleware = require("./middlewares/header")
const cors = require("cors")
const socket = require("socket.io");

const userRoutes = require("./Routes/user");
const profileRoutes = require("./Routes/profile");
const questionRoutes = require("./Routes/questions");
const messageRoute = require("./Routes/messageRoute")
const tasksRoute = require("./Routes/tasks")

const PersonalityQuestions = require("./models/personalityQuestions");
const PersonalityModel = require("./models/personality");

const fs = require('fs');

const app = express()

const PORT = process.env.PORT || 3001

// const readFile = (filePath) => {
//     return new Promise((resolve, reject) => {
//         fs.readFile(filePath, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(JSON.parse(data));
//             }
//         });
//     });
// };

// async function upload() {
//     const jsonData = await readFile('./task.json');
//     // console.log(jsonData);
//     const result = await PersonalityModel.insertMany(jsonData);
//     console.log(result);
// }

// upload();

app.use(express.json())
app.use(header_middleware)
app.use(cors())
const directory = path.join(__dirname, './images');
app.use("/images", express.static(directory));
app.use("/api/user", userRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/question", questionRoutes);
app.use("/api/messages", messageRoute);
app.use("/api/tasks", tasksRoute);

app.get('/test', (req, res) => {
    res.send('Hello World!')
})

const server = app.listen(PORT, () => {
    console.log(`Server connected successfully on Port  ${PORT}.`);
});

// const io = socket(server, {
//     cors: {
//         origin: process.env.CORS_ORIGIN,
//         Credential: true,
//     }
// }
// );

// global.onlineUsers = new Map();
// io.on("connection", (socket) => {
//     global.chatSocket = socket;
//     socket.on("add-user", (userId) => {
//         onlineUsers.set(userId, socket.id);
//     });
//     socket.on("send-msg", (data) => {
//         const sendUserSocket = onlineUsers.get(data.to);
//         if (sendUserSocket) {
//             socket.to(sendUserSocket).emit("msg-receive", data.message);
//         }
//     });
// });