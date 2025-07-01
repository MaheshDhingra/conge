"use client";
import { useState } from "react";

function calculateWinner(squares: string[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }
  }
  return null;
}

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(squares);

  function handleClick(i: number) {
    if (squares[i] || winner) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  function handleReset() {
    setSquares(Array(9).fill(""));
    setXIsNext(true);
  }

  const status = winner
    ? `Winner: ${winner}`
    : squares.every(Boolean)
    ? "Draw!"
    : `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h2 style={{ marginBottom: 8 }}>Tic Tac Toe</h2>
      <div style={{ marginBottom: 12, fontWeight: 600 }}>{status}</div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 48px)",
          gap: 6,
          marginBottom: 12,
        }}
      >
        {squares.map((val, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            style={{
              width: 48,
              height: 48,
              fontSize: 24,
              fontWeight: 700,
              background: "#fff",
              color: "#222",
              border: "2px solid #4f8cff",
              borderRadius: 6,
              cursor: val || winner ? "not-allowed" : "pointer",
              transition: "background 0.2s",
            }}
          >
            {val}
          </button>
        ))}
      </div>
      <button
        onClick={handleReset}
        style={{
          background: "#4f8cff",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          padding: "8px 20px",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        Reset
      </button>
    </div>
  );
}
