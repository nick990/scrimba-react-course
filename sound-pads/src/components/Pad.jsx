import { useState } from "react";
export default function Pad(props) {
  const [isOn, setIsOn] = useState(props.on);

  function togglePad() {
    setIsOn((prev) => !prev);
  }

  return (
    <button
      style={{ backgroundColor: props.color }}
      className={isOn ? "on" : undefined}
      onClick={togglePad}
    ></button>
  );
}
