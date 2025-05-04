import React, { useState } from "react";
import { RenderState } from "../do-not-touch-components/RenderState";

/**
 * Assignment:
 *
 * Update the state, after mounting the component:
 * Old-state + your name
 */
export const Exercise1: React.FC = () => {
  const [state, setState] = useState("Hi there");

  return <RenderState state={state} />;
};
