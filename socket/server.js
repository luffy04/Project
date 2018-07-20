const express=require('express');
const app=express();

const http=require('http');

const server=http.Server(app);

const socket=require('socket.io');

const io=socket(server);
var i;
var messages=[];
var usercount=0;
var connection1={
};

app.use('/',express.static('public'));

io.on('connection',function (sk) {

     usercount++;
     console.log( "a user is connected");
     sk.emit('people',usercount);
    sk.emit('new',messages);



    //sk.emit('user',users);
    sk.on('message',function (data1) {//Listener1

        messages.push(data1);
       //Emitter 2
        sk.on("name",function (data) {
            connection1.name=data;

            sk.on('disconnect',function () {
                sk.emit('tpeople',usercount);
                usercount--;
                console.log(data + " is disconnected");

            });
            io.emit('send_all',{id:connection1.name,msg:data1});
        });
    });

});

server.listen(8000,function () {
    console.log("Working");
});