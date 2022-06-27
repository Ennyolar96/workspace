var getStarted = document.getElementById("getStarted");

getStarted.addEventListener("change", function(){
if(getStarted.value == "I need an Influencer"){
    document.getElementById("ineedExpert").style.display = "block";
    document.getElementById("amExpert").style.display = "none";
}

 if(getStarted.value == "I am an Influencer"){
    document.getElementById("ineedExpert").style.display = "none";
    document.getElementById("amExpert").style.display = "block";
}

}) 
function needExpert(){
document.getElementById("ineedExpert").style.display = "none"
getStarted.value = "";
}
function amExpert(){
document.getElementById("amExpert").style.display = "none"
getStarted.value = "";
}
function closeBar(){
document.getElementById("popup").style.display = "none"
}