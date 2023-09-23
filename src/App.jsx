import { useState } from "react";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="flex flex-col gap-16 items-center justify-around flex-wrap break-words ">
      <h1 className=" self-end text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-[#EE82EE] m-2">
        Free Dictionary
      </h1>
      <MainContent />
    </div>
  );
}

export default App;
