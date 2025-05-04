import React, { useState } from "react";
import { HeavyComponent } from "../do-not-touch-components/HeavyComponent";

/**
 * Assignment:
 *
 * Make sure we keep the same functionality, without causing a re-render
 * on every keypress when typing in the input.
 *
 * Do not touch <HeavyComponent />
 */
export const Exercise2: React.FC = () => {
  const [userInput, setUserInput] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInput(event.target.value);
  }

  console.log("Exercise 2 renders");

  return (
    <>
      <h1>Send us some feedback</h1>
      <div>
        <input type="text" onChange={handleChange} value={userInput} />
        <button
          type="submit"
          onClick={() => {
            alert(userInput);
          }}
        >
          Submit
        </button>
      </div>
      <HeavyComponent />
    </>
  );
};
