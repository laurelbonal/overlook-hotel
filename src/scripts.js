// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.scss';
import {fetchCustomerData, fetchAllRooms, fetchBookings, roomAPI, bookingsAPI, customerAPI} from './apiCalls'
import { getCustomerBookings, getTotalBookingPrice, getAvailableRooms, filterRoomsByType} from './booking';
export let customerId

const loginPage = document.querySelector('.login-container')
const bookingPage = document.querySelector('.booking')
const bookingButton = document.querySelector('.booking-button')
const searchButton = document.querySelector(".search-button")
const navBar = document.querySelector(".nav")
const dashboardButton = document.querySelector('.dashboard-button')
const dashboard = document.querySelector('.dashboard')
const customerBookingElement = document.querySelector('.customer-bookings')
const bookingTotal = document.querySelector('.total-spent')


global.addEventListener('load', function(){
    fetchAllRooms()
    fetchBookings()
})

dashboardButton.addEventListener('click', function(){
    setDashboardView()
    displayBookings(customerId, bookingsAPI, roomAPI)
})

bookingButton.addEventListener('click', function(){
    setBookingView()
})

searchButton.addEventListener('click', function(){
    searchForRooms()
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
    return customerId
});

// DASHBOARD FUNCTIONS

function setDashboardView(){
    loginPage.classList.add('hidden')
    navBar.classList.remove('hidden')
    dashboard.classList.remove('hidden')
    bookingPage.classList.add('hidden')
}

function displayBookings(customerId, bookingsAPI, roomAPI) {
    customerId = customerAPI.id
    const roomsToDisplay = getCustomerBookings(customerId, bookingsAPI);
    roomsToDisplay.forEach(booking => {
        const room = roomAPI.find(room => room.number === booking.roomNumber);
        
        if (room) {
            const paragraph = document.createElement('p');
            const roomText = `Room: ${room.number}, 
                Type: ${room.roomType}, 
                Bed Size: ${room.bedSize}, 
                Beds: ${room.numBeds}, 
                Bidet: ${room.bidet ? 'Yes' : 'No'}, 
                Cost Per Night: $${room.costPerNight}`;
            
            paragraph.innerText = roomText;
            customerBookingElement.appendChild(paragraph);
        }
        else {
            customerBookingElement.innerText = 'You currently have no bookings'
        }
    });
    const totalPrice = getTotalBookingPrice(roomsToDisplay, roomAPI)
    bookingTotal.innerText = `You have spent ${totalPrice}`
}

// BOOKING FUNCTIONS

function setBookingView(){
    loginPage.classList.add('hidden')
    navBar.classList.remove('hidden')
    dashboard.classList.add('hidden')
    bookingPage.classList.remove('hidden')
}
