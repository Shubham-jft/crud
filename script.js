var selectedRow = null
function onformsubmit()
{       
        setdata();
        var formdata=getdata();
        if(selectedRow==null)
        insertdata(formdata);
        else
        updateRecord(formdata);
        resetdata();
}
function setdata()
{
    localStorage.setItem('Id',document.getElementById("Id").value);
    localStorage.setItem('fname',document.getElementById("fname").value);
    localStorage.setItem('lname',document.getElementById("lname").value);
    localStorage.setItem('age',document.getElementById("age").value);
    localStorage.setItem('pno',document.getElementById("pno").value);
}
function getdata()
{
        var formdata={};
        formdata["Id"]=localStorage.getItem("Id");
        formdata["fname"]=localStorage.getItem("fname");
        formdata["lname"]=localStorage.getItem("lname");
        formdata["age"]=localStorage.getItem("age");
        formdata["pno"]=localStorage.getItem("pno");
        return formdata;
}
function insertdata(data)
{
        var table = document.getElementById("Tdata").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
//     cell1.innerHTML = `<a href="" onClick="onEdit(this)" data-toggle="modal" data-target="#exampleModal">Edit</a>
//                        <a href="" onClick="onDelete(this)">Delete</a>`;
cell1.innerHTML = '<input type="radio" value="Edit" name="Edit" onClick="onEdit(this)" data-toggle="modal" data-target="#exampleModal">Edit <input type="radio" value="Edit" name="Delete" onClick="onDelete(this)">Delete';
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Id;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.fname;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.lname;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.age;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML= data.pno;
    
}
function resetdata()
{
        document.getElementById("Id").value="";
        document.getElementById("fname").value="";
        document.getElementById("lname").value="";
        document.getElementById("age").value="";
        document.getElementById("pno").value="";
}

function onEdit(td) {
        selectedRow = td.parentElement.parentElement;
        document.getElementById("Id").value = selectedRow.cells[1].innerHTML;
        document.getElementById("fname").value = selectedRow.cells[2].innerHTML;
        document.getElementById("lname").value = selectedRow.cells[3].innerHTML;
        document.getElementById("age").value = selectedRow.cells[4].innerHTML;
        document.getElementById("pno").value = selectedRow.cells[5].innerHTML;
    }

function updateRecord(formdata) {
        selectedRow.cells[1].innerHTML = formdata.Id;
        selectedRow.cells[2].innerHTML = formdata.fname;
        selectedRow.cells[3].innerHTML = formdata.lname;
        selectedRow.cells[4].innerHTML = formdata.age;
        selectedRow.cells[5].innerHTML = formdata.pno;
    }

function onDelete(td) {
        if (confirm('Are you sure to delete this record ?')) {
            row = td.parentElement.parentElement;
            document.getElementById("Tdata").deleteRow(row.rowIndex);
            resetdata();
        }
}