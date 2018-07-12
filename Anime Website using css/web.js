document.body.onload=addElement;

function addElement() {

    var input=document.getElementById("se");
    var button=document.getElementById("su");
    var div=document.getElementById("h");
    button.onclick= function () {
        var div1=document.createElement('div');
        var diiv=document.createTextNode(h.value);
       div1.appendChild(diiv);
        document.body.appendChild(div1);

    }


        }