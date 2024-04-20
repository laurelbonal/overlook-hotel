import  "./scripts.js"
import { customerId } from "./scripts.js"


export let customerAPI
export let roomAPI
export let bookingsAPI



export function fetchCustomerData(customerId){
    fetch(`http://localhost:3001/api/v1/customers/${customerId}`)
    .then((response) => response.json())
    .then((data) => {
      customerAPI = data
      console.log(customerAPI)
    })
    .catch((error) => console.error(error));
}

export function fetchAllRooms(){
  fetch("http://localhost:3001/api/v1/rooms")
  .then((response) => response.json())
  .then((data) => {
    roomAPI = data
    console.log(roomAPI)
  })
  .catch((error) => console.error(error))
}

export function fetchBookings(){
  fetch('http://localhost:3001/api/v1/bookings')
  .then((response) => response.json())
  .then((data) => {
    bookingsAPI = data
    console.log(bookingsAPI)
  })
  .catch((error) => console.error(error))
}