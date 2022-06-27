var getStarted = document.getElementById("getStarted");

getStarted.addEventListener("change", function(){

if(getStarted.value == "Hire a freelancer"){
    document.getElementById("ineedExpert").style.display = "block";
    document.getElementById("amExpert").style.display = "none";
}

 if(getStarted.value == "Become a freelancer"){
    document.getElementById("ineedExpert").style.display = "none";
    document.getElementById("amExpert").style.display = "block";
}

}) 

function needExpert(){
document.getElementById("ineedExpert").style.display = "none"
var getStarted = document.getElementById("getStarted").value = "";
}
function amExpert(){
document.getElementById("amExpert").style.display = "none"
var getStarted = document.getElementById("getStarted").value ="";
}
function closeBar(){
document.getElementById("popup").style.display = "none"
}