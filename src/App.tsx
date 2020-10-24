import * as React from "react";
import StarsList from "./StarsList";
import "./styles.css";

export default function App() {
  const numOfStars = 5;
  const color = "#e5c100";

  return (
    <div className="App">
      <StarsList numOfStars={numOfStars} color={color} />
      <StarsList numOfStars={numOfStars} color={color} />
      <StarsList numOfStars={numOfStars} color={color} />
    </div>
  );
}
