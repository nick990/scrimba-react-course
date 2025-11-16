import padsData from "./assets/pads";
import { useState } from "react";
import Pad from "./components/Pad";

export default function App() {
  const [pads, setPads] = useState(padsData);

  const padsButtons = pads.map((pad) => {
    return <Pad key={pad.id} color={pad.color} />;
  });
  return (
    <main>
      <div className="pad-container">{padsButtons}</div>
    </main>
  );
}
