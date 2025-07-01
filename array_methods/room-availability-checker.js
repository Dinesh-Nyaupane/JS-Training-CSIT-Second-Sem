let rooms = ["booked" , "booked", "available", "booked"]
console.log(`Room is available at ${rooms.findIndex((room) => {
  return  room === "available"
})} index `)