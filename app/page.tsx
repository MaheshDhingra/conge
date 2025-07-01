export default function Home() {
  return (
    <>
      <h1>My Games</h1>
      <ul>
        <li>
          <Link href="/game1">
            Game 1
          </Link>
        </li>
        <li>
          <Link href="/game2">
            Game 2
          </Link>
        </li>
        <li>
          <Link href="/game3">
            Game 3
          </Link>
        </li>
      </ul>
    </>
  );
}
