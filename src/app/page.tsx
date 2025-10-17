"use client"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0b1a] text-white">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold">Start Somewhere</h1>
        <nav className="flex gap-6">
          <Link href="/about" className="hover:text-zip-blue">About</Link>
          <Link href="/skill-library" className="hover:text-zip-blue">Skill Library</Link>
          <Link href="/quiz">
            <button className="bg-white text-black font-semibold px-4 py-2 rounded-lg">
              Take the Quiz
            </button>
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-24 px-6">
        <h2 className="text-4xl font-extrabold mb-4">
          Everyone starts somewhere
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-gray-300">
          Jump into a new skill with simple, 1-hour projects recommended by pros.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/quiz">
            <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold">
              Take our skill interest quiz
            </button>
          </Link>
          <Link href="/skill-library">
            <button className="border border-white px-6 py-3 rounded-lg font-semibold">
              Start out with skill library
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}
