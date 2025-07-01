/*
Problem: In a student record system, return the first student who has scored 80 or above for immediate distinction notification. Hint: Use .find(). Input: [50, 65, 77, 81, 60] Output: First distinction: 81





*/

let scores = [50, 65, 77, 81, 60];
const firstDestionation = scores.find(score => score >= 80);
console.log(`furst destionation: ${firstDestionation}`);
