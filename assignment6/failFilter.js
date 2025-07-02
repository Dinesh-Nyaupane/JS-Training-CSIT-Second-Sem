// Problem: A school management system must quickly identify if any student has failed an exam (marks < 40). Hint: Use .some(). Input: [70, 55, 30, 85] Output: There is at least one failed student.
let marks = [70, 55, 30, 85];
console.log(
  marks.some((mark) => mark < 40)
    ? "At least one student has failed"
    : "All students have passed"
);