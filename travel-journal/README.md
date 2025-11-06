# Travel Journal

[Figma Design](https://www.figma.com/design/QG4cOExkdbIbhSfWJhs2gs/Travel-Journal?node-id=0-1&p=f&t=iYZrHHho6dlAKdPq-0)

## Challenge 1

- Create an App component in a separate file.\
  Import it here and render it
- Create a "components" folder and a Header component.\
  Render the Header inside the App component.
- Follow the Travel Journal design to build the Header\
  for our page.

## Challenge 2

Build out the Entry component and render 1 instance of it to the App

For now, just hard-code in the data, which you can find in
japan.md so you don't have to type it all out manually :)

Notes:

- Only render 1 instance of this Entry component for now
- I've pulled in marker.png for the little map marker icon
  that goes next to the location name
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.

## Challenge 3

Challenge: pass props to the Entry component to display
its data. See the `data.md` file for each prop name and its
value.

Then on the Entry component, receive and display the values
for those props. In the end, the page should look the same
as it does now, but without all the hard-coded data in the
component

## Challenge 4

- import the array of data from data.js
- map over the array to create an <Entry /> component for every item in the data array.
- display the array of Entry components in place of the current hard-coded <Entry /> instance.
