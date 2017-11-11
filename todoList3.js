
var i = 0;
currentRow = null;



function addRow() {
    document.getElementById("taskName").value = "";
    loopfunction();
}
/*{
//$("button#savebutton").click(function(){             
           var date = ldate;
           var name = lname;
           var status=lstatus;
           var tablebody;
            i++;
           var new_row = "<div class='capsule' id='row" + i + "'  ><div class='datediv' id='date' >" + ldate + "</div><div class='taskdiv' id='name'>" + lname + " </div><div class='checkboxdiv'><input type='checkbox'class='mdl-checkbox__input' onclick='checking(this.id)' id='status'><div class='statusdiv'>"+lstatus+ "</div><div class='deletediv' name='spandiv'><span class='mdl-badge' data-badge='X' onclick='del(this.id)' id='delete"+i+"'></span></div></div>";
           if (currentRow) {
               /*var tablebody=getElementById("tablebody");
               alert("new row added")
               $("table tbody").find($(currentRow)).replaceWith(new_row);
               currentRow = null;*/

/* }
 else {
     //alert("its appended"+currentRow+"")
     $("").append(new_row);
    // var rdiv=document.getElementById("charges");
     //rdiv.append(new_row);
     
 }
 
}*/




function checking(id) {
    var ids = id;
    var x = document.getElementById(ids);
    var aa = x.parentNode.childNodes;

    // alert(aa)
    alert("1.." + aa[0].textContent + "2.." + aa[1].textContent + "3.." + aa[2].textContent + "4.." + aa[3].textContent + "5.." + aa[4].textContent);


    // alert(aa[0].textContent);
    //}
    //function doalert(id) {
    //var a=id; var c = document.getElementById(a).childNodes;var b=c[0].textContent;
    var b = aa[0].textContent;

    //  alert(c[4].textContent);
    if (aa[4].textContent == "compelected") {
        var x, ob;

        var taskpass = { "status": "pending" };
        var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {



                loopfunction();


            }
        };

        xmlhttp.open("put", "http://localhost:3000/tasks/" + b + "");
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send(JSON.stringify(taskpass));

    }
    else {

        var x, ob;

        var taskpass = { "status": "compelected" };
        var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {


                ob = JSON.parse(this.responseText);

                loopfunction();


            }
        };

        xmlhttp.open("put", "http://localhost:3000/tasks/" + b + "");
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send(JSON.stringify(taskpass));

    }


}



function loopfunction() {
    var xmlhttp, ob, x, txt = "";
    var i = 0;


    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            ob = JSON.parse(this.responseText);
            var rootid, id, name, date, status, ck;
            var clsn, clss;



            for (x in ob) {
                i++
                if (ob[x].status == "compelected") {
                    rootid = "taskContainer";
                    id = ob[x]._id;
                    date = ob[x].Created_date.slice(0, 10);
                    name = ob[x].name;
                    status = ob[x].status;
                    ck = true;
                    clsn = "namediv2";
                    clss = "statusdiv2";
                    addElement(rootid, id, date, name, status, ck, clsn, clss);

                    //txt += "<div class='capsule' id='row"+i+"'> <div id='id"+i+"' style='display:none'class='iddiv'>" + ob[x]._id +"</div><div class='datediv' id='date'>" + ob[x].Created_date.slice(0,10) +"</div><div class='namediv' id='name'style='text-decoration: line-through ;color: #a09d9d'>"+ob[x].name+ "</div><div class='checkboxdiv'><label for='status"+i+"'  class='mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect'><input type='checkbox'class='mdl-checkbox__input' onclick='checking(this.id)' id='status"+i+"' checked='true'></label></div><div class='statusdiv' style='color: #008425'>"+ob[x].status+ "</div><div class='spandiv' name='spandiv'><span class='mdl-badge' data-badge='X' onclick='del(this.id)' id='delete"+i+"'></span></div></div>";
                }
                else {
                    //txt += "<div class='capsule ' id='row"+i+"'> <div id='id"+i+"' style='display:none'class='iddiv'>" + ob[x]._id +"</div><div class='datediv' id='date'>" + ob[x].Created_date.slice(0,10) +"</div><div class='namediv' id='name'>"+ob[x].name+ "</div><div class='checkboxdiv'><label for='status"+i+"'  class='mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect'><input type='checkbox'class='mdl-checkbox__input' onclick='checking(this.id)' id='status"+i+"' checked='true'></label></div><div class='statusdiv' >"+ob[x].status+ "</div><div class='spandiv' name='spandiv'><span class='mdl-badge' data-badge='X' onclick='del(this.id)' id='delete"+i+"'></span></div></div>";
                    id = ob[x]._id;
                    date = ob[x].Created_date.slice(0, 10);
                    name = ob[x].name;
                    status = ob[x].status;
                    ck = false;
                    clsn = "namediv";
                    clss = "statusdiv";
                    rootid = "taskContainer";
                    addElement(rootid, id, date, name, status, ck, clsn, clss);
                }



            }


            //document.getElementById("charges").innerHTML = txt;
        }
    };
    xmlhttp.open("GET", "http://localhost:3000/tasks", true);

    xmlhttp.send();
}



function load() {
    var x, ob,txt="";
    var task = document.getElementById("taskName").value;
    var taskpass = { "name": task };
    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // console.log(taskpass);
           
            ob = JSON.parse(this.responseText);

            console.log(ob.name, ob.Created_date, ob.status);
            id = ob._id;
            date = ob.Created_date.slice(0, 10);
            name = ob.name;
            status = ob.status;
            ck = false;
            clsn = "namediv";
            clss = "statusdiv";
            rootid = "taskContainer";

            addElement( rootid ,id, date, name, status, ck, clsn, clss);
            task="";
            /* for (x in ob) {
           console.log(ob);
           addRow(ob[x].name ,ob[x].Created_date,ob[x].status);
   
      
   }*/

        }
    };

    xmlhttp.open("post", "http://localhost:3000/tasks");
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send(JSON.stringify(taskpass));

}
loopfunction();

function del(id) {
    var ids = id;
    var x = document.getElementById(ids).parentNode;
    var aa = x.parentNode.childNodes;
    var b = aa[0].textContent;
    var x, ob;
    var txt;
    alert(":...1...:" + aa[0].textContent + ":..2..:" + aa[1].textContent + "...3..." + aa[2].textContent + "...4..." + aa[3].textContent + "..5..." + aa[5].textContent + "...6...")
    if (confirm("do you want to remove " + aa[3].textContent + " TASK from List") == true) {

        var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                "TASK" + aa[3].textContent + " HAS BEEN REMOVED ";
                ob = JSON.parse(this.responseText);

                loopfunction();


            }
        };

        xmlhttp.open("delete", "http://localhost:3000/tasks/" + b + "");
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send();


    }
    else {
        txt = "You pressed Cancel!";
    }
}