import Header from "./Header";
import Entry from "./Entry";

import data from "../assets/data";

export default function App() {
  const entryElements = data.map((entry) => {
    return <Entry key={entry.id} {...entry} />;
  });

  return (
    <>
      <Header />
      {entryElements}
    </>
  );
}
