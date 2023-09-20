import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
function SearchBar({ getDefinition }) {
  const [ord, SetOrd] = useState("");

  return (
    <section className="flex gap-4 ">
      <input
        type="text"
        className=" border border-gray-300  text-lg rounded-lg bg-gray-700  block w-[100%] p-2.5  text-white  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 font-serif tracking-wide "
        placeholder="Write here ..."
        onChange={(e) => SetOrd(e.target.value)}
        value={ord}
      />
      <button onClick={() => getDefinition(ord)} className=" w-[100px] ">
        <AiOutlineSearch size={25} color="#EE82EE" />
      </button>
    </section>
  );
}

export default SearchBar;
