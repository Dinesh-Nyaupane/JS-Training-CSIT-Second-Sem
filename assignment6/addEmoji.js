// Problem: In a music app, append a 🎵 emoji to each playlist name for design improvement. Hint: Use .map(). Input: ["Rock", "Jazz", "Pop"] Output: ["Rock🎵", "Jazz🎵", "Pop🎵"]
const music = ["Rock", "Jazz", "Pop"];
console.log(music.map((emoji)=> emoji+"🎵"));