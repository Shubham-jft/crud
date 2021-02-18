function fetchdata(){
fetch("https://jsonplaceholder.typicode.com/users").then(
    res=>{
        res.json().then(
            data=>{console.log(data);
                if(data.length >0){
                    var temp="";
                    data.foreach((u)=>{
                        temp += "<tr>";
                        temp += "<td>"+u.id+"</td>"
                        temp += "<td>"+u.email+"</td>"
                        temp += "<td>"+u.first_name+"</td>"
                        temp += "<td>"+u.last_name+"</td>"
                        temp += "<td>"+u.avatar+"</td></tr>" 
                    })
                    document.getElementById("data").innerHTML = temp;
                }
            }
        )
    }
)
}
fetchData();