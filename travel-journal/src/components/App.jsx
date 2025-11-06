import Header from "./Header";
import Entry from "./Entry";

import data from "../assets/data";

export default function App() {
  const entryElements = data.map((entry) => {
    return (
      <Entry
        title={entry.title}
        country={entry.country}
        img={entry.img}
        dates={entry.dates}
        googleMapsLink={entry.googleMapsLink}
        text={entry.text}
      />
    );
  });

  return (
    <>
      <Header />
      {entryElements}
    </>
  );
}
