import  "./scripts.js"
import { customerId, roomToBook } from "./scripts.js"


export let customerAPI = [] 
export let roomAPI 
export let bookingsAPI
export let newBooking



export function fetchCustomerData(customerId){
    fetch(`http://localhost:3001/api/v1/customers/${customerId}`)
    .then((response) => response.json())
    .then((data) => {
      customerAPI = data
      console.log(customerAPI.id)
    })
    .catch((error) => alert(`sorry! ${error}`));
}

export function fetchAllRooms(){
  fetch("http://localhost:3001/api/v1/rooms")
  .then((response) => response.json())
  .then((data) => {
    roomAPI = data.rooms
    console.log(roomAPI)
  })
  .catch((error) => alert(`sorry! ${error}`))
}

export function fetchBookings(){
  fetch('http://localhost:3001/api/v1/bookings')
  .then((response) => response.json())
  .then((data) => {
    bookingsAPI = data.bookings
    console.log(bookingsAPI)
    
  })
  .catch((error) => alert(`sorry! ${error}`))
}

export function postBooking(bookingData){
  fetch('http://localhost:3001/api/v1/bookings', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(bookingData)
  })
  .then(response => {
    if (!response.ok) {
      throw Error('Sorry, booking failed. Please try again later.');
    }
    return response.json();
  })
  .then(data => {
    newBooking = data.newbooking
    alert('Room Booked! Thank you!'); 
  })
  .catch(error => { 
    alert(error.message); 
  });
}






