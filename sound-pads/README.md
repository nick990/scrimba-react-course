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
