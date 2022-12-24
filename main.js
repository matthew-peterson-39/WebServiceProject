
// let first_name = document.getElementById("first-input");
// console.log(first_name);
let first_name = document.getElementById("first-input");
let last_name = document.getElementById("last-input");
let username = document.getElementById("username-input")
let birthday = document.getElementById("birthday-input");
let email = document.getElementById("email-input");
let phone = document.getElementById("phone-input");

let all_inputs = [first_name, last_name, username, birthday, email, phone];


function submit_info() {
    all_inputs.forEach(input => {
        if(input.value == null || input.value == "") {
            window.alert("Empty value detected. Enter a value before submitting.");
            return;
        }
        else {
            console.log(input.value);;
            input.value = null;
        }
    });
    window.alert("Registration Successful!")
}