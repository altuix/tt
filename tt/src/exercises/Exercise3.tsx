import { useState } from "react";
import { heavyCalculation } from "../utils";

/**
 * Assignment:
 *
 * The UI is super laggy (try toggling the "Fancy toggle" - button).
 *
 * Try to make the UI responsive again. You cannot change the
 * `heavyCalculation` function itself.
 */

export const Exercise3: React.FC = () => {
  const [isGreen, setIsGreen] = useState(true);

  const calculationResult = heavyCalculation();

  console.log("Exercise 3 renders");

  return (
    <>
      <button
        onClick={() => setIsGreen(!isGreen)}
        style={{ background: isGreen ? "#01FF70" : "#B10DC9" }}
      >
        Fancy toggle
      </button>

      <h2>Calculation result: {calculationResult}</h2>
    </>
  );
};
