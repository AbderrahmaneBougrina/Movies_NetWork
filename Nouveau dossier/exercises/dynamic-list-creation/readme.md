
### Exercise 1: Dynamic List Creation

**Objective**: Use JavaScript array methods and DOM manipulation to dynamically create and modify a list of items.

**HTML**:

```html
<button id="addItem">Add Item</button>
<ul id="itemList"></ul>
```

**JavaScript**:

1. Create an array of sample items: `const items = ["Apple", "Banana", "Cherry"];`
2. Use the `forEach()` method to display each item in the list when the page loads.
3. Add an event listener to the `Add Item` button to add a new item (`"Orange"`) to the array and refresh the displayed list.