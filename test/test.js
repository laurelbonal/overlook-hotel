import chai, { expect } from "chai";
import {
    roomData, 
    customers,
    bookings
} from "./data/mockData"
import {
    getAvailableRooms
} from "../src/booking"

describe('bookings', function(){
    it('should be a function', function(){
        expect(getAvailableRooms).to.be.a('function')
    })
    
})
