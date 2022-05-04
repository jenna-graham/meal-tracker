## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"** 
## https://miro.com/app/board/uXjVO4S8Pl4=/

1) **Look at the drawing and name the HTML elements you'll need to realize your vision**
## Add Ingredients Section  
 ## Heading, Form with inputs for ingredients, qty, measurements (select) button to remove last item.
1) **Look at the drawing and imagine using the app. What _state_ do you need to track?** 
## array of ingredients with the following structure...
## ``` { ingredient: 'Black bean', quantity: 1, measurement: 'cup' (string with select input)}
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
## we need the header to let the user know what this web app is about. We need inputs so the user can input their ingredients to the page. QTY and measurements tell us more about the meal being created. We need the removal button so the user can remove their last ingredient. 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
## header <h1> </h1>  ingredients, a combination of strings, elect inputs and quantity (numbers)
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
## Add Ingredients Section 
## 1) add ingredients (submit)
## 2) remove the last item (click)
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**
## Add Ingredients Section 
## Functions renderIngredient() create an <li> for an ingredient object, displayIngredients() clear the existing list, loop through each ingredient, call renderIngredient, append<li> to the list. 
## Save Meal Secction renderMeal() return an <li> with the meal info, displayMeals() clears the list of meals, loops.  

 

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
