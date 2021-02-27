
window.onload = main();


function main(){
     document.querySelector("#pageContent").style.display="none";
    
    document.querySelector("#btnSignIn").addEventListener("click",checkSignIN);
   // document.querySelector("#btnSearchByCurp").addEventListener("click",searchByCurp);
}




/*********** array bd first adaptation*********************/

function searchByCurp(){
    console.log("number of employees = "+Employee.getEmployeesNumber());
    let fullName= document.querySelector("#fullName")
    let curp= document.querySelector("#curp") 
    let bloodType= document.querySelector("#bloodType")
    let factorRH= document.querySelector("#factorRH")
    let phone= document.querySelector("#phone")
   // let compareCurp= document.querySelector("#searchByCurp")

    let employeeFound = false;

    employeesList.forEach( function(element,index,array){
        if(compareCurp.value === element.curp){
            fullName.innerHTML=element.name + " "+ element.fLastName+ " "+element.mLastName;
            curp.innerHTML=element.curp;
            bloodType.innerHTML=element.bloodType;
            factorRH.innerHTML=element.fRH;
            phone.innerHTML=element.phone;
            employeeFound = true;
        } 

        
    })

    if (employeeFound === false) console.log("element not found");

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