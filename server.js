import { WebSocketServer } from "ws";
import express from "express";
import path from "path";

const app = express();
const port = 8080;

app.get('/', (req, res) => res.sendFile(path.resolve("index.html")));
app.get('/index.js', (req, res) => res.sendFile(path.resolve("index.js")));

const server = app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});

const wss = new WebSocketServer({ server });

const clients = [];

wss.on("connection", (ws) => {
    console.log("Line connected");
    clients.push(ws);

    for (const client of clients) {
        if (client === ws) {
            client.send("Welcome to chat!");
        } else {
            client.send("New user connected!");
        }
    }
});


console.log("Server started on port: 8080");