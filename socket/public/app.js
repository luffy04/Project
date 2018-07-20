
$(document).ready(function(){
    var v=[];
    let inp=$('#inp');
    let btn=$('#btn');
    let result=$('#result');
    var socket =io.connect();
    var name=prompt("What is your Name?");


    btn.click(function(){
        let value=inp.val();
        socket.emit('message',value); //Emitter1
        socket.emit('name',name);
    });
    socket.on('people',function (data) {
        console.log(data);
    });
    socket.on('tpeople',function (data) {
        console.log(data);
    });

    socket.on('send_all',function (data) {//Listener 2
        var id=data.id;
        var msg=data.msg;
        result.append(`<li>${id}:${msg}</li>`);

    });
    socket.on('new',function(data){
        display(data);
    });
    function display(data) {
        data.forEach(function (data) {
            result.append(`<li>${data}</li>`)
        })
    }
    socket.on('user',function (data1) {
       result.append(`<li>${data1}</li>`);

    });
});

