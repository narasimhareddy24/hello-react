import { useState, useMemo } from "react";

const ExpensiveCalculation = ({ num }) => {
  const square = useMemo(() => {
    console.log("Calculating...");
    return num * num;
  }, [num]);

  return <h2>Square: {square}</h2>;
};

export default ExpensiveCalculation;
