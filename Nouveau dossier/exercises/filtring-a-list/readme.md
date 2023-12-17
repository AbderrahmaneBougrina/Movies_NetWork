### Exercise 2: Filtering a List

**Objective**: Allow users to filter displayed items based on a text input.

**HTML**:

```html
<input type="text" id="filterInput" placeholder="Filter items..." />
<ul id="itemList">
    <li>Apple</li>
    <li>Banana</li>
    <li>Cherry</li>
    <li>Date</li>
    <li>Elderberry</li>
</ul>
```

**JavaScript**:

1. Add an event listener to the `filterInput`.
2. When the user types, use the `filter()` method to display only items that include the entered text. For this, first, convert the `li` elements back to an array of strings, then filter and display the results.