// let age = parseInt(prompt("Enter your age:"));
// let qualification = prompt("Enter your qualification:");
// let experience = parseFloat(prompt("Enter your years of experience:"));

// let isAgeOk = age >= 21 && age <= 35;
// let isQualificationOk = qualification === "bachelor" || qualification === "Bachelor" || qualification === "BACHELOR";
// let isExperienceOk = experience >= 2;

// let result = isAgeOk && isQualificationOk && isExperienceOk ? 
//   "You are eligible for the job." : 
//   isAgeOk && isQualificationOk ? 
//   "You meet age and qualification but not experience." : 
//   isAgeOk ? 
//   "You meet age only." : 
//   "Not eligible.";

//   alert(result);


// let age = parseInt(prompt("enter your age :"));
// let qual = prompt("enter your qualification : ");
// let exp = parseInt(prompt("Enter your experience : "));
// var result = ((age > 21 && age < 35) && 
// (qual == "bachelor" || qual == "BACHELOR" || qual == "Bachelor") &&
//  (exp >= 2))
// ?"you are eligible for the job" 
// :((age > 21 && age < 35) &&
//  (qual == "bachelor" || qual == "BACHELOR" || qual == "Bachelor"))?
// "you meet age and qualification but not experience" 
// :(age > 21 && age < 35)?"you meet the age only." 
// : "you are not eligible";
// alert(result);



let age = parseInt(prompt("Enter your age:"));
let qualification = prompt("Enter your qualification:");
let experience = parseFloat(prompt("Enter your years of experience:"));

qualification = qualification.toLowerCase();

let result;

if (age>=21 && age<=35){
  if (qualification==="bachelor"){
    if (experience>=2){
      result="you are eligible for job.";
    }
    else {
      result="only your age and qualification met but not experience.";
    }
    
  }
  else {
      result= "only your age met the crieteria.";
    }
}
else{
  result="you aren't eligible for job.";
}
console.log(result);