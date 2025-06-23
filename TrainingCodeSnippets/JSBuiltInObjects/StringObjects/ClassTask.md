# JavaScript String Practice Problems

This file includes 20 practice problems on JavaScript strings. They are divided into **basic** and **real-life simulation (tricky)** levels.

---

## 🔹 Basic String Problems (1–10)

Focus: Understanding `.length`, `charAt()`, `slice()`, `substring()`, `concat()`, `repeat()`, `trim()`, `toLowerCase()`, `toUpperCase()`, and `replace()`.

---

### 1. Count Total Characters in a String

**Problem:**
Write a function that returns the total number of characters in a given string, including spaces and punctuation.

**Hint:** Use the `.length` property.

**Sample Input:**
`"JavaScript is fun!"`

**Sample Output:**
`18`

---

### 2. Get the First and Last Character

**Problem:**
Return the first and last character of a string.

**Hint:** Use `charAt(0)` and `charAt(str.length - 1)`.

**Sample Input:**
`"coding"`

**Sample Output:**
`["c", "g"]`

---

### 3. Convert a Word to Uppercase

**Problem:**
Return a word in all uppercase letters.

**Hint:** Use `.toUpperCase()`.

**Sample Input:**
`"javascript"`

**Sample Output:**
`"JAVASCRIPT"`

---

### 4. Convert a Word to Lowercase

**Problem:**
Convert a word in uppercase to all lowercase letters.

**Hint:** Use `.toLowerCase()`.

**Sample Input:**
`"HELLO"`

**Sample Output:**
`"hello"`

---

### 5. Remove Extra Spaces Around Text

**Problem:**
Remove leading and trailing spaces from a string.

**Hint:** Use `.trim()`.

**Sample Input:**
`"   Welcome to coding!   "`

**Sample Output:**
`"Welcome to coding!"`

---

### 6. Extract Characters from a String Using Slice

**Problem:**
Extract a substring from the 2nd to 5th character (not including 5th).

**Hint:** Use `.slice(1, 5)`.

**Sample Input:**
`"developer"`

**Sample Output:**
`"evel"`

---

### 7. Extract Characters Using Substring

**Problem:**
Extract characters between index 2 and 5.

**Hint:** Use `.substring(2, 5)`.

**Sample Input:**
`"student"`

**Sample Output:**
`"ude"`

---

### 8. Repeat a Word Multiple Times

**Problem:**
Repeat a word 3 times.

**Hint:** Use `.repeat(3)`.

**Sample Input:**
`"Hi"`

**Sample Output:**
`"HiHiHi"`

---

### 9. Replace a Specific Word in a Sentence

**Problem:**
Replace the word `"bad"` with `"good"` in a sentence.

**Hint:** Use `.replace()`.

**Sample Input:**
`"This is a bad day"`

**Sample Output:**
`"This is a good day"`

---

### 10. Join Two Words Together

**Problem:**
Combine two words into one.

**Hint:** Use `.concat()` or `+` operator.

**Sample Input:**
`"Happy", "Day"`

**Sample Output:**
`"HappyDay"`

---

## 🔸 Tricky & Real-Life Simulation Problems (11–20)

Focus: Combining multiple string methods (no arrays or loops).

---

### 11. Normalize a User’s Name

**Problem:**
Trim and convert a name to lowercase.

**Hint:** Use `.trim()` and `.toLowerCase()`.

**Sample Input:**
`"  Alice SMITH  "`

**Sample Output:**
`"alice smith"`

---

### 12. Mask the Username in an Email

**Problem:**
Hide all characters in the email username except the first character.

**Hint:** Use `.charAt()`, `.slice()`, `.repeat()`.

**Sample Input:**
`"john@example.com"`

**Sample Output:**
`"j***@example.com"`

---

### 13. Censor a Word in a Sentence

**Problem:**
Replace a given word with `***` in a sentence.

**Hint:** Use `.replace()`.

**Sample Input:**
`"He is rude"` (censor `"rude"`)

**Sample Output:**
`"He is ***"`

---

### 14. Check if a Word Ends with "ing"

**Problem:**
Check if the string ends with `"ing"`.

**Hint:** Use `.endsWith("ing")`.

**Sample Input:**
`"running"`

**Sample Output:**
`true`

---

### 15. Make a Word Excited

**Problem:**
Convert a word to uppercase and repeat it twice, separated by `-`.

**Hint:** Use `.toUpperCase()` and `.concat()`.

**Sample Input:**
`"wow"`

**Sample Output:**
`"WOW-WOW"`

---

### 16. Create a Short Code

**Problem:**
Return the first 3 letters of a word in uppercase.

**Hint:** Use `.slice(0, 3)` and `.toUpperCase()`.

**Sample Input:**
`"developer"`

**Sample Output:**
`"DEV"`

---

### 17. Starts with a Specific Letter

**Problem:**
Check if a word starts with the letter `"A"` or `"a"`.

**Hint:** Use `.toUpperCase()` and `.startsWith("A")`.

**Sample Input:**
`"Apple"`

**Sample Output:**
`true`

---

### 18. Format Greeting Using Name

**Problem:**
Return a greeting in the format: `"Hello, NAME!"` with name in uppercase.

**Hint:** Use `.toUpperCase()` and `.concat()`.

**Sample Input:**
`"ravi"`

**Sample Output:**
`"Hello, RAVI!"`

---

### 19. Emphasize a Word with Symbols

**Problem:**
Surround the word with `**` on both sides.

**Hint:** Use string concatenation.

**Sample Input:**
`"cool"`

**Sample Output:**
`"**cool**"`

---

### 20. Convert Spaces to Dashes

**Problem:**
Replace all spaces in a sentence with dashes.

**Hint:** Use `.replaceAll(" ", "-")`.

**Sample Input:**
`"Learn JavaScript Now"`

**Sample Output:**
`"Learn-JavaScript-Now"`
