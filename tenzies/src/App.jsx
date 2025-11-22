import { useState } from "react";
import Die from "./components/Die";

export default function App() {
  const [dice, setDice] = useState(generateAllNewDice());

  function generateAllNewDice() {
    return Array.from({ length: 10 }, () => Math.ceil(Math.random() * 6));
  }

  const diceElements = dice.map((d, index) => <Die key={index} value={d} />);

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
