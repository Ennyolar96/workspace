var getStarted = document.getElementById("getStarted");

getStarted.addEventListener("change", function(){

    if(getStarted.value == "Need an expert"){
        document.getElementById("ineedExpert").style.display = "block";
        document.getElementById("amExpert").style.display = "none";
    }

     if(getStarted.value == "Am an expert"){
        document.getElementById("ineedExpert").style.display = "none";
        document.getElementById("amExpert").style.display = "block";
    }

})
function closeBar(){
    document.getElementById("popup").style.display = "none"
} 
function needExpert(){
    document.getElementById("ineedExpert").style.display = "none"
    var getStarted = document.getElementById("getStarted").value = "";
}
function amExpert(){
    document.getElementById("amExpert").style.display = "none"
    var getStarted = document.getElementById("getStarted").value = "";
}