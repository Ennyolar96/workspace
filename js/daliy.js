// getting the space type for the daily booking 
        // https://workspaceapi.herokuapp.com/api/space-type"
        fetch("https://workspaceapi.herokuapp.com/api/space-type")
            .then(response => response.json())
            .then(data => {
            data.forEach(d => {
                let opt = document.createElement("option");
                opt.value = d.id;
                opt.textContent = d.space_type_name;
                spaces.appendChild(opt);
            })
        });

        // search for available spaces
        spaces.addEventListener('change', e => {
            let endpoint = ("https://workspaceapi.herokuapp.com/api/available"+'/'+dateSearch+'/'+e.target.value);
            fetch(endpoint)
            .then(response => response.json())
            .then(data => {
            document.getElementById("available_spaces").value = data[0].id;}) 
        });
            

        let dateSelector = document.getElementById('date-selector');
        let dates = document.getElementById("date");
        let arr = Array();
        let dateSearch;

        dateSelector.addEventListener('change', e => {
            dateSearch = e.target.value;
            arr.push(e.target.value);
            dates.value = arr;
        });
        
        // clear all btn
        function clearAll() {
            dateSelector.value = " ";
            dates.value = " ";            
            arr = [];
        }

        // disabling the pass days form the calender
        $(function(){
            var dailyToday = new Date();
            var dailyMonth = dailyToday.getMonth() + 1;
            var dailyDay = dailyToday.getDate();
            var dailyYear = dailyToday.getFullYear();
            if(dailyMonth < 10)
            dailyMonth = "0" + dailyMonth.toString();
            if(dailyDay < 10) 
            dailyDay = "0" + dailyDay.toString();
            var daily_minDate = dailyYear + '-' + dailyMonth + '-' + dailyDay;
            $('#date-selector').attr('min', daily_minDate);
        })

        function confirmCheck() {
            var spaces = document.getElementById("spaces").value;

            if(!spaces == " " && !dates == " "){
                let mThis = arr;
                mThis.forEach(myFunction)
                console.log(mThis)

                function myFunction(mThis){
                    let weekDay = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Satur"];
                    let nowDate = new Date(mThis);
                    let getDate = weekDay[nowDate.getDay()];
                    console.log(getDate);
                    if(getDate === "Satur" || getDate === "Sun"){
                        document.getElementById("confirm_box").style.display = "block";
                        document.getElementById("weekendError").style.display = "block";
                        document.getElementById("bankInfo").style.display = "none"
                    } else {
                        document.getElementById("confirm_box").style.display = "block";
                        document.getElementById("weekendError").style.display = "none";
                        document.getElementById("bankInfo").style.display = "block";
                    }
                }
            } else {
                console.log("space is entry");
                document.getElementById("arrError").textContent = "Oh! sorry am required";
                document.getElementById("spaceError").textContent = "Oh! sorry am required";
            } 
        }

        // copy the account number
    dailycopybtn = document.querySelector('.dailycopybtn');
    dailycopybtn.addEventListener('click', function(event) {
      let dailycopyText = document.querySelector('#dailycopyText');
      dailycopyText.focus();
      dailycopyText.select();
      try {
        let successful = document.execCommand('copy');
        let dailymsg = successful ? 'successful' : 'unsuccessful';
        alert('Account number copied ' + dailymsg);
      } catch(err) {
        alert('Unable to copy');
      }
    });

        // btn inside the weekend error msg
        function hideConfirmBox(){
            document.getElementById("confirm_box").style.display = "none";
            dateSelector.value = " ";
            dates.value = " ";            
            arr = [];
        }
        // cancel btn that stay with submit btn
        function closeDiv() {
            document.getElementById("confirm_box").style.display = "none";           
            arr = [];
        } 

// sending the form to the database

        function sendData(){
            document.getElementById('confirm_box').style.display = 'none';
            
            var form_data = new FormData();
           
            // appending monthly values to the form
            form_data.append("date", document.getElementById("date").value);
            form_data.append("space_id", document.getElementById("spaces").value);
            form_data.append("space_type", document.getElementById("available_spaces").value);
            document.getElementById('div_result').style.display = 'block';
            // https://workspaceapi.herokuapp.com/api/bookings/new
            // https://formsubmit.co/ajax/ennyolar1996@gmail.com
            fetch('https://workspaceapi.herokuapp.com/api/bookings/new', {
                method: "POST",
                body: form_data
            })
            
            .then((result) => {
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
                console.log(Response);
                console.log(displayResponse);
            })
            

            .catch((error) => {
                console.log(error);
            });
            function hideloader() {
            document.getElementById('div_result').style.display = 'none';
            }
            return false;
        }