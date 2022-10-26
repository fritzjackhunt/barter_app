const express = require('express');
const http = require ('http');
const socketio = require('socket.io');
const mongoose = require('mongoose');
const config = require('config');
const morgan = require('morgan');
const dotenv = require('dotenv');

// Init App
const app = express();

//Bodyparse middleware
app.use(express.json);

//Load environment variables
dotenv.config({path: "./config.env"})

const server = http.createServer(app);
const io = socketio(server).sockets;

//DB Config
const db = config.get('mongoURI');

// Connect to MongoDB
mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}).then(( ) => console.log('MongoDB Connected'))
.catch((err) => console.log(err));

const port = process.env.PORT || 5000;
server.listen(port, () => `Server started on port ${5000}`)