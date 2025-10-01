import { useState } from "react";
import Flashcard from "./Flashcard";
import "./App.css";

function App() {
  // Card set metadata
  const cardSetTitle = "Computer Science Flashcards";
  const cardSetDescription = "Learn fun facts and key figures in Computer Science!";

  // List of cards (array of objects with question/answer)
  const cards = [
  { question: "Who is the father of Computer Science?", answer: "Alan Turing", difficulty: "easy", image: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg" },
  { question: "Who was the first programmer?", answer: "Ada Lovelace", difficulty: "easy", image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Ada_Lovelace_portrait.jpg" },
  { question: "What was the first computer bug?", answer: "A moth stuck in a relay", difficulty: "easy" },
  { question: "What does ENIAC weigh?", answer: "27 tons", difficulty: "medium" },
  { question: "What’s the base number system of computers?", answer: "Binary (0 and 1)", difficulty: "easy" },
  { question: "What does CPU stand for?", answer: "Central Processing Unit", difficulty: "easy" },
  { question: "What does RAM stand for?", answer: "Random Access Memory", difficulty: "easy" },
  { question: "What is the brain of the computer?", answer: "The CPU", difficulty: "medium" },
  { question: "What does HTML stand for?", answer: "HyperText Markup Language", difficulty: "medium" },
  { question: "What does CSS stand for?", answer: "Cascading Style Sheets", difficulty: "medium" },
  { question: "What year was the World Wide Web invented?", answer: "1989 by Tim Berners-Lee", difficulty: "medium" },
  { question: "What company created the first graphical web browser Mosaic?", answer: "NCSA", difficulty: "hard" },
  { question: "What programming language is known as the 'mother of all languages'?", answer: "C", difficulty: "hard" },
  { question: "What is Moore's Law?", answer: "The number of transistors doubles about every two years", difficulty: "hard" },
  { question: "What does GPU stand for?", answer: "Graphics Processing Unit", difficulty: "medium" }
];




  const [index, setIndex] = useState(0);

  // Show a random new card
  const nextCard = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * cards.length);
    } while (newIndex === index); // ensure it changes
    setIndex(newIndex);
  };

  return (
    <div className="App">
      {/* Card set info */}
      <h2>{cardSetTitle}</h2>
      <h4>{cardSetDescription}</h4>
      <h5>Total Cards: {cards.length}</h5>
      <br />

      {/* Show one card at a time */}
      <Flashcard 
        front={cards[index].question} 
        back={cards[index].answer} 
        difficulty={cards[index].difficulty} 
        image={cards[index].image} 
      />



      {/* Next button shows random new card */}
      <button onClick={nextCard} className="nextCard">
        ⭢
      </button>
    </div>
  );
}

export default App;

