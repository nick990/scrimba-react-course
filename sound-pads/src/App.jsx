import padsData from "./assets/pads";
import { useState } from "react";
import Pad from "./components/Pad";

export default function App() {
  const [pads, setPads] = useState(padsData);

  function toggle(id) {
    setPads((prevPads) =>
      prevPads.map((p) => (p.id != id ? p : { ...p, on: !p.on }))
    );
  }

  const padsButtons = pads.map((pad) => {
    return (
      <Pad
        key={pad.id}
        id={pad.id}
        color={pad.color}
        on={pad.on}
        handleToggle={toggle}
      />
    );
  });

  return (
    <main>
      <div className="pad-container">{padsButtons}</div>
    </main>
  );
}
