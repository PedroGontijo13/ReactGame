import "./App.css";
import Die from "./components/Die/Die";
import { useState } from "react";
import { nanoid } from "nanoid";
function App() {
  const [dice, setDice] = useState(allNewDice());

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const newDice = [];

    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  function rollDice() {
    // Challenge 3:
    // You will setDice, but before you need to check isHeld propery, if its true, you will not give a new random number for die, but if isHeld is false you will generate a new random number for this die.
    const newDice = [...dice];

    newDice.map((dices, index) => {
      if (!dices.isHeld) {
        dices.value = generateNewDie().value;
      }
    });

    setDice(newDice);
  }

  function holdDice(id) {
    // Challenge 2: Once i click the dice, I need to
    // change isHeld property as toggle
    const newDice = [...dice];

    for (let i = 0; i < newDice.length; i++) {
      if (newDice[i].id === id) {
        newDice[i].isHeld = !newDice[i].isHeld;
        break;
      }
    }

    setDice(newDice);
  }

  const dieElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));
  // dice array so you can map(iterate) and pass the props to component, and you can use this variable to display the component,
  // Challenge 1: create react element using map function
  // and pass all props also holdDice function to Die component,

  return (
    <main className="main">
      <h1 className="main--title">Tenzies</h1>
      <p className="main--content">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="main--list">{dieElements}</div>
      <button className="main--action" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}

export default App;
