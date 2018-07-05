
 document.body.onload = addElement;
var i;
 var x;
var todolist=[];
function addElement () {
    var btn = document.getElementById("btn");
    var input = document.getElementById("ph");

    var result=document.getElementById("result");
    btn.onclick = function () {

        var li = document.createElement('li');
        var span = document.createElement('span');
        var span2 = document.createElement('span');
        var button3 = document.createElement('button');
        var button4 = document.createElement('button');
        var input = document.createElement('input');
        var button = document.createElement('button');
        var button2 = document.createElement('button');
        li.appendChild(input);
        li.appendChild(span);
        li.appendChild(button);
        li.appendChild(button2);
        li.appendChild(span2);
        li.appendChild(button3);
        li.appendChild(button4);
        var span3 = document.createTextNode("Undo:");
        button.id = todolist.length + 1;
        span2.appendChild(span3);

        var butoon3 = document.createTextNode("yes");
        var butoon4 = document.createTextNode("no");
        button3.appendChild(butoon3);
        button4.appendChild(butoon4);
        var inpVal = document.createTextNode(ph.value);
        span.appendChild(inpVal);
        if(ph.value) {

            result.appendChild(li);
            if(todolist.length==-1){
                result.style.border="0";
            }
            else{result.style.border="1px solid blue";}

            result.style.marginLeft="28%";
            li.style.height="30px";
           // li.style.marginBottom="4px";
            li.style.padding="2% 2%";
            result.style.borderRadius="0.25rem";
            result.style.width="45%";
            span.style.padding="2% 2%";
            //li.style.marginBottom="2px";
            for(i=0;i<(todolist.length+1);i++){
                if(i%2!=0){
                    li.style.backgroundColor="aqua";
                }
                else{
                    li.style.backgroundColor="blue";
                }
            }
            //li.style.display="flex";
            button.style.height="35px";
            button.style.width="35px"
            button2.style.height="35px";
            button2.style.width="35px"

            button.style.marginLeft="45%";
            button2.style.marginLeft="1%";

            //button.style.background="url('Edit.ico')";
        }
        button3.onclick = yes;
        button.onclick = update;


        button4.onclick = no;
        span.onclick = change;
        button2.onclick = update1;
        input.type = "hidden";
        button4.style.display = "none";
        button3.style.display = "none";
        span2.style.display = "none";

        var butoon = document.createTextNode("");
        button.appendChild(butoon);
        var butoon2 = document.createTextNode("");
        button2.appendChild(butoon2);
        todolist.push(span);
        console.log(todolist.length);

        function update1() {

            var element = this;
            li.style.display = "none";

            }

        }
    }

    function update() {
        var element = this;
        var f = element.nextElementSibling;
        var g = f.nextElementSibling;
        var h = g.nextElementSibling;
        var i = h.nextElementSibling;
        var a = element.previousElementSibling;
        var val = a.previousElementSibling.value;
        if (val) {
            a.textContent=val;
            todolist[element.id-1].textContent=val;
            a.previousElementSibling.type="hidden";
            g.style.display = "inline-block";
            h.style.display = "inline-block";
            i.style.display = "inline-block";
        }
    }
    function yes(){
        var element=this;
        var e=element.nextElementSibling;
        var a=element.previousElementSibling;
        var b=a.previousElementSibling;
        var c=b.previousElementSibling;
        var d=c.previousElementSibling;
        d.textContent=x;
        element.style.display="none";
        a.style.display="none";
        e.style.display="none";

    }

    function change() {
        var element = this;
        element.previousElementSibling.type = "text";

         x=element.textContent;
        element.previousElementSibling.value="";
    }

    function no(){
        var element=this;
        var a=element.previousElementSibling;
        var b= a.previousElementSibling;
        this.style.display="none";
        a.style.display="none";
        b.style.display="none";
    }
