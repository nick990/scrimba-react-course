import { nanoid } from "nanoid";
import { useState } from "react";
import Die from "./components/Die";

export default function App() {
  const [dice, setDice] = useState(generateAllNewDice());

  function generateAllNewDice() {
    return Array.from({ length: 10 }, () => ({
      value: Math.ceil(Math.random() * 6),
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
