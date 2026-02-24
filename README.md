1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer: getElementById is used to select an element by id attribute.getElementsByClassName is used to select an elements by class attribute.querySelector selects elements using a CSS selector.It returns only the first matching element.querySelectorAll It also uses CSS selectors.It returns all matching elements.

2.How do you create and insert a new element into the DOM?
Answer: first create the element like this = createElement('').append it to an existing element in the document = parent.appendChild(child). 

3.What is Event Bubbling? And how does it work?
Answer: Event Bubbling is a behavior in the DOM where an event starts from the target element and then bubbles up to its parent elements, one by one, until it reaches the document.

4. What is Event Delegation in JavaScript? Why is it useful?
Answer: Event Delegation is a technique where you add an event listener to a parent element instead of adding listeners to multiple child elements.It works because of event bubbling (events move from child → parent).

5.What is the difference between preventDefault() and stopPropagation() methods?
Answer:event.preventDefault() stops the browser default action for a given event, while event.stopPropagation() stops the event from propagating (bubbling or capturing) through the Document Object Model (DOM).




