function openOop2(){
    document.getElementById("getOpen").style.display = "block";
}
function closeOpen_1(){
    document.getElementById("getOpen").style.display = "none";
}

function openPrice(){
     document.getElementById("openPrice_1").style.display = "block"
}
function closeOpen_2(){
    document.getElementById("openPrice_1").style.display = "none";
}
   

// contact open section

function openAddress(){
    document.getElementById("openBlock").style.display = "block"
}
function closeAddress(){
    document.getElementById("openBlock").style.display = "none"
}

// footer date 
const copyright = new Date();
const copyDate = copyright.getFullYear();
document.getElementById("copyrightDate").innerHTML = copyDate;
