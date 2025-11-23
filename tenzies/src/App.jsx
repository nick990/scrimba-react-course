import { nanoid } from "nanoid";
import { useState } from "react";
import Confetti from "react-confetti";
import Die from "./components/Die";

export default function App() {
  const [dice, setDice] = useState(generateAllNewDice);

  const gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);

  function generateRandomValue() {
    return Math.ceil(Math.random() * 6);
  }

  function generateAllNewDice() {
    return Array.from({ length: 10 }, () => ({
      value: generateRandomValue(),
      isHeld: false,
      id: nanoid(),
    }));
  }

  function hold(id) {
    setDice((prev) =>
      prev.map((d) => (d.id != id ? d : { ...d, isHeld: !d.isHeld }))
    );
  }

  const diceElements = dice.map((d) => (
    <Die key={d.id} value={d.value} isHeld={d.isHeld} hold={() => hold(d.id)} />
  ));

  function rollDice() {
    setDice((prev) =>
      prev.map((d) => (d.isHeld ? d : { ...d, value: generateRandomValue() }))
    );
  }

  return (
    <main>
      {gameWon && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        {!gameWon ? "Roll Dice" : "New Game"}
      </button>
    </main>
  );
}
