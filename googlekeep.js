var a,i=0;
function addElement(rootid,id,date,name,status,ck,clsn,clss)
{
    //alert(date+name+status+ck)
var id=id;date=date,name=name,status=status,ck=ck,clsn=clsn,clss=clss;
var rootid=rootid;
var div1 = document.createElement('div');
var checkbox=document.createElement('input');
var divid = document.createElement('div');
var divdate = document.createElement('div');
var divname = document.createElement('div');
var divstatus = document.createElement('div');
var divspan = document.createElement('div');
var span = document.createElement('span');
checkbox.setAttribute("type", "checkbox");
checkbox.checked =ck;
div1.className="mdl-grid capsule";
divid.className="iddiv";
checkbox.className=" checkboxdiv";
divname.className="mdl-cell mdl-cell--4-col"+" "+clsn;
divdate.className="mdl-cell mdl-cell--2-col datediv";
divstatus.className="mdl-cell mdl-cell--4-col"+" "+clss;
divspan.className="mdl-cell mdl-cell--1-col spandiv";
span.className="mdl-badge";
div1.id="capsule"+i+"";
divid.id="id"+i+"";
checkbox.id="checkbox"+i+"";
divname.id="name"+i+"";
divdate.id="date"+i+"";
divstatus.id="status"+i+"";
divspan.id="spandiv"+i+"";
span.id= "delete"+i+"";
span.setAttribute( "data-badge","X");
span.setAttribute( "onclick","del(this.id)");
checkbox.setAttribute( "onclick","checking(this.id)");

//var txt = document.createTextNode(" capsule div."+i+"");
var txt0 = document.createTextNode(id);
var txt1 = document.createTextNode(name);
var txt2 = document.createTextNode(date);
var txt3 = document.createTextNode(status);
//div1.appendChild(txt);
divid.appendChild(txt0);
divname.appendChild(txt1);
divdate.appendChild(txt2);
divstatus.appendChild(txt3);
document.getElementById(rootid).appendChild(div1);
document.getElementById("capsule"+i+"").appendChild(divid);
document.getElementById("capsule"+i+"").appendChild(checkbox);
document.getElementById("capsule"+i+"").appendChild(divdate);
document.getElementById("capsule"+i+"").appendChild(divname);
document.getElementById("capsule"+i+"").appendChild(divstatus);
document.getElementById("capsule"+i+"").appendChild(divspan);
document.getElementById("spandiv"+i+"").appendChild(span);
i++;
}
function loadTask()
{
    var TLN=document.getElementById("taskListName").value
    var div = document.createElement('div');
    var hr = document.createElement('hr');
    var h4 = document.createElement('h4');
    div.className="mdl-cell mdl-cell--4-col taskContainer";
    div.id="taskContainer"+a+"";
    var txt = document.createTextNode(TLN);
    h4.appendChild(txt);
    document.getElementById("box1").appendChild(div);
    document.getElementById("taskContainer"+a+"").appendChild(h4);
    document.getElementById("taskContainer"+a+"").appendChild(hr);
   
    a++;
}