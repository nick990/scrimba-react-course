# Challenge 1

Challenge: Project setup

- Create an App component in a separate App.jsx file which is a sibling
  to this index.jsx file.
- Create a `components` folder
- Create the following components in separate files inside
  the components folder. In each one, just render an `h1`
  with the name of the component (e.g. return `<h1>`Navbar goes here`</h1>`):
  - Navbar
  - Main
- Have App component import and render the Navbar and Main components
- Import and render the App component inside of index.jsx using ReactDOM
  - At this point you should have your "Navbar goes here" etc. showing up
    in the mini-browser.
- Go to Google fonts and get the "Inter" font with weights 400, 600, and 700.
  Put the `<links />` to those fonts ABOVE the style.css link in index.html.
  You may need to do some extra research to figure out how this
  works if you haven't done it before.

# Challenge 2

Challenge: complete the Navbar to match the Figma design

Hints:

- for semantic HTML purposes, the Navbar should render
  a `<header>` with a `<nav>` nested inside. The image and "ReactFacts"
  text elements can both be rendered as children inside the `<nav>`
- reference the [Figma design](https://www.figma.com/design/xA1rJVQOorqMW6xjGdBLcI/ReactFacts?node-id=0-4&t=QVLMDtgfpGzdxNYn-0) for the most accurate info about
  colors, sizes, font information, etc.

# Challenge 3

Challenge: Build out the main content section!

For now, skip 2 aspects of the design and we'll work on them later:

1. The colored bullets in the list
2. The larger gray React logo on the side

# Challenge 4

Challenge: Place the gray react logo in the background

Don't use an `img` element, but rather set it as the
`background-image` of the `main` element.

Hint: you'll need to use the following properties:

- background-image: url(...)
- background-repeat
- background-position

(Or the shorthand `background` property with values for all
those other properties)
