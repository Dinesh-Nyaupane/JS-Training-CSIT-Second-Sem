# 🔢 JavaScript Array Methods - Real-Life Problem Solving Challenges

**Level:** BSc CSIT 1st Year, 2nd Semester
**Topic Focus:** Array Methods (`forEach`, `map`, `filter`, `reduce`, `reduceRight`, `find`, `findIndex`, `some`, `every`)
---

### 🧾 Problem 1: Restaurant Billing with VAT

**Problem:** You are building a digital billing system for a restaurant. You have an array of item prices ordered by a customer. You need to calculate the final bill by applying 13% VAT to each item and summing the total.
**Hint:** Use `.map()` for VAT, `.reduce()` for summation.
**Input:** `[100, 200, 150]`
**Output:** `Total bill: 508.5`

---

### 🎓 Problem 2: Passed Students Filter

**Problem:** In a university's result processing system, you are given an array of student marks. Write a function to return the list of marks that represent students who passed (>= 40).
**Hint:** Use `.filter()`.
**Input:** `[35, 80, 70, 25, 90]`
**Output:** `[80, 70, 90]`

---

### 🛍 Problem 3: E-commerce - Find the Most Expensive Item

**Problem:** While reviewing a customer's cart, the system must find the price of the most expensive item to offer a premium warranty.
**Hint:** Use `.reduce()` to find the max.
**Input:** `[199, 499, 1299, 850, 350]`
**Output:** `Most expensive item: 1299`

---

### 🎓 Problem 4: First Distinction Student

**Problem:** In a student record system, return the first student who has scored 80 or above for immediate distinction notification.
**Hint:** Use `.find()`.
**Input:** `[50, 65, 77, 81, 60]`
**Output:** `First distinction: 81`

---

### 🚚 Problem 5: Delivery Completion Check

**Problem:** An online shop stores delivery status of each order as `true` (delivered) or `false` (pending). Write a program to verify if all orders have been delivered.
**Hint:** Use `.every()`.
**Input:** `[true, true, false, true]`
**Output:** `Not all orders are delivered`

---

### 🎮 Problem 6: Game Scores with Bonus

**Problem:** In a gaming app, scores below 50 are disqualified. The rest get a 10-point bonus. Filter and adjust the scores.
**Hint:** `.filter()` then `.map()`.
**Input:** `[30, 55, 70, 45, 90]`
**Output:** `[65, 80, 100]`

---

### 🏬 Problem 7: Inventory Sales Summary

**Problem:** You are tracking the total number of items sold in a store. Given an array of sold units per product, calculate the total.
**Hint:** Use `.reduce()`.
**Input:** `[2, 5, 7, 3]`
**Output:** `Total items sold: 17`

---

### 🎥 Problem 8: Movie Duration Filter

**Problem:** In a movie recommendation app, suggest the first movie longer than 2 hours from the given durations.
**Hint:** Use `.find()`.
**Input:** `[90, 110, 130, 100]`
**Output:** `First long movie: 130`

---

### 🎓 Problem 9: Failing Students Alert

**Problem:** A school management system must quickly identify if any student has failed an exam (marks < 40).
**Hint:** Use `.some()`.
**Input:** `[70, 55, 30, 85]`
**Output:** `There is at least one failed student.`

---

### 🛒 Problem 10: Inventory Capitalization

**Problem:** You are preparing inventory reports. Convert all product names to uppercase before displaying.
**Hint:** Use `.map()`.
**Input:** `["milk", "bread", "butter"]`
**Output:** `["MILK", "BREAD", "BUTTER"]`

---

### 🍔 Problem 11: Meal Calorie Calculator

**Problem:** In a fitness tracking app, calculate the total calorie intake from a list of food items consumed.
**Hint:** Use `.reduce()`.
**Input:** `[300, 450, 500]`
**Output:** `Total calories: 1250`

---

### 🛏 Problem 12: Hotel Room Availability Checker

**Problem:** In a hotel booking system, determine the index of the first available room.
**Hint:** Use `.findIndex()`.
**Input:** `["booked", "booked", "available", "booked"]`
**Output:** `First available room at index 2`

---

### 🏪 Problem 13: Out of Stock Alert

**Problem:** A store tracks product availability using a boolean array. Check if any product is out of stock.
**Hint:** Use `.some()`.
**Input:** `[true, true, false, true]`
**Output:** `Some items are out of stock.`

---

### 🔢 Problem 14: Product of All Elements

**Problem:** Calculate the product of all elements in a given array for performance analytics.
**Hint:** Use `.reduce()`.
**Input:** `[1, 2, 3, 4]`
**Output:** `Product: 24`

---

### 📊 Problem 15: Extract Numbers from Mixed Array

**Problem:** In a data cleaning process, extract only numeric values from a mixed-type array.
**Hint:** Use `.filter()` + `typeof`.
**Input:** `[1, "hello", 3, true, 5]`
**Output:** `[1, 3, 5]`

---

### 📞 Problem 16: Count Specific Number Frequency

**Problem:** Given an array of feedback scores, count how many times a particular score (e.g., 5) was given.
**Hint:** Use `.filter()` and `.length`.
**Input:** `[5, 2, 5, 6, 5]`, find 5
**Output:** `5 occurs 3 times`

---

### 🔁 Problem 17: Reverse a Name

**Problem:** A text editor needs to reverse a string input character by character.
**Hint:** Use `.split("")` + `.reduceRight()`.
**Input:** `"coding"`
**Output:** `gnidoc`

---

### 🎵 Problem 18: Enhance Playlist Titles

**Problem:** In a music app, append a 🎵 emoji to each playlist name for design improvement.
**Hint:** Use `.map()`.
**Input:** `["Rock", "Jazz", "Pop"]`
**Output:** `["Rock🎵", "Jazz🎵", "Pop🎵"]`

---

### 🔍 Problem 19: First Prime Number Detection

**Problem:** In a math tutoring tool, detect the first prime number from a user-entered array.
**Hint:** Use `.find()` with a custom `isPrime()` function.
**Input:** `[4, 6, 8, 11, 15]`
**Output:** `First prime: 11`

---

### 🧺 Problem 20: Remove Duplicate Orders

**Problem:** In an order management system, remove duplicate order IDs from the log.
**Hint:** Use `.filter()` with `indexOf()` check.
**Input:** `[1, 2, 2, 3, 4, 4, 5]`
**Output:** `[1, 2, 3, 4, 5]`

---

> 💡 Want the solutions too? Let me know to generate an answer key!
