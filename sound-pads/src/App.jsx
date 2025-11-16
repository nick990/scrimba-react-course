import padsData from "./assets/pads";
import { useState } from "react";
export default function App({ darkMode }) {
  const [pads, setPads] = useState(padsData);

  const padsButtons = pads.map((pad) => {
    return (
      <button
        key={pad.id}
        style={{ backgroundColor: darkMode ? "#222222" : "#cccccc" }}
      ></button>
    );
  });
  return (
    <main>
      <div className="pad-container">{padsButtons}</div>
    </main>
  );
}
