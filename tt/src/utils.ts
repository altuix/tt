import { useEffect } from "react";

export function heavyCalculation(x: number = 38): number {
  if (x <= 0) return 0;
  if (x === 1) return 1;
  return heavyCalculation(x - 1) + heavyCalculation(x - 2);
}

export function useLogger() {
  useEffect(() => {
    console.log("Component re-rendered");
  });
}
