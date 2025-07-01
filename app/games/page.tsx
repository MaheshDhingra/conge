import TicTacToe from "../games/TicTacToe";

export default function GamePage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'var(--background)', color: 'var(--foreground)' }}>
      <TicTacToe />
    </main>
  );
}
