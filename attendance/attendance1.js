var z=[];
var w=[];
var x;
var i;
var todolist=[];

$(document).ready(function(){
    var input=$('#inp');
    var btn=$('#btn');
    var result=$('#result');
    var bar=$('#bar');

    let times=['0'];
    let times2=['0'];
    btn.click(function(){

        var value=`<li>
                        <input id="input1"type="hidden">
                        <span id="span" onclick="changeType(this)">${input.val()}</span>
                        <span id="attendance" type="text">${times}</span>
                        <span type= "hidden" hidden="hidden">${times2}</span>
                        <button id="update" onclick="update(this)"></button>
                        <button id="delete" onclick="delete1(this)"></button>
                        <button id="tick" onclick="tick(this)"></button>
                        <button id="present" hidden="hidden" onclick="Present(this)"></button>
                        <button id="absent" hidden="hidden" onclick="Absent(this)"></button>
                        </li>`;
        x=bar;

        if(input.val()) {
            result.append(value);

        }
        todolist.push(value);
                z.length=todolist.length;
                for(i=0;i<todolist.length;i++){
            z[i]=0;
        }
        for(i=0;i<todolist.length;i++){
            w[i]=0;
        }

        for(i=0;i<todolist.length;i++) {
            z[i]=z[i]+i;
        }
    })
})
function changeType(el){
    $(el).prev().attr('type','text');
    console.log(z.length);
}
function update(el){
    var val=$(el).prev().prev().prev().prev().val();
    if(val) {
        $(el).prev().prev().prev().text(val);
        $(el).prev().prev().prev().prev().attr('type', 'hidden');
        }
}
function delete1(el){
        $(el).parent().remove();
}

function tick(el){
    $(el).prev().hide();
    $(el).prev().prev().hide();
    $(el).next().show();
    $(el).next().next().show();
    $(el).hide();
}

function Present(el){
    console.log($(el).parent().index());
    for(i=0;i<todolist.length;i++) {
        if (($(el).parent().index()) === z[i]) {
             val1();
            let d = $(el).prev().prev().prev().prev().val() + w[i];
            console.log(d);
            var c=$(el).prev().prev().prev().prev().prev().text(d);
            console.log(c);
        }
    }
        console.log(z);
        console.log(w);
    $(el).next().hide();
    x.show();
    $(el).prev().prev().show();
    $(el).prev().prev().prev().show();

}

function val1(){
    w[i]=w[i]+1;

}

function Absent(el){
    $(el).hide();
    $(el).prev().prev().prev().show();
    $(el).prev().prev().prev().prev().show();
}