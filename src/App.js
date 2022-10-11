import React from "react";
import Navbar from "./Navbar";
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
    <div className="main-container">
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
