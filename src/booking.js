
export function getCustomerBookings(customerId, bookings){
    const customerRooms = bookings.filter(booking => {
        return booking.userID === customerId
    })
    console.log(customerId)
    console.log(customerRooms)
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

export function getAvailableRooms(date, roomData, bookings) {
    const bookedRoomNumbers = bookings
        .filter(booking => booking.date === date)
        .map(booking => booking.roomNumber);
    const availableRooms = roomData.filter(room => !bookedRoomNumbers.includes(room.number));
    return availableRooms;
}

export function filterRoomsByType(rooms, roomType = null) {
    if (roomType){
        return rooms.filter(room => room.roomType === roomType);
    } else {
        return rooms
    }
}
    