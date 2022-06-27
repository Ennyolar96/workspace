// hover to show text
$("#firstone").mouseover(function(){ $("#getshowp1").slideDown(); });
$("#firstone").mouseleave(function(){ $("#getshowp1").slideUp(); });

$("#secondone").mouseover(function(){ $("#getshowp2").slideDown(); });
$("#secondone").mouseleave(function(){ $("#getshowp2").slideUp(); });

$("#thirdone").mouseover(function(){ $("#getshowp3").slideDown(); });
$("#thirdone").mouseleave(function(){ $("#getshowp3").slideUp(); });

$("#forthone").mouseover(function(){ $("#getshowp4").slideDown(); });
$("#forthone").mouseleave(function(){ $("#getshowp4").slideUp(); });

// contact open section
function openAddress(){
    document.getElementById("openBlock").style.display = "block"
}
function closeAddress(){
    document.getElementById("openBlock").style.display = "none"
}

// get the current year
const newYearDate = () =>{
    let currentDate = document.getElementById("currentDate");
    let theDate = new Date();
    let newDate = theDate.getFullYear();
    currentDate.textContent = newDate;
}
newYearDate();

// Animation On Scroll
AOS.init();