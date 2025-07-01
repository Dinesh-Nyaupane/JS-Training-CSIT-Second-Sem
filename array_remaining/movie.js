/*
 Problem 8: Movie Duration Filter
Problem: In a movie recommendation app, suggest the first movie longer than 2 hours from the given durations. Hint: Use .find(). Input: [90, 110, 130, 100] Output: First long movie: 130




*/
function findFirstLongMovie(durations) {
    const Longmovie = durations.find(duration => duration > 120);
    if (Longmovie) {
        console.log("First Long Movie:", Longmovie);
    }
    else {
        console.log("No longer movie found:");
    }
}
const duration = prompt("Enter movie durations in minute");
const durationArray = duration.split(",").map(dur => parseInt(dur.trim(), 10));
findFirstLongMovie(durationArray);
