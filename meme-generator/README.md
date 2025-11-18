# Meme Generator

## Challenge 1

Move the hardcoded meme info into React state.
Use an object with `topText`, `bottomText`, and `imageUrl` properties, and set the initial values to the ones hardcoded below.

## Challenge 2

Update the topText value in the meme state object every time the topText input box is changed

Note: don't worry about bottomText at this point.

## Challenge 3

Get an array of memes from the imgflip API as soon as this component renders for the first time. Check the [imgflip documentation](https://imgflip.com/api) for the correct URL. Save the array of memes (not the whole response data) to state. (For this app, we'll randomly choose one of the memes from this array when the user clicks the "Get a new meme image" button, but we'll do that in a separate challenge.)

Hint: for now, don't try to use an async/await function. Instead, use `.then()` to resolve the promises from using `fetch`. We'll learn why after this challenge.
