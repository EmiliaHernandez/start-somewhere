"use client"
import Link from "next/link";
import Accordion from "./components/accordion"
import Image from "next/image";
import Footer from "./components/footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
    <main className="min-h-screen bg-[#0b0b1a] text-white">
      
      {/* Header */}
      <Header></Header>

      {/* Hero Section */}
      <section className="text-center hero-gradient py-24">
        <h2 className="main-heading">
          Everyone starts somewhere
        </h2>
        <p className="mx-auto mb-8 text-gray-300">
          Jump into a new skill with simple, 1-hour projects recommended by pros.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/quiz">
            <button className=" white-button">
              Take our skill interest quiz
            </button>
          </Link>
          <Link href="/skill-library">
            <button className="white-button">
              Start out with skill library
            </button>
          </Link>
        </div>
      </section>
      {/*Ribbon with skills */}
      <section>
        <div className="ribbon">
          <p>3D Art * Web Design * Video Editing * Python Programming * Data Vizualization *  Illustration * Automation * 3D Art * Web Design * Video Editing * Python Programming * Data Vizualization *  Illustration * Automation</p>
        </div>
      </section>
      {/*How it works section */}
      <section className="mlue-gradient-bg m-auto">
        <div className="w-[80%] grid grid-cols-2 gap-10 m-auto py-16">
  <div>
    <h1 className="main-heading mlue-text">
      How it works
    </h1>
    <Accordion />
  </div>
  <div>
    <Image
    src="/ImagePlaceholder.png"
    className="m-auto ImageEffect"
      width={300}
      height={500}
      alt="Placeholder art"/></div>
</div>
      </section>
      {/*Quiz */}
      <section className=" m-auto py-24 dark-mlue-bg">
  <div className="flex column flex-col gap-2 self-stretch w-[80%] m-auto text-center">
    <h1 className="main-heading mlue-text">
      You select preferences, we recommend a starting point
    </h1>
    <p>Remember that experience level should not be a concern!</p>

    <div className="accordionWrapper accordionItem"><p> Quiz goes here</p></div>
    
  </div>
      </section>
      {/* Contact form */}
      <section className="mlue-gradient-bg m-auto">
        <div className="w-[80%] grid grid-cols-2 gap-10 m-auto py-16">
  <div>
    <h1 className="main-heading mlue-text">
      Want to request a new skill or beginner project?
    </h1>
    <h2>Contact us with the details   </h2>
  </div>
  <div>
    <p>form would go here</p></div>
</div>
      </section>
      
    </main>
    <footer>
      <Footer></Footer>
    </footer>
    </>
  )
}
