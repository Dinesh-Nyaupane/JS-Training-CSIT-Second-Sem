// In a movie recommendation app, suggest the first movie longer than 2 hours from the given durations. Hint: Use .find(). Input: [90, 110, 130, 100] Output: First long movie: 130
let duration = [90,110,130,100];
console.log (`The 1st movie longer then two hours is ${duration.find((Hours) => Hours>=120)} at ${duration.indexOf(duration.find((Hours) => Hours>=120))} `)