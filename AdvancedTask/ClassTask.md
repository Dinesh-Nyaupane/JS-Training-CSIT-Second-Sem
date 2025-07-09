
# 🧠 Advanced JavaScript Real-Life Problem Set  
**For Training | Combined Concepts | Real-Life Simulations**

This set includes simulation-based problems combining core JavaScript concepts like:
- ✅ Data Types & Type Conversion
- ✅ Functions & Loops
- ✅ Built-in Objects (Array, String, Math, Date)
- ✅ User-defined Objects
- ✅ DOM Manipulation (2–3 Questions Only)

---

## 🔢 Question 1: Student Result Analyzer

**Problem:**  
You are asked to create a function that takes a list of students with their marks in 3 subjects. The function should:
- Calculate the average
- Assign grades (`A`, `B`, `C`, ` `F`)
- Return a report showing name, average, and grade

**Hint:** Use array, object, loop, condition, and Math.

**Sample Input:**
```js
[
  { name: "Aayush", marks: [80, 90, 85] },
  { name: "Sneha", marks: [40, 35, 30] }
]
```

**Sample Output:**
```js
[
  { name: "Aayush", average: 85, grade: "A" },
  { name: "Sneha", average: 35, grade: "F" }
]
```

---

## 🕒 Question 2: Attendance Date Checker

**Problem:**  
You are asked to build a function that checks if a student's last attendance was over 7 days ago.  
If so, return `"Send Reminder"`, else `"No action"`.

**Hint:** Use `Date`, subtraction, and object handling.

**Sample Input:**
```js
{ name: "Rita", lastAttendance: "2025-06-28" }
```

**Sample Output:**
```
Send Reminder
```

---

## 📦 Question 3: Inventory Stock Manager

**Problem:**  
You are managing a store inventory. Each item has quantity and threshold. Write a function to:
- Find items below threshold
- Return them in an array
- Mark them as `"Low Stock"` in the object

**Hint:** Loop, condition, object mutation.

**Sample Input:**
```js
[
  { name: "Pen", quantity: 5, threshold: 10 },
  { name: "Notebook", quantity: 20, threshold: 15 }
]
```

**Sample Output:**
```js
[
  { name: "Pen", quantity: 5, threshold: 10, status: "Low Stock" }
]
```

---

## 🎂 Question 4: Birthday Checker

**Problem:**  
You are asked to display names of employees whose birthday is today.

**Hint:** Use `Date`, string parsing, and conditionals.

**Sample Input:**
```js
[
  { name: "Bibek", dob: "1999-07-09" },
  { name: "Anu", dob: "2000-12-25" }
]
```

**Sample Output:**
```
Today is Bibek's Birthday! 🎉
```

---

## 💬 Question 5: Chat Message Filter

**Problem:**  
You are building a chat system and asked to remove messages containing blocked words:  
`["idiot", "dumb"]`. Show only safe messages.

**Hint:** Use string methods, loop, and filtering.

**Sample Input:**
```js
["Hi!", "You are an idiot", "Nice to meet you", "Don't be dumb"]
```

**Sample Output:**
```js
["Hi!", "Nice to meet you"]
```

---

## 🍽️ Question 6: Bill Splitter with Tip

**Problem:**  
You are asked to write a function that:
- Takes total amount and number of people
- Adds 10% tip
- Splits bill equally
- Returns per person amount (rounded)

**Hint:** Math, type conversion

**Sample Input:**
```js
total = "1000"
people = "4"
```

**Sample Output:**
```
Per person pays: Rs. 275
```

---

## 📑 Question 7: Resume Shortlister

**Problem:**  
You are asked to shortlist candidates who:
- Know "JavaScript"
- Have at least 2 years experience

Return their names only.

**Hint:** Use string includes, condition, loop

**Sample Input:**
```js
[
  { name: "Kiran", skills: "JavaScript, HTML", experience: 3 },
  { name: "Maya", skills: "Python, SQL", experience: 2 }
]
```

**Sample Output:**
```js
["Kiran"]
```

---

## 🧾 Question 8: Ticket Booking Validation

**Problem:**  
You're making a ticket system. A user gives:
- Name
- Age
- Date of journey

You must:
- Check age is number and > 5
- Check journey date is not in the past

**Hint:** Use type conversion, Date, condition

**Sample Input:**
```js
{ name: "Rohit", age: "12", journeyDate: "2025-07-08" }
```

**Sample Output:**
```
Valid Booking
```

---

## 🗓️ Question 9: Task Deadline Tracker

**Problem:**  
You are asked to create a tracker that:
- Accepts tasks with deadlines
- If deadline is within 3 days, mark `"Urgent"`

**Hint:** Use `Date`, difference, array update

**Sample Input:**
```js
[
  { task: "Submit Report", deadline: "2025-07-11" },
  { task: "Pay Fees", deadline: "2025-07-20" }
]
```

**Sample Output:**
```js
[
  { task: "Submit Report", deadline: "2025-07-11", status: "Urgent" },
  { task: "Pay Fees", deadline: "2025-07-20" }
]
```

---

## 🌐 DOM Section

---

## 🖼️ Question 10: DOM Simulation – Photo Frame Title

**Problem:**  
You are asked to create a dynamic photo frame title changer. Create a function that sets the title (`<h1>`) to the given name using DOM.

**Hint:** Use `document.getElementById().innerText`

**Sample Input:**
```js
setFrameTitle("My Summer Vacation");
```

**Sample Output (HTML):**
```html
<h1>My Summer Vacation</h1>
```

---

