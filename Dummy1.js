var selectedRow=null;
var forData;
var x=1;
function tableRowCount()
{
   x = document.getElementById("details").rows.length;
}
function onFormSubmit(){
  var FormData=readFormData(); 
  if(selectedRow==null)
  insertNewRecord(FormData);
  else
  updateRecord(FormData);
  resetForm();
  fetchData();
  tableRowCount();
}
function readFormData()
{
  formData={
    id:x,
    name:document.getElementById("name").value,
    username:document.getElementById("username").value,
    phone:document.getElementById("phone").value,
    email:document.getElementById("email").value
  }
  if(!localStorage.getItem("data")){
    localStorage.setItem('data',data)
  }
  else
  {
  let stored = localStorage.getItem('data')
  let stored_obj=JSON.parse(stored);
  // var stored=JSON.parse(localStorage.getItem("data"))
  // console.log(stored_obj)
  stored_obj.push(formData)
  console.log(stored_obj)
  let myObj=JSON.stringify(stored_obj)
  localStorage.setItem("data",myObj)
  console.log(localStorage.getItem("data" ))
  }
  var FormData={};
  FormData["id"]=x;
  FormData["name"]=document.getElementById("name").value; 
  FormData["username"]=document.getElementById("username").value; 
  FormData["phone"]=document.getElementById("phone").value; 
  FormData["email"]=document.getElementById("email").value; 

  return FormData;
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
function fetchData(){
  if(localStorage.getItem("data")===null)
  {
    fetch("https://jsonplaceholder.typicode.com/users").then(
      res =>{
        res.json().then(
          data=>{
            if(data.length>0)
            {
              var temp="";
              if(!localStorage.getItem("data")){
                localStorage.setItem('data',data)
              }
              else
              {
              let newData= localStorage.getItem('data')
              let local_data=JSON.parse(newData);
              for(let i=0;i<data.length;i++)
              {
                temp+="<tr>";
                temp+="<td>"+local_data[i].id+"</td>";
                temp+="<td>"+local_data[i].name+"</td>";
                temp+="<td>"+local_data[i].username+"</td>";
                temp+="<td>"+local_data[i].phone+"</td>";
                temp+="<td>"+local_data[i].email+"</td>";
                temp+='<td><button class="btn btn-primary" onClick="onEdit(this)" data-toggle="modal" data-target="#exampleModal">Edit</button> <button class="btn btn-primary" onClick="onDelete(this)">Delete</button></td></tr>';
              }
            }
              x= data.length + 1;
              document.getElementById("data").innerHTML=temp;
              let myObj = JSON.stringify(data);
              localStorage.setItem("data", myObj);
              
            }
          }
        )
      }
    )
  }
else{
  let newData= localStorage.getItem('data')
  var temp=""
  let local_data=JSON.parse(newData);
  for(let i=0;i<local_data.length;i++)
    {
        temp+="<tr>";
        temp+="<td>"+local_data[i].id+"</td>";
        temp+="<td>"+local_data[i].name+"</td>";
        temp+="<td>"+local_data[i].username+"</td>";
        temp+="<td>"+local_data[i].phone+"</td>";
        temp+="<td>"+local_data[i].email+"</td>";
        temp+='<td><button class="btn btn-primary" onClick="onEdit(this)" data-toggle="modal" data-target="#exampleModal">Edit</button> <button class="btn btn-primary" onClick="onDelete(this)">Delete</button></td></tr>';
   }
    x= local_data.length + 1;
    console.log(local_data)
    document.getElementById("data").innerHTML=temp;
    let myObj = JSON.stringify(data);
    localStorage.setItem("data", myObj);
    }
}
fetchData()