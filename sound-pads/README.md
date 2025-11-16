# Sound Pads

## Challenge 1

1. Initialize state with the default value of the array pulled in from pads.js
2. Map over that state array and display each one as a `<button>` (CSS is already written for you)\
   (Don't worry about using the "on" or "color" properties yet)

## Challenge 2

Use a ternary to determine the backgroundColor of the buttons:

- If darkMode is true, set them to "#222222"
- If darkMode is false, set them to "#cccccc"

## Challenge 3

Create a separate component called "Pad" and replace the `button` above with our <Pad /> component.\
Pass the Pad component a prop called `color` with the value of the same name from the `padsData` objects.\
In the Pad component, apply an inline style to the `<button>` to set the backgroundColor of the button.

(We'll deal with the "on" property soon)

## Challenge 4

Our buttons got turned off by default! Update the code so if the button is "on", it has the className of "on".

## Challenge 5

Create state controlling whether this pad is "on" or "off". Use the incoming `props.on` to determine the initial state.

Create an event listener so when the pad is clicked, it toggles from "on" to "off".

Goal: clicking each pad should toggle it on and off.

## Challenge 6

Create a toggle() function that logs "clicked!" to the console

Pass that function down to each of the Pad components and set it up so when they get clicked, the function runs

## Challenge 7

Call setPads to update the state of the one pad that was clicked. Map over the previous pads array, and if the current item you're iterating over has the same id as the `id` passed to this function, then return a new object with the `on` value set to the opposite of what it was before. Otherwise (if the ids don't match), just return the previous item as it was, unchanged.
