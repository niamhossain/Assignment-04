## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

1. Answer: getElementById searches particular id, getElementsByClassName searches elements with same class, querySelector and querySelectorAll can search with id and class both also can search using other elements.

### 2. How do you create and insert a new element into the DOM?

2. Answer: i can create by using document.createElement("what i want to create like") and then append() wherever i want.

### 3. What is Event Bubbling? And how does it work?

3. Answer: event bubbling is a way of traversing elements from children to parents. 

### 4. What is Event Delegation in JavaScript? Why is it useful?

4. Answer: Event delegation uses bubbling method to find the parent and makes coding easy because I can use the parent to manipulate many things inside the childrens.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

5. Answer: preventDefault() stops what default/normally occurs on the other hand stopPropagation() stops bubbling to parents hence I can stop bubbling wherever its necessary to manipulate data.