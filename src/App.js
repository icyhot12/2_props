import React from "react";
import Card from "./Card";
import data from "./data";

const cards = data.map(element => {
  return (
    <Card 
    element={element}
    key={Math.random()}
    />
  )
})

function App() {
  return (
    <div>
      {cards}
    </div>
  );
}

export default App;
