import chai, { expect } from "chai";
import {
    roomData, 
    customers,
    bookings
} from "./data/mockData"
import {
    getCustomerBookings,
    getTotalBookingPrice,
    getAvailableRooms, 
    filterRoomsByType,
    bookRoom
} from "../src/booking"

describe('customer dashboard', function(){
    describe('get Customer Bookings', function(){
        it('should be a function', function(){
            expect(getCustomerBookings).to.be.a('function')
        })
       it('should return customers booking', function(){
        const customerId = 1
        const customerRooms = getCustomerBookings(customerId, bookings)
        expect(customerRooms).to.deep.equal([
            {
                "id": "5fwrgu4i7k55hl6sz",
                "userID": 1,
                "date": "2022/04/22",
                "roomNumber": 1,
              },
              {
                "id": "5fwrgu4i7k55hl6t6",
                "userID": 1,
                "date": "2022/01/10",
                "roomNumber": 3,
              }
        ])
       })
       it('should return nothing if there are no rooms', function(){
        const customerId = 0
        const customerRooms = getCustomerBookings(customerId, bookings)
        expect(customerRooms).to.deep.equal([])
        })
    })
    describe('get Total Booking Price', function(){
        it('should add together the total price of all cutomer bookings', function(){
            const customerRooms = [
                {
                    "id": "5fwrgu4i7k55hl6sz",
                    "userID": 1,
                    "date": "2022/04/22",
                    "roomNumber": 1,
                  },
                  {
                    "id": "5fwrgu4i7k55hl6t6",
                    "userID": 1,
                    "date": "2022/01/10",
                    "roomNumber": 3,
                  }
            ]
            const totalPrice = getTotalBookingPrice(customerRooms, roomData)
            expect(totalPrice).to.deep.equal(849.54)
        })
        it('should return 0 if no bookings for the customer', function() {
            const totalPrice = getTotalBookingPrice([], roomData);
            expect(totalPrice).to.equal(0);
        });
    })
})
describe('Searching rooms', function(){
    describe('get Available Rooms', function() {
        it('should return all rooms if no bookings exist for the provided date', function() {
            const date = "2022/05/01"; 
            const availableRooms = getAvailableRooms(date, roomData, bookings);
            expect(availableRooms).to.deep.equal(roomData);
        });
        it('should return only available rooms for the provided date', function() {
            const date = "2022/01/24"; 
            const availableRooms = getAvailableRooms(date, roomData, bookings);
            const expectedRooms = roomData.filter(room => room.number !== 2); 
            expect(availableRooms).to.deep.equal(expectedRooms);
        });
        it('should return an empty array if all rooms are booked for the provided date', function() {
            const date = "2022/01/10";
            const mockBookings = [
                {
                    "id": "5fwrgu4i7k55hl6sz",
                    "userID": 1,
                    "date": "2022/01/10",
                    "roomNumber": 1,
                  },
                  {
                    "id": "5fwrgu4i7k55hl6t5",
                    "userID": 2,
                    "date": "2022/01/10",
                    "roomNumber": 2,
                  }
            ]
            const mockRoomData = [
                {
                    "number": 1,
                    "roomType": "residential suite",
                    "bidet": true,
                    "bedSize": "queen",
                    "numBeds": 1,
                    "costPerNight": 358.4
                    },
                    {
                    "number": 2,
                    "roomType": "suite",
                    "bidet": false,
                    "bedSize": "full",
                    "numBeds": 2,
                    "costPerNight": 477.38
                    }
                ]
            const availableRooms = getAvailableRooms(date, mockRoomData, mockBookings);
            expect(availableRooms).to.be.an('array').that.is.empty;
        });
    });
    describe('filter Rooms By Type', function(){
        it('should return rooms of the specified room type', function() {
            const filteredRooms = filterRoomsByType(roomData, "single room");
            const expectedRooms = [
                {
                    "number": 3,
                    "roomType": "single room",
                    "bidet": false,
                    "bedSize": "king",
                    "numBeds": 1,
                    "costPerNight": 491.14
                },
                {
                    "number": 4,
                    "roomType": "single room",
                    "bidet": false,
                    "bedSize": "queen",
                    "numBeds": 1,
                    "costPerNight": 429.44
                }
            ];
            expect(filteredRooms).to.deep.equal(expectedRooms);
        });
    
        it('should return an empty array if no rooms of the specified room type are found', function() {
            const filteredRooms = filterRoomsByType(roomData, "double room");
            expect(filteredRooms).to.be.an('array').that.is.empty;
        });
    
        it('should return all rooms if room type is not specified', function() {
            const filteredRooms = filterRoomsByType(roomData);
            expect(filteredRooms).to.deep.equal(roomData);
        });
    })
    describe('book Room', function(){
        
    })
})
