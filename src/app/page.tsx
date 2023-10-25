import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-28 py-12 gap-6">
      <h1 className="text-7xl font-bold tracking-wide">PitchPainter</h1>
      <Link
        href="/play/1"
        className="bg-green-600 text-white font-bold py-2 px-4 rounded-xl"
      >
        Jugar
      </Link>

      {/* <GameplaySection /> */}
    </main>
  );
}
