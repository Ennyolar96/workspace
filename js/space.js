// booking javaScript code

// typing animation to welcome the user when first landed on the page

var i = 0;
var mytext = 'Welcome our dear user, how many space can will secure for you today?';
var speed = 50;

if(i < mytext.length){
    function typeword(){
        document.getElementById("welcome").innerHTML += mytext.charAt(i)
        i++;
        setTimeout(typeword, speed)
    }
}
typeword()
  

// show the text under when the check box is checked and hide it when is unchecked

function openDay1() {
    // Get the checkbox
    var day1 = document.getElementById("day1");
    // Get the output text
    var day1CheckBox = document.getElementById("day1CheckBox");
    // If the checkbox is checked, display the output text
    if (day1.checked == true){
        day1CheckBox.style.display = "block";
    } else {
        day1CheckBox.style.display = "none";
    }
}

// show the text under when the check box is checked and hide it when is unchecked

function openDay2(){
    var day2 = document.getElementById("day2");
    var day2CheckBox = document.getElementById("day2CheckBox");

    if(day2.checked === true){
        day2CheckBox.style.display = "block";
    }
    else{
        day2CheckBox.style.display = "none"
    }
}

// show the text under when the check box is checked and hide it when is unchecked

function openDay3(){
    var day3 = document.getElementById("day3");
    var day3CheckBox = document.getElementById("day3CheckBox");

    if(day3.checked === true){
        day3CheckBox.style.display = "block"
    }
    else{
        day3CheckBox.style.display = "none"
    }
}

function openDay4(){
    var day4 = document.getElementById("day4");
    var day4CheckBox = document.getElementById("day4CheckBox");

    if(day4.checked === true){
        day4CheckBox.style.display = "block"
    }
    else{
        day4CheckBox.style.display = "none"
    }
}

function openDay5(){
    var day5 = document.getElementById("day5");
    var day5CheckBox = document.getElementById("day5CheckBox");

    if(day5.checked === true){
        day5CheckBox.style.display = "block"
    }
    else{
        day5CheckBox.style.display = "none"
    }
}

// Displaying the current month, day and year to the users

var current = document.getElementById("current");

const today = new Date();
const getDates = today.getDate()
const getYears = today.getFullYear()
const month = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "August", "Sep", "Oct", "Nov", "Dec"];
let monthName = month[today.getMonth()];
current.innerHTML = monthName + " " + getDates + ", " + getYears;

// Displaying the current time to the users
const currentTime = document.getElementById("currentTime")
function addZero(i) {
if (i < 10 ) {
    i = "0" + i
}
return i;
}

const interval = setInterval(() => {
const todayTime = new Date();
let theHours = addZero(todayTime.getHours());
let theMin = addZero(todayTime.getMinutes());
let theSec = addZero(todayTime.getSeconds());
let time = theHours + ":" + theMin + ":" + theSec;
document.getElementById("currentTime").innerHTML = time;
}, 1000);

// forms

function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
