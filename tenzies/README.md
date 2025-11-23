# Tenzies

[Figma design](https://www.figma.com/design/FqsxRUhAaXM4ezddQK0CdR/Tenzies?node-id=0-1&p=f&t=gtLIUnATejiXcc5t-0)

## Challenge 1

Start a brand new React app!

- Create a separate App component
- Import and render the App component here
- In the App component, render a `<main>` element
- Style everything to look like the [slide](https://www.figma.com/design/FqsxRUhAaXM4ezddQK0CdR/Tenzies?node-id=0-1&p=f&t=gtLIUnATejiXcc5t-0)

## Challenge 2

- Create a Die component that takes a `value` prop. Should render a button with that value displayed.
- Render 10 instances of the Die component (manually)
  - Provide a number between 1-6 for the value on each
    for now
- Style the <main> and <Die> components to look like they do in the slide
  - Hints: Create a container to hold the 10 instances of the Die component, and use CSS Grid to lay them out evenly in 2 rows of 5 columns
  - Use flexbox on main to center the dice container in the center of the page

## Challenge 3

Write a function (generateAllNewDice) that returns an array of 10 random numbers between 1-6 inclusive.

Log the array of numbers to the console for now.

## Challenge 4

Create state to hold our array of numbers. (Initialize
the state by calling our `generateAllNewDice` function so it
loads all new dice as soon as the app loads)

Map over the state numbers array to generate our array
of Die components and render those in place of our
manually-written 10 Die elements.

## Challenge 5

Create a `Roll Dice` button that will re-roll all 10 dice.

Clicking the button should generate a new array of numbers
and set the `dice` state to that new array (thus re-rendering
the array to the page).

## Challenge 6

Update the array of numbers in state to be an array of objects instead.\
Each object should look like:\
`{ value: <random number>, isHeld: false }`.

Making this change will break parts of our code, so make sure to update things so we're back to a working state.

## Challenge 7

Add conditional styling to the Die component so that if it's held (isHeld === true), its background color changes to a light green (`#59E391`)

Remember: currently the Die component has no way of knowing if it's "held" or not.

## Challenge 8

Create a function `hold` that takes
`id` as a parameter. For now, just have the function
console.log(id).

Then, figure out how to pass that function down to each
instance of the Die component so when each one is clicked,
it logs its own unique ID property. (Hint: there's more
than one way to make that work, so just choose whichever
you want)

## Challenge 9

Update the `hold` function to flip
the `isHeld` property on the object in the array
that was clicked, based on the `id` prop passed
into the function.

Hint: as usual, there's more than one way to
accomplish this.

## Challenge 10

Update the `rollDice` function to not just roll
all new dice, but instead to look through the existing dice
to NOT role any that are being `held`.

Hint: this will look relatively similiar to the `hold`
function below. When we're "rolling" a die, we're really
just updating the `value` property of the die object.

## Challenge 11

Log "Game won!" to the console only if the 2 winning
conditions are met.

1. all the dice are being held, and
2. all the dice have the same value

For now, no need to even save a variable!
