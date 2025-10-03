import { useState } from "react";
import Flashcard from "./Flashcard";
import "./App.css";

function App() {
  // Card set metadata
  const cardSetTitle = "Computer Science Flashcards";
  const cardSetDescription =
    "Learn fun facts and key figures in Computer Science!";

  // Original list of cards
  const originalCards = [
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
  const [cards, setCards] = useState([...originalCards]);
  const [index, setIndex] = useState(0);
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState(null); // "correct" | "incorrect" | null
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  const currentCard = cards[index];

  // Helper: normalize strings (lowercase, remove punctuation, trim)
  const normalize = (str) =>
    str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").trim();

  // Handle guess submission
  const handleSubmit = () => {
    const user = normalize(guess);
    const correct = normalize(currentCard.answer);

    if (correct.includes(user) && user.length > 0) {
      setFeedback("correct");

      setCurrentStreak((prev) => {
        const newStreak = prev + 1;
        setLongestStreak((longest) => Math.max(longest, newStreak));
        return newStreak;
      });
    } else {
      setFeedback("incorrect");
      setCurrentStreak(0);
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

  // Shuffle cards
  const shuffleCards = () => {
    const shuffled = [...cards];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setCards(shuffled);
    setIndex(0);
    setGuess("");
    setFeedback(null);
  };

  return (
    <div className="App">
      {/* Card set info */}
      <h2>{cardSetTitle}</h2>
      <h4>{cardSetDescription}</h4>
      <h5>
        Card {index + 1} of {cards.length}
      </h5>

      {/* Streak counters */}
      <div style={{ marginTop: "0.5em", color: "white" }}>
        <p>Current Streak: {currentStreak}</p>
        <p>Longest Streak: {longestStreak}</p>
      </div>

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
            width: "300px",
            height: "50px",
            fontSize: "20px",
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
        <button onClick={shuffleCards} style={{ marginLeft: "1em" }}>
          Shuffle
        </button>
      </div>

      {/* Streak counters */}
      <div style={{ marginTop: "1em" }}>
        <p>Current Streak: {currentStreak}</p>
        <p>Longest Streak: {longestStreak}</p>
      </div>
    </div>
  );
}

export default App;
