fetchData();
var selectedRow = null;
// console.log(fetchData())
var x=1;
function rowcount()
{
       x=document.getElementById("Tdata").rows.length;
        console.log(x);
}
function onformsubmit()
{
        var formdata=getdata();
        if(selectedRow==null)
        insertdata(formdata);
        else
        updateRecord(formdata);
        resetdata();
        rowcount();
}
function appenddata()
{
    newData2.push(formData);
}
var formData;
function getdata()
{
    var formData={
        id:x,
        name:document.getElementById("name").value,
        username:document.getElementById("username").value,
        phone:document.getElementById("phone").value,
        email:document.getElementById("email").value
      }
      console.log(formData);
        var formdata={};
        formdata["id"]=x;
        formdata["name"]=document.getElementById("name").value;
        formdata["username"]=document.getElementById("username").value;
        formdata["email"]=document.getElementById("email").value;
        formdata["phone"]=document.getElementById("phone").value;
        return formdata;
}
function insertdata(data)
{
        var table = document.getElementById("Tdata").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
//     cell1.innerHTML = `<a href="" onClick="onEdit(this)" data-toggle="modal" data-target="#exampleModal">Edit</a>
//                        <a href="" onClick="onDelete(this)">Delete</a>`;
    cell1.innerHTML = data.id;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.name;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.username;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.email;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.phone;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = '<td><button class="btn btn-primary" onClick="onEdit(this)" data-toggle="modal" data-target="#exampleModal">Edit</button> <button class="btn btn-primary" onClick="onDelete(this)">Delete</button></td></tr>'
    
}
function resetdata()
{
        //document.getElementById("id").value="";
        document.getElementById("name").value="";
        document.getElementById("username").value="";
        document.getElementById("email").value="";
        document.getElementById("phone").value="";
        selectedRow=null;
}

function onEdit(td) {
        selectedRow = td.parentElement.parentElement;
       // document.getElementById("id").value = selectedRow.cells[0].innerHTML;
        document.getElementById("name").value = selectedRow.cells[1].innerHTML;
        document.getElementById("username").value = selectedRow.cells[2].innerHTML;
        document.getElementById("email").value = selectedRow.cells[3].innerHTML;
        document.getElementById("phone").value = selectedRow.cells[4].innerHTML;
    }

function updateRecord(formdata) {
        //selectedRow.cells[0].innerHTML = formdata.id;
        selectedRow.cells[1].innerHTML = formdata.name;
        selectedRow.cells[2].innerHTML = formdata.username;
        selectedRow.cells[3].innerHTML = formdata.email;
        selectedRow.cells[4].innerHTML = formdata.phone;
    }

function onDelete(td) {
        if (confirm('Are you sure to delete this record ?')) {
            row = td.parentElement.parentElement;
            document.getElementById("Tdata").deleteRow(row.rowIndex);
            resetdata();
        }
}
var newData2;
function fetchData(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => {res.json()
        .then(data =>{console.log(data);
        if(data.length>0)
            {
              var temp="";
              var local_data="";
              if(!localStorage.getItem("data")){
                localStorage.setItem('data',data)
              }
              else
              {
              let newData= localStorage.getItem('data')
              newData2=JSON.parse(newData);
              for(let i=0;i<data.length;i++)
              {
                temp+="<tr>";
                temp+="<td>"+newData2[i].id+"</td>";
                temp+="<td>"+newData2[i].name+"</td>";
                temp+="<td>"+newData2[i].username+"</td>";
                temp+="<td>"+newData2[i].phone+"</td>";
                temp+="<td>"+newData2[i].email+"</td>";
                temp+='<td><button class="btn btn-primary" onClick="onEdit(this)" data-toggle="modal" data-target="#exampleModal">Edit</button> <button class="btn btn-primary" onClick="onDelete(this)">Delete</button></td></tr>';
              }

              //console.log(newData);
              }
              x= data.length + 1;
                // var temp="";
                // data.forEach((u)=>{
                //     temp += "<tr>";
                //     temp += "<td>"+u.id+"</td>"
                //     temp += "<td>"+u.name+"</td>"
                //     temp += "<td>"+u.username+"</td>"
                //     temp += "<td>"+u.email+"</td>"
                //     temp += "<td>"+u.phone+"</td>"
                //     temp += '<td><button  onClick="onEdit(this)" data-toggle="modal" data-target="#exampleModal">Edit</button> <button  onClick="onDelete(this)">Delete</button></td></tr>' 
                // })
                document.getElementById("data").innerHTML = temp;
                let myobj=JSON.stringify(data);
                localStorage.setItem("data",myobj)
                // let myobj1=JSON.parse(myobj);
                // console.log(myobj1[1].id)

        }
      }
        )
}
        )
}
      