const app = require("express")();    // calling express to get the app
const server = require("http").createServer(app);    //getting to the server by requiring http
const cors = require("cors");   // package to enable cross origin request..we have app and server, now we get cors

const io = require("socket.io")(server, {   //after installing npm socket io, 
    cors: {   
        origin: "*",       // allows access from all origins
        methods: ["Get", "Post"]        //array of 2 strings
    }
});

app.use(cors());      //gets used

const PORT = process.env.PORT || 5000;   //declaring our port!

app.get("/", (req, res) => {         //routing!! 
    res.send("server is running.");  //when someone visits, they will receive the message
});

io.on('connection', (socket) => {    //sockets for real time data transmission
    socket.emit('me', socket.id);    //once we connect, we have to emit a message of "me"

    socket.on('disconnect', () => {     //disconnecting will broadcast the message of callended
        socket.broadcast.emit("callended");
    })

    socket.on("calluser", ({ userToCall, signalData, from, name }) => {  //calling someone!
        io.to(userToCall).emit("calluser", {signal: signalData, from, name }); //now passing all the data
    })

    socket.on("answercall", (data) => {   // answering! then will emit message of callaccepted
        io.to(data.to).emit("callaccepted", data.signal);
    })
})

server.listen(PORT, () => console.log(`server listening on port ${PORT}`));   //checking with consolelog