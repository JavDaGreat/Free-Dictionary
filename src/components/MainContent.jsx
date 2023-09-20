import React from "react";

function MainContent({ data }) {
  return (
    <section>
      <article>
        <h1>Word</h1>
        <p>phonetic</p>
        <audio>Play</audio>
        <p> "partOfSpeech": "noun"</p>
      </article>
      <article>
        <h3>mMeaning</h3>
        <>
          <p> "definition": "an utterance of hello; a greeting.",</p>
          <p>
            "example": "she was getting polite nods and hellos from people",
          </p>
        </>
      </article>

      <article>
        <h3>Synonyms</h3>
        <>
          <p>ayri</p>
          <p>ayri</p>
          <p>ayri</p>
          <p>ayri</p>
          <p>ayri</p>
        </>
      </article>
    </section>
  );
}

export default MainContent;
