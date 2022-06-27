// registration javaScript code

function checkSelect(){
    var select_account = document.querySelector('.select_account')
   
    for(var i = 0; i < select_account.length; i++){
        var getValue = this.select_account.value;
        // console.log(addThisToMe)

        // if the value equal to individual it should show the file box else its should hide the file box of individual
        if(getValue === "Individual"){
            document.getElementById("individual").style.display = "block";
            document.getElementById("innerme").style.display = "none"
        }else{
            document.getElementById("individual").style.display = "none";
        }

         // if the value equal to business it should show the file box else its should hide the file box of business
        if(getValue === "Business"){
            document.getElementById("business").style.display = "block";
            document.getElementById("innerme").style.display = "none"
        }else{
            document.getElementById("business").style.display = "none";
    
        }
    }
}

function checkForm(){
    var select_account = document.getElementById("select_account").value;
    // check the the user select from the dropdown
    if(select_account === " "){
        document.getElementById("innerme").style.display = "block"
        document.getElementById("innerme").style.color = "red"
        document.getElementById("innerme").innerHTML = "Oh! You forget this"
    }
    else{
        document.getElementById("innerme").style.display = "none"
    }

    // validate the password to contain Alphabet, Number and Symbol
    var pwd = document.getElementById("pwd")
    var checkpwd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if(!pwd.value.match(checkpwd)){
        document.getElementById("pwdresult").style.display = "block"
        document.getElementById("pwdresult").style.color = "red"
        document.getElementById("pwdresult").innerHTML = "Oh! Add more, This look weak"
        return false;
    }
    else{
        document.getElementById("pwdresult").style.display = "none"
        return true;
    }
}
