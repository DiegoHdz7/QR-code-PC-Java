
window.onload = main();


function main(){

    document.querySelector("#btn1").addEventListener("click",checkSignIN);
}

var listas = [
    {usrName:"Diego", password:"12345"},
    {usrName:"Gustavo", password:"678910"},
    {usrName:"Mariana", password:"abcde"}
];

function checkSignIN(){
    let content = document.querySelector("#testSpan");
    let form = document.querySelector("#idInput");
    let i = 0;
    let flagCheck=false;
    
    for (x in listas){
        content.innerHTML+="User name: " + listas[x].usrName + "Password: "+ listas[x].password + "<br>";


        if (listas[x].usrName===form.value){
            
            flagCheck=true;
            
        } 
        i++;
        
    }


    if(flagCheck==true){
        console.log("you're in"); 
    } else{
        console.log("wrong");
    }

}