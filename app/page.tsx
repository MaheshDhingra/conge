import Link from "next/link";
import TicTacToe from "./games/TicTacToe";
  
const gameButtonStyle = {
  background: '#4f8cff',
  color: '#fff',
  border: 'none',
  borderRadius: 10,
  padding: '14px 36px',
  fontSize: 18,
  fontWeight: 700,
  cursor: 'pointer',
  boxShadow: '0 2px 8px rgba(79,140,255,0.15)',
  transition: 'background 0.2s',
};

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'var(--background)', color: 'var(--foreground)' }}>
      <div style={{ maxWidth: 420, textAlign: 'center', padding: 36, borderRadius: 18, boxShadow: '0 4px 24px rgba(0,0,0,0.10)', marginBottom: 32 }}>
        <span style={{ fontSize: 48, display: 'block', marginBottom: 18 }}>🎮</span>
        <h1 style={{ fontSize: 34, fontWeight: 800, marginBottom: 14 }}>Amin Games Hub</h1>
        <p style={{ fontSize: 20, marginBottom: 28 }}>
          Welcome! Dive into fun and challenge yourself with our collection of online games. Ready to play?
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Link href="/games" style={{ textDecoration: 'none' }}>
            <button style={gameButtonStyle}>Play Tic Tac Toe</button>
          </Link>
          <button style={{ ...gameButtonStyle, opacity: 0.5, cursor: 'not-allowed' }} disabled>Snake (Coming Soon)</button>
          <button style={{ ...gameButtonStyle, opacity: 0.5, cursor: 'not-allowed' }} disabled>2048 (Coming Soon)</button>
          <button style={{ ...gameButtonStyle, opacity: 0.5, cursor: 'not-allowed' }} disabled>Memory Game (Coming Soon)</button>
        </div>
      </div>
    </main>
  );
}
