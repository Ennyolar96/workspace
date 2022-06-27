let hourly_date_selector = document.getElementById('hourly_date_selector');
let hourly_date = document.getElementById("hourly_date");
let start_time = document.getElementById("start_time"); 
let hourly_space_type = document.getElementById("hourly_space_type");
let hourly_payment = document.getElementById("hourly_payment");
let hourly_arr = Array();
let hourly_dateSearch;

// allow multiply dates to be selected
hourly_date_selector.addEventListener('change', e => {
    hourly_dateSearch = e.target.value;
    hourly_arr.push(e.target.value);
    hourly_date.value = hourly_arr;
});

// disabling the pass days

$(function(){
    var dtToday = new Date();
    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if(month < 10)
    month = "0" + month.toString();
    if(day < 10) 
    day = "0" + day.toString();
    var minDate = year + '-' + month + '-' + day;
    $('#hourly_date_selector').attr('min', minDate);
})
// copy the account number
    copyTextBtn = document.querySelector('.copybtn');
    copyTextBtn.addEventListener('click', function(event) {
      let copyTextarea = document.querySelector('#copyText');
      copyTextarea.focus();
      copyTextarea.select();
      try {
        let successful = document.execCommand('copy');
        let msg = successful ? 'successful' : 'unsuccessful';
        alert('Account number copied ' + msg);
      } catch(err) {
        alert('Unable to copy');
      }
    });

// clear all btn
function hourlyClearAll() {
   hourly_date_selector.value = " ";
   hourly_date.value = " ";            
    hourly_arr = [];
}
// confirmation button
function hourly_confirm() {
    
    // making sure the user did not pass 17 hours
    let num_hours = document.getElementById('num_hours').value;
    let hours_number = parseInt(num_hours);

    let the_starting_time = start_time.value;
    let oddNumber =  the_starting_time;
    let convert_to_num = parseInt(oddNumber);

    let the_result = convert_to_num + hours_number;
    
    // getting the amount user need to pay

    hourly_payment.textContent = hourly_arr.length * hours_number * 200;

    if(the_result >= 17){

       let hourly_pass = document.getElementById("hourly_pass");
       hourly_pass.textContent = "Sorry you have exceed the working hours";
       hourly_pass.style.color = "red";

    }else if(!start_time.value == " " && !hourly_date.value == " " && !hourly_space_type .value == " "){

        let m_check = hourly_arr;
        m_check.forEach(my_Function)
        function my_Function(m_check){
            let week_Day = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Satur"];
            let now_Date = new Date(m_check);
            let get_Date = week_Day[now_Date.getDay()];
            if(get_Date === "Satur" || get_Date === "Sun"){
                console.log(m_check)
                document.getElementById("hourly_confirm_box").style.display = "block";
                document.getElementById("hourly_weekend_Error").style.display = "block";
                document.getElementById("hourly_bankInfo").style.display = "none"
            } else {
                document.getElementById("hourly_confirm_box").style.display = "block";
                document.getElementById("hourly_weekend_Error").style.display = "none";
                document.getElementById("hourly_bankInfo").style.display = "block"
            }
        }
    }
    else {
       let start_time_error = document.getElementById("start_time_error");
       start_time_error.textContent = "Oh! Sorry am required";
       start_time_error.style.color = "red"
       
       let hourly_empty_Space = document.getElementById("hourly_empty_Space");
       hourly_empty_Space.textContent = "Oh! Sorry am required";
       hourly_empty_Space.style.color = "red";

       let theSpace_type = document.getElementById("theSpace_type")
       theSpace_type.textContent = "Oh! Sorry am required";
       theSpace_type.style.color = "red";
    }   
}

// btn inside the weekend error msg
function hourly_hide_ConfirmBox(){
    document.getElementById("hourly_confirm_box").style.display = "none";
    hourly_date_selector.value = " ";
    hourly_date.value = " ";            
    hourly_arr = [];
}
// cancel btn that stay with submit btn
function hourly_closeDiv() {
    document.getElementById("hourly_confirm_box").style.display = "none";
    hourly_date_selector.value = " ";
    hourly_date.value = " ";             
    hourly_arr = [];
}// giving the hourly only the hot deck chance
fetch("https://workspaceapi.herokuapp.com/api/space-type")
    .then(response => response.json())
    .then(data => {
        let opt = document.createElement("option");
        opt.value = data[2].id;
        opt.textContent = data[2].space_type_name;
        hourly_space_type.appendChild(opt);
    });// search for available spaces
hourly_space_type.addEventListener('change', e => {
    let endpoint = ("https://workspaceapi.herokuapp.com/api/available"+'/'+hourly_dateSearch+'/'+e.target.value);
    fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    document.getElementById("hourly_available_space").value = data[0].id;
}) 
});// function sentData(e){
//     e.preventDefault()
//     console.log(e.target)
// }// sending form to the database
function hourlyFormSend(e){
    e.preventDefault()
    document.getElementById('hourly_confirm_box').style.display = 'none';
    
    var hourly_form_data = new FormData();
   
    // appending monthly values to the form
    hourly_form_data.append("date", document.getElementById("hourly_date").value);
    hourly_form_data.append("start_time", document.getElementById("start_time").value);
    hourly_form_data.append("num_hours", document.getElementById("num_hours").value);
    hourly_form_data.append("space_id", document.getElementById("hourly_available_space").value);    for (var value of hourly_form_data.values()) {
        console.log(value); 
     }
    document.getElementById('div_result').style.display = 'block';
    // https://workspaceapi.herokuapp.com/api/hourly-booking/new
    // https://formsubmit.co/ajax/ennyolar1996@gmail.com
    fetch('https://workspaceapi.herokuapp.com/api/hourly-booking/new', {
        method: "POST",
        body: hourly_form_data
    })
    
    .then((result) => {
        console.log(result)
        if(result.status != 200){
            if (result.status != 200) {
            hideloader();
            }
            throw new Error(alert("Error occur please try again later"));
            
        }
        return result.text();
    })
        .then((Response) => {
        if (Response) {
        hideloader();
        }
        const giveResponse = JSON.parse(Response);
        const displayResponse = giveResponse.response;
        alert(displayResponse);
    })
        .catch((error) => {
        console.log(error);
    });
    function hideloader() {
    document.getElementById('div_result').style.display = 'none';
    }
    return false;
}