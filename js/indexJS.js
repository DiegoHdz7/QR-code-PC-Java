
window.onload = main();


function main(){
     document.querySelector("#pageContent").style.display="none";
    
    document.querySelector("#btnSignIn").addEventListener("click",checkSignIN);
    document.querySelector("#viewEmployeeList").addEventListener("click",createEmployeeList);
   // document.querySelector("#btnSearchByCurp").addEventListener("click",searchByCurp);
}






/**************************** logging manager check*************************/

function checkSignIN(){
    let usrName = document.querySelector("#usrNameInput");
    let password= document.querySelector("#pswInput");
    let pageContent = document.querySelector("#pageContent");
    let isUsrValid  = false;
   


    managersList.forEach(function(element,index,array){
        if (usrName.value===element.usrName && password.value===element.password){
            isUsrValid=true;
            console.log("user is valid"+ element);
        } 
    });

    if(isUsrValid){
        pageContent.style.display="flex";
    } else{
        console.log("usr not valid");
        pageContent.style.display="none";
    }

}

function createEmployeeList(e){
    alert("employee list");
    Employee.updateEmployeesList();
    console.log(employeesList);
    let content = document.querySelector("#showContent");
    content.innerHTML ="";
    let table= document.createElement("table");
    let caption = table.createCaption();
    caption.innerHTML = "Lista de empleados";
    let row = table.insertRow();
    row.innerHTML="<th>index</th>"+"<th>Nombre</th>"+"<th>CURP</th>"+"<th>Teléfono</th>";
    let tdNumber=0;
    content.append(table);

    employeesList.forEach(function(employee,index,array){
        row = table.insertRow();
        row.innerHTML="<td>"+(index+1)+"</td>"+"<td>"+employee.name+" "+employee.fLastName+" "+employee.mLastName+"</td>"
                      +"<td>"+employee.curp+"</td>"+"<td>"+employee.phone+"</td>"
                      +"<td class='trashBin'> <image   src='../images/trash.png' alt='trash'></td>";
        
    });

    document.querySelectorAll(".trashBin").forEach(function(element,index,array){
        element.addEventListener('click',removeEmployee);

    });

     table.style.border="2px solid white ";
    
  //  table.style.color="white";
    
    //row.innerHTML="<td>table</td>";
    

    
}

function removeEmployee(evt){
    alert("remove employee");
    //console.log(employeesList);
    let  table=evt.target.parentNode.parentElement.offsetParent;
    let rowIndex=evt.target.parentNode.parentElement.rowIndex;
    table.deleteRow(rowIndex);
    
    employeesList.splice((rowIndex-1),1);
    Employee.updateLocalEmployeesList();
    console.log(evt.target.parentNode.parentElement.offsetParent); // to get the index of the row, very important->evt.target.parentNode.parentElement.rowIndex
    createEmployeeList();


}


