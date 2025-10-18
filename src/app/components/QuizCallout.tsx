"use client";
import Link from "next/link";


export default function QuizCallout() {
  return (
    <section className="callout mt-10">
            <div className="w-[80%] grid grid-cols-2 gap-10 m-auto py-5">
      <div className=" flex flex-col">
        <h1 className="subheading">
          Too many choices?
        </h1>
        <p>Share your preferences and we will help you decide</p>
      </div>
      <div className="header-links flex justify-end gap-5"><Link href="/quiz">
            <button className=" white-button">
              Take our skill interest quiz
            </button>
          </Link>
        </div>
    </div>
          </section>
  );
}
