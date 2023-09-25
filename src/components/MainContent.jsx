import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillPlayCircleFill } from "react-icons/bs";

function MainContent() {
  const [ord, SetOrd] = useState("");
  const [dictionaryData, setDictionaryData] = useState([]);
  const [message, setMessage] = useState("");

  const getDefinition = async (ord) => {
    if (!ord) {
      setMessage(
        "Sorry pal, we couldn't see any word been typed inside input section to search."
      );
      SetOrd("");
    } else {
      const resp = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${ord}`
      );
      const data = await resp.json();
      if (data.message) {
        setMessage(data.message);
        SetOrd("");
      } else {
        setDictionaryData(data);
        setMessage("");
        SetOrd("");
      }
    }
  };
  console.log(dictionaryData);

  const playAudio = (audioUrl) => {
    const audio = new Audio(audioUrl);
    audio.play();
  };

  return (
    <div className="flex flex-col gap-16 flex-wrap w-[30%] ">
      <section className="flex gap-4 ">
        <input
          type="text"
          className="border border-gray-300 text-lg rounded-lg bg-gray-700 block w-[500px] p-2.5 text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 font-serif tracking-wide"
          placeholder="Write here ..."
          onChange={(e) => SetOrd(e.target.value)}
          value={ord}
        />
        <button onClick={() => getDefinition(ord)} className="w-[100px]">
          <AiOutlineSearch size={25} color="#EE82EE" />
        </button>
      </section>

      {message && <p className="text-gray-200">{message}</p>}
      {dictionaryData.map((data, index) => (
        <div key={index}>
          <h1 className="text-5xl font-extrabold mb-4 text-[#720e9e]">
            {data.word}
          </h1>
          {data.phonetic && (
            <p>
              <span className="text-gray-300">{data.phonetic}</span>
            </p>
          )}
          <div>
            {data.meanings && (
              <div>
                <h2 className="font-bold text-xl text-purple-400">Meanings:</h2>
                {data.meanings.map((meaning, nr) => (
                  <div key={nr}>
                    <h3 className="text-gray-300">{meaning?.partOfSpeech}</h3>
                    <details>
                      <summary className="text-purple-400 font-extrabold text-m">
                        Examples:
                      </summary>
                      {meaning?.definitions.map((definition, nr) => (
                        <li key={nr} className="list-none">
                          <span className="text-gray-400">
                            {definition?.definition}
                          </span>
                          {definition?.example && (
                            <p className="text-gray-200">{definition.example}</p>
                          )}
                        </li>
                      ))}
                    </details>
                  </div>
                ))}
              </div>
            )}
            <div>
              {data.meanings && data.meanings[0]?.synonyms && (
                <details className="break-words">
                  <summary className="font-extrabold text-purple-400 break-words">
                    Synonyms:
                  </summary>
                  <p className="text-gray-200">
                    {data.meanings[0]?.synonyms.join(" ")}
                  </p>
                </details>
              )}
              {data.meanings && data.meanings[0]?.antonyms && (
                <details>
                  <summary className="font-extrabold text-purple-400">
                    Antonyms:
                  </summary>
                  <p className="text-gray-200">
                    {data.meanings[0]?.antonyms.join(" ")}
                  </p>
                </details>
              )}
            </div>
            {data.phonetics?.length > 0 &&  (
              <div>
                {data.phonetics && (
                  <div>
                    <p className="font-extrabold text-purple-400">Audio:</p>
                    <button
                      onClick={() =>
                        playAudio(
                          data.phonetics[0].audio || data.phonetics[1].audio
                        )
                      }
                    >
                      <BsFillPlayCircleFill color="#DDA0DD" />
                    </button>
                  </div>
                )}

                <p className="font-extrabold text-purple-400">License:</p>
                <p className="text-gray-100">{data.license?.name}</p>
              </div>
            )}
            {data.sourceUrls && (
              <div>
                <h2 className="font-extrabold text-purple-400">Source URLs:</h2>
                <ul>
                  {data.sourceUrls.map((url, nr) => (
                    <li key={nr}>
                      <a className="text-blue-600" href={url}>
                        {url}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MainContent;
