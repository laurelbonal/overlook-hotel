
export function getCustomerBookings(customerId, bookings){
    const customerRooms = bookings.filter(booking => {
        return booking.userID === customerId
    })
    return customerRooms
}

export function getTotalBookingPrice(customerRooms, roomsData) {
    let totalPrice = 0;
    customerRooms.forEach(booking => {
        const room = roomsData.find(room => room.number === booking.roomNumber);
        if (room) {
            totalPrice += room.costPerNight;
        }
    });
    return totalPrice;
}

export function getAvailableRooms(date, roomsData, bookings) {
    const bookedRoomNumbers = bookings
        .filter(booking => booking.date === date)
        .map(booking => booking.roomNumber);
    const availableRooms = roomsData.filter(room => !bookedRoomNumbers.includes(room.number));
    return availableRooms;
}

export function filterRoomsByType(rooms, roomType = null) {
    if (roomType){
        return rooms.filter(room => room.roomType === roomType);
    } else {
        return rooms
    }
}
   
export function bookRoom(customer, roomID, bookings){

}