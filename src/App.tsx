import React from "react";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Theme, ThemeToggle } from "./hooks/themeSwitch";

function App() {
  Theme();
  return (
    <div className="relative dark:bg-slate-700">
      <button
        onClick={ThemeToggle}
        className="fixed bottom-2 right-2 w-10 h-10 rounded-full text-slate-100 bg-red-500"
      >
        <img
          src={process.env.PUBLIC_URL + "/images/artist.png"}
          className="h5 w-5 mx-auto "
          alt=""
        />
      </button>
      <Header />
      <About />
      <Footer />
    </div>
  );
}

export default App;
