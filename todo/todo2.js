
 document.body.onload = addElement;
var i;
 var x;
 var y = window.matchMedia("(max-width: 957px)")
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
        button2.id=todolist.length+2;
        button3.id=todolist.length+3;
        button4.id=todolist.length+4;
        span2.appendChild(span3);
        var butoon3 = document.createTextNode("");
        var butoon4 = document.createTextNode("");
        button3.appendChild(butoon3);
        button4.appendChild(butoon4);
        var inpVal = document.createTextNode(ph.value);
        span.appendChild(inpVal);

        input.style.position="absolute";
        input.style.top="32%";


        span.style.position="absolute";
        span.style.top="32%";


        if(ph.value) {

            result.appendChild(li);


           // result.style.marginLeft="28%";
            li.style.position="relative";
            li.style.height="40px";
            li.style.padding="2% 2%";
            result.style.borderRadius="0.25rem";
            result.style.width="45%";
            if(todolist.length!=-1){
                result.style.border="1px solid blue";
            }
            else{result.style.border="0px solid white";
            }
            function myfunction(y){
            if(y.matches){
                span2.style.display="none";
            }
                else{
                span2.style.display="block";
            }

            }

            for(i=0;i<(todolist.length+1);i++){
                if(i%2!=0){
                    li.style.backgroundColor="lightseagreen";
                }
                else{
                    li.style.backgroundColor="darkcyan";
                }
            }
            //li.style.display="flex";
            button.style.height="35px";
            button.style.width="35px";
            button.style.border="0px";
            button.setAttribute("title","Update");
            button2.setAttribute("title","Delete");
            button3.setAttribute("title","Undo");
            button4.setAttribute("title","Cancel");
            button2.style.border="0px";
            button3.style.border="0px";
            button4.style.border="0px";
            button2.style.height="35px";
            button2.style.width="35px";

            button.style.position="absolute";
            button.style.top="22%";
            button.style.right="52px";
            button2.style.position="absolute";
            button2.style.top="22%";
            button2.style.right="10px";
            span2.style.position="absolute";
            span2.style.left="64%";
            span2.style.top="38%";
            button3.style.position="absolute";
            button3.style.top="22%";
            button3.style.left="73%";
            button4.style.position="absolute";
            button4.style.top="22%";
            button4.style.left="80%";

            button.style.background="url('edit.png')";
            button2.style.background="url('rubbish-bin.png')";

            button3.style.height="35px";
            button3.style.width="7% ";
            button4.style.height="35px";
            button4.style.width="35px";

            button3.style.background="url('gh.png')";
            button3.style.backgroundRepeat="no-repeat";
            button3.style.backgroundPosition="center";
            button4.style.background="url('cross.png')";
            button4.style.backgroundRepeat="no-repeat";
            button4.style.backgroundPosition="center";
            myfunction(y);
            y.addListener(myfunction);
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
        function update1() {

            var element = this;
            li.style.display = "none";

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
                a.style.left="1%";
                a.textContent=val;
                todolist[element.id-1].textContent=val;
                a.previousElementSibling.type="hidden";
                g.style.display = "inline-block";
                h.style.display = "inline-block";
                i.style.display = "inline-block";
                element.style.display="none";
                f.style.display="none";
                a.style.position="relative";


            }
        }

        //return button.id ,button2.id,button3.id , button4.id;
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
        b.style.display="block";
        c.style.display="block";


    }

    function change() {
        var element = this;
        element.previousElementSibling.type = "text";
        element.style.left="32.5%";
         x=element.textContent;
        element.previousElementSibling.value="";
        var a=element.previousElementSibling;
        a.style.width="29%";
    }

    function no(){
        var element=this;
        var a=element.previousElementSibling;
        var b= a.previousElementSibling;
        var c=b.previousElementSibling;
        var d=c.previousElementSibling;
        this.style.display="none";
        a.style.display="none";
        b.style.display="none";
        c.style.display="block";
        d.style.display="block";
    }
