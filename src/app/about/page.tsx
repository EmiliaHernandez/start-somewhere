"use client"
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/Header";

export default function About() {
  return (
    <>
    <main className="min-h-screen bg-[#0b0b1a] text-white">
      
      {/* Header */}
      <Header></Header>

      {/* Hero Section */}
      <section className=" hero-gradient py-24">
        <div className="w-[80%] m-auto">
        <h2 className="main-heading">
          Why Start Somewhere was created
        </h2>
        <p className="mx-auto text-gray-300">
          Before applying to college, I was aimless and lost about what I would study. I was willing to try anything new that would help me decide what I wanted to do with my future. Despite my fears that I wouldn’t be good at it, I went to a free local robotics camp and learned visual scripting with Scratch. Within the next year, I received:</p>
          <ul>
<li> A national award for video game design</li>
<li> A computer science scholarship from Google</li>
<li> A scholarship from Taco Bell for a passion in computer science</li>
<li> A scholarship from ITWomen </li>
</ul>
<p>
I’m happy I took that leap to try something new and completely unknown to me, and it ended up being one of my greatest passions. Startsomewhere was created to help others who need some guidance in finding “their thing”.
        </p>
        </div>
      </section>
    </main>
    <footer>
      <Footer></Footer>
    </footer>
    </>
  )
}
