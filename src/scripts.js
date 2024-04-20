// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.scss';
import {fetchCustomerData, fetchAllRooms, fetchBookings} from './apiCalls'

export let customerId

const loginPage = document.querySelector('.login-container')
const bookingPage = document.querySelector('.booking')
const searchButton = document.querySelector(".search-button")
const navBar = document.querySelector(".nav")

// searchButton.addEventListener("click", searchRooms)

global.addEventListener('load', function(){
    fetchAllRooms()
    fetchBookings()
})

//LOGIN FUNCTIONS

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var usernameInput = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var matches = usernameInput.match(/\d+/); 
    if (matches) {
        var customerId = matches[0]; 
        var customerPrefix = usernameInput.replace(customerId, ""); 
        var username = customerPrefix + customerId;

        if (username === `customer${customerId}` && password === "overlook2021") {
            alert("Login successful!");
            loginPage.classList.add('hidden')
            bookingPage.classList.remove('hidden')
            navBar.classList.remove('hidden')
            fetchCustomerData(customerId)
        } else {
            document.getElementById("error-message").textContent = "Invalid username or password";
            setTimeout(function() {
                document.getElementById("error-message").textContent = "";
            }, 3000);
        }
    } else {
        document.getElementById("error-message").textContent = "Invalid username format";
    }
});


