"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const path_1 = __importDefault(require("path"));
const dotenv_1 = require("dotenv");
const app = (0, express_1.default)();
const httpSever = (0, http_1.createServer)(app);
const io = new socket_io_1.Server(httpSever, { cors: {
        allowedHeaders: "*"
    } });
(0, dotenv_1.config)();
//@ts-ignore
const port = parseInt(process.env.PORT) || 7000;
io.on("connection", (socket) => {
    console.log(socket.id);
});
app.use(express_1.default.static('public'));
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "pages", "index.html"));
});
httpSever.listen(port, () => { console.log("escutando a porta:", port); });
