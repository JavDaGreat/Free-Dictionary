import { useState } from "react";
import MainContent from "./components/MainContent";
import SearchBar from "./components/SearchBar";

function App() {
  const [content, setContent] = useState([]);
  const getDefinition = async (ord) => {
    const resp = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${ord}`
    );
    const data = await resp.json();
    console.log(data);
    setContent(data);
  };
  return (
    <div className="flex flex-col gap-16 items-center justify-center">
      <h1 className=" self-end text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-[#EE82EE] m-2">
        Free Dictionary
      </h1>
      <SearchBar getDefinition={getDefinition} />
      <MainContent data={content} />
    </div>
  );
}

export default App;
