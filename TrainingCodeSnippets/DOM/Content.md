Title: HTML DOM for Beginners - CSIT Second Semester

---

# Chapter 1: Introduction to HTML DOM

## 1.1 What is DOM?

The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the structure of a document as a tree of nodes. Each node represents an element, attribute, or piece of text. The DOM allows developers to programmatically read and manipulate the structure and content of web pages.

### Real-life Analogy:

Imagine a web page as a family tree. The root node (document) is the grandparent, and all HTML elements are children, grandchildren, etc. You can access any family member (node), change their details (like name or style), and even remove or add members dynamically using JavaScript.

## 1.2 HTML vs DOM

* **HTML**: The static code written by developers.
* **DOM**: The live, interactive representation of the HTML, created and managed by the browser.

### Real-life Scenario:

HTML is like the blueprint of a building. DOM is the actual building constructed using that blueprint where you can walk around, open doors, or rearrange furniture.

## 1.3 DOM Tree Structure

* **Document** is the root.
* **Elements** like `<body>`, `<div>`, `<p>` are nodes.
* Nodes have **parent**, **child**, and **sibling** relationships.

### Example:

```html
<html>
  <body>
    <div id="container">
      <p>Hello</p>
    </div>
  </body>
</html>
```

DOM Tree:

* document

  * html

    * body

      * div#container

        * p

---

# Chapter 2: DOM Methods (Accessing Elements)

## 2.1 `getElementById("id")`

* ✅ **What**: Selects the element with the specified `id` attribute.
* 🧠 **Why/When**: Use when targeting a single, unique element.
* 🔁 **Returns**: The `HTMLElement` or `null` if not found.
* 🔍 **What Happens**: The DOM scans the tree for a match.

### Real-life Example:

```html
<h1 id="title">Welcome</h1>
```

```js
let title = document.getElementById("title");
title.style.color = "blue";  // Changes heading color
```

**Scenario**: Highlighting the page title on load.

## 2.2 `getElementsByClassName("class")`

* ✅ **What**: Selects all elements with a specific class.
* 🔁 **Returns**: A live `HTMLCollection`.

### Real-life Scenario:

Use this method when styling or applying logic to multiple elements, like pricing cards or list items.

```html
<div class="card">Card 1</div>
<div class="card">Card 2</div>
```

```js
let cards = document.getElementsByClassName("card");
for (let i = 0; i < cards.length; i++) {
  cards[i].style.border = "1px solid gray";
}
```

## 2.3 `getElementsByTagName("tag")`

* ✅ **What**: Selects all elements of a specific tag.
* 🔁 **Returns**: HTMLCollection

### Scenario:

Highlighting all paragraphs on a page:

```js
let paragraphs = document.getElementsByTagName("p");
for (let p of paragraphs) {
  p.style.background = "lightyellow";
}
```

## 2.4 `querySelector("selector")`

* ✅ **What**: Selects the **first** element matching a CSS selector.
* 🔁 **Returns**: `HTMLElement` or `null`

### Real-life Use:

Targeting a button inside a form:

```js
let submitBtn = document.querySelector("form button");
```

## 2.5 `querySelectorAll("selector")`

* ✅ **What**: Selects **all** elements matching a CSS selector.
* 🔁 **Returns**: A static `NodeList`.

### Scenario:

Targeting all odd items:

```js
let oddItems = document.querySelectorAll("li:nth-child(odd)");
```

## 2.6 Comparison Table of DOM Selector Methods

| Method                     | Returns        | Live/Static | Accepts CSS Selectors | Example                         | Common Use Case                    |
| -------------------------- | -------------- | ----------- | --------------------- | ------------------------------- | ---------------------------------- |
| `getElementById()`         | Single element | N/A         | ❌ No                  | `getElementById("title")`       | Unique ID selection                |
| `getElementsByClassName()` | HTMLCollection | ✅ Live      | ❌ No                  | `getElementsByClassName("box")` | Multiple elements by class         |
| `getElementsByTagName()`   | HTMLCollection | ✅ Live      | ❌ No                  | `getElementsByTagName("p")`     | All `<p>` or any tag elements      |
| `querySelector()`          | Single element | N/A         | ✅ Yes                 | `querySelector(".box")`         | First match using any CSS selector |
| `querySelectorAll()`       | NodeList       | ❌ Static    | ✅ Yes                 | `querySelectorAll(".box")`      | All matches using any CSS selector |

---

# Chapter 2.7: HTMLCollection vs NodeList

When selecting multiple elements in the DOM, you often get either an **HTMLCollection** or a **NodeList**. Understanding their differences is essential for working effectively with the DOM.

## HTMLCollection

* Returned by: `getElementsByClassName()`, `getElementsByTagName()`
* Type: Live collection (auto-updates if DOM changes)
* Indexed: Yes (like an array)
* Iterable: No (can’t use `forEach()` directly)

### Example:

```js
let items = document.getElementsByClassName("item");
document.body.removeChild(items[0]); // items auto-update
```

## NodeList

* Returned by: `querySelectorAll()`
* Type: Static collection (doesn’t auto-update)
* Indexed: Yes
* Iterable: Yes (can use `forEach()`)

### Example:

```js
let items = document.querySelectorAll(".item");
items.forEach(item => item.style.color = "red");
```

## Key Differences Table:

| Feature      | HTMLCollection  | NodeList            |
| ------------ | --------------- | ------------------- |
| Live/Static  | Live            | Static              |
| Iterable     | ❌ (needs loop)  | ✅ (`forEach` works) |
| Returned By  | getElementsBy\* | querySelectorAll    |
| Auto-updates | ✅ Yes           | ❌ No                |

### Real-life Analogy:

Imagine HTMLCollection as a live camera feed — it updates as things happen. NodeList is like a snapshot — once taken, it doesn’t change unless you take another picture.

---

# Chapter 3: DOM Properties

## 3.1 `innerHTML`

* ✅ **What**: Gets/sets HTML content of an element.
* 🔁 **Returns**: HTML string.

### Example:

```js
div.innerHTML = "<b>Bold text</b>";
```

**Scenario**: Show results dynamically after search.

## 3.2 `innerText` vs `textContent`

* **innerText**: Only visible text, respects styles like `display: none`
* **textContent**: All text, including hidden content.

### Example:

```js
div.innerText = "Hello";
div.textContent = "Hidden but still counted";
```

## 3.3 `value`

* ✅ **What**: Gets/sets the value of an input.
* 🔁 **Returns**: String value.

### Example:

```js
let email = document.getElementById("email").value;
```

**Scenario**: Login or contact form data retrieval.

## 3.4 `style`

* ✅ **What**: Accesses inline styles.
* 🔁 **Returns**: CSS style declaration object.

### Example:

```js
box.style.backgroundColor = "red";
```

## 3.5 `classList`

* ✅ **What**: Read/modify element classes.

### Example:

```js
div.classList.add("visible");
div.classList.remove("hidden");
div.classList.toggle("dark-mode");
```

**Scenario**: Toggle between light/dark mode.

---

# Chapter 4: Event Handling

## 4.1 What are Events?

User interactions like click, hover, submit, etc.

## 4.2 Common Events

* `onclick`, `onmouseover`, `onchange`, `onsubmit`

## 4.3 `addEventListener()`

Allows multiple listeners and clean separation.

### Example:

```js
btn.addEventListener("click", () => alert("Clicked!"));
```

## 4.4 Event Object

Access event details like:

* `event.target`
* `event.type`

### Example:

```js
div.addEventListener("click", (e) => {
  console.log(e.target.textContent);
});
```

---

# Chapter 5: DOM Manipulation

## 5.1 `createElement()`

* ✅ Creates new DOM element.

```js
let div = document.createElement("div");
div.innerText = "Hello";
```

## 5.2 `appendChild()` / `append()`

* ✅ Adds elements to DOM tree.

```js
parent.appendChild(div);
```

## 5.3 `remove()` / `removeChild()`

* ✅ Removes element.

```js
div.remove();
```

## 5.4 Real-life Scenario:

* Adding products to cart (createElement, appendChild)
* Deleting task from to-do list (removeChild)
* Updating profile info dynamically (innerHTML, value)

---

# Chapter 6: Working with Forms

## 6.1 Accessing Input Values

```js
let name = document.getElementById("name").value;
```

## 6.2 Form Validation

```js
form.addEventListener("submit", function(e) {
  e.preventDefault();
  if (name === "") {
    alert("Name is required");
  }
});
```

## 6.3 Real-life Use Case:

Validate login or contact form before sending data to backend.

---

# Chapter 7: Mini Projects and Labs

## 7.1 To-do List

* Add task: `createElement`
* Delete task: `removeChild`

## 7.2 Form Validation

* Validate email/password inputs

## 7.3 Theme Switcher

* Toggle dark mode using `classList`

## 7.4 Table Generator

* Input rows & columns, create table dynamically

## 7.5 Stopwatch

* Start, pause, reset timer using `setInterval`

## 7.6 Analog Clock

* Create real-time rotating hands using `transform: rotate()`

## 7.7 Tip Calculator

* Calculate tip amount and total bill using form input

## 7.8 Counter App

* Increment/decrement with buttons and event listeners

## 7.9 Image Gallery Viewer

* Click thumbnail to change large image preview

## 7.10 Temperature Converter

* Convert Celsius to Fahrenheit and vice versa

## 7.11 Quiz App

* Display questions, collect answers, show score

## 7.12 Password Strength Checker

* Show password strength dynamically while typing

## 7.13 Accordion

* Expand/collapse content using DOM toggle

## 7.14 Modal Popup

* Open and close modal using classList

## 7.15 Character Counter

* Live character count while typing in textarea

---

# Chapter 8: Practice Questions

1. What is the difference between HTML and DOM?
2. What is the return type of `getElementsByClassName()`?
3. Explain `innerText` vs `textContent` with use case.
4. What does `addEventListener()` do and when is it better than `onclick`?
5. How do you create and add a new element in the DOM?
6. Why is `querySelector()` preferred in modern JS over `getElementById()`?
7. Explain the use of `classList.toggle()` with example.
8. What happens when you access `.value` of a `<div>` element?
9. What happens when a node is not found by `getElementById()`?
10. Compare `NodeList` and `HTMLCollection`.

---

# Appendix

## Tools

* Chrome DevTools (Inspect Element)
* VS Code + Live Server

## Practice Sites

* [JSFiddle](https://jsfiddle.net/)
* [CodePen](https://codepen.io/)
* [W3Schools DOM Tutorial](https://www.w3schools.com/js/js_htmldom.asp)

---
