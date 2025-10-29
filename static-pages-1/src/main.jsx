import { createRoot } from "react-dom/client";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import MainContent from "./MainContent.jsx";
import "./index.css";

function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

createRoot(document.getElementById("root")).render(<Page />);
