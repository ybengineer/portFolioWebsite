
// validation for UserName

let name = "";
console.log(name.length);

document.getElementById("formId").addEventListener("onsubmit",checkString)
            
function checkString(){

let userName = document.getElementById("fname").value;
 console.log(userName);
 Validation(userName);

}
    

function Validation(userName){

    let span1 = document.getElementById("userName1").textContent = "";
   
      console.log(userName)
   for(let i = 0; i<userName.length; i++){

if(userName[i] == "1"){
   
    span1.textContent = "wron input";
    return false;


}

  
}

}
  