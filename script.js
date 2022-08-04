
// let tnCInput = document.getElementById('tnC').value
function validate() {
let firstNameInput = document.getElementById('first-name').value
let lastNameInput = document.getElementById('last-name').value
let EmailInput = document.getElementById('E-mail').value
let cityInput = document.getElementById('City').value
let stateInput = document.getElementById('State').value
let zipInput = document.getElementById('zip').value
let tnCInput = document.getElementById('tnC').Checked

if(firstNameInput.length >= 1){
    document.getElementById('first-name-valid').style.display='block'
    document.getElementById("first-name-invalid").style.display = "none";
}
else{
    document.getElementById('first-name-invalid').style.display='block'
    document.getElementById("first-name-valid").style.display = "none";
}
if(lastNameInput.length >= 1){
    document.getElementById('last-name-valid').style.display='block'
    document.getElementById("last-name-invalid").style.display = "none";
}
else{
    document.getElementById('last-name-invalid').style.display='block'
    document.getElementById("last-name-valid").style.display = "none";
}
 if(stateInput){
     document.getElementById('state-valid').style.display='block'
     document.getElementById("state-invalid").style.display = "none";
 }
 else{
     document.getElementById('state-invalid').style.display='block'
     document.getElementById("state-valid").style.display = "none";
}
if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(EmailInput)){
    document.getElementById('email-valid').style.display='block'
    document.getElementById("email-invalid").style.display = "none";
}   
else{
    document.getElementById('email-invalid').style.display='block'
    document.getElementById("email-valid").style.display = "none";
}  
if(cityInput.length >= 2){
    document.getElementById('city-valid').style.display='block'
    document.getElementById("city-invalid").style.display = "none";
}
else{
    document.getElementById('city-invalid').style.display='block'
    document.getElementById("city-valid").style.display = "none";
} 
if (zipInput.length <= 6 && zipInput.length > 4){
    document.getElementById('zip-valid').style.display='block'
    document.getElementById("zip-invalid").style.display = "none";
}   
else{
    document.getElementById('zip-invalid').style.display='block'
    document.getElementById("zip-valid").style.display = "none";
} 
}
function checkedOrNot(){
    let tnCInput = document.getElementById("tnC").checked;   
    if(tnCInput){
        document.getElementById("tnC-valid").style.display = "block";
        document.getElementById("tnC-invalid").style.display = "none";
      } else {
        document.getElementById("tnC-invalid").style.display = "block";
        document.getElementById("tnC-valid").style.display = "none";
      }

}


