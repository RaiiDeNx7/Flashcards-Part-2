import { useState } from "react";
import Flashcard from "./Flashcard";
import "./App.css";

function App() {
  // Card set metadata
  const cardSetTitle = "Computer Science Flashcards";
  const cardSetDescription =
    "Learn fun facts and key figures in Computer Science!";

  // List of cards
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

  // State
  const [index, setIndex] = useState(0);
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState(null); // "correct" | "incorrect" | null

  const currentCard = cards[index];

  // Handle guess submission
  const handleSubmit = () => {
    if (guess.trim().toLowerCase() === currentCard.answer.toLowerCase()) {
      setFeedback("correct");
    } else {
      setFeedback("incorrect");
    }
  };

  // Navigation
  const nextCard = () => {
    if (index < cards.length - 1) {
      setIndex(index + 1);
      setGuess("");
      setFeedback(null);
    }
  };

  const prevCard = () => {
    if (index > 0) {
      setIndex(index - 1);
      setGuess("");
      setFeedback(null);
    }
  };

  return (
    <div className="App">
      {/* Card set info */}
      <h2>{cardSetTitle}</h2>
      <h4>{cardSetDescription}</h4>
      <h5>
        Card {index + 1} of {cards.length}
      </h5>

      {/* Flashcard */}
      <Flashcard
        front={currentCard.question}
        back={currentCard.answer}
        difficulty={currentCard.difficulty}
        image={currentCard.image}
      />

      {/* Guess input */}
      <div>
        <input
          type="text"
          placeholder="Enter your guess..."
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          style={{
            border: feedback === "correct" 
              ? "3px solid limegreen" 
              : feedback === "incorrect" 
              ? "3px solid red" 
              : "1px solid #ccc",
            padding: "0.5em",
            borderRadius: "6px",
            width: "300px",        /* makes it wider */
            height: "50px",        /* makes it taller */
            fontSize: "20px",     /* makes the text inside larger */
            marginRight: "1em",
            marginTop: "2em"
          }}
        />
        <button onClick={handleSubmit}>Submit Guess</button>
      </div>

      {/* Navigation */}
      <div style={{ marginTop: "1em" }}>
        <button onClick={prevCard} disabled={index === 0}>
          ⭠ Prev
        </button>
        <button onClick={nextCard} disabled={index === cards.length - 1}>
          Next ⭢
        </button>
      </div>
    </div>
  );
}

export default App;
