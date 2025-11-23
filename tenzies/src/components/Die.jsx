export default function Die(props) {
  return <button className={props.isHeld ? "held" : ""}>{props.value}</button>;
}
