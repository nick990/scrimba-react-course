import { nanoid } from "nanoid";
import { useState } from "react";
import Die from "./components/Die";

export default function App() {
  const [dice, setDice] = useState(generateAllNewDice());

  function generateAllNewDice() {
    return Array.from({ length: 10 }, () => ({
      value: Math.ceil(Math.random() * 6),
      held: false,
      id: nanoid(),
    }));
  }

  const diceElements = dice.map((d) => (
    <Die key={d.id} value={d.value} isHeld={d.held} />
  ));

  const rollDice = () => setDice(generateAllNewDice());

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-dice" onClick={rollDice}>
        Roll Dice
      </button>
    </main>
  );
}
