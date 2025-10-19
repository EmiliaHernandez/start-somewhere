"use client";
import Link from "next/link";


export default function Footer() {
  return (
    <section className="dark-mlue-bg m-auto">
            <div className="w-[80%] grid grid-cols-2 gap-10 m-auto py-6">
      <div>
        <h1 className="subheading mlue-text">
          Start Somewhere
        </h1>
        <h2>social buttons here </h2>
        <div className="legal-links flex flex-row gap-2">
        <Link className="link-hover" href="/about"> Copyright stuff </Link> | 
        <Link className="link-hover" href="/quiz"> Privacy Policy </Link> | 
        <Link className="link-hover" href="/skill-library"> Terms of Conditions </Link>
        </div>
      </div>
      <div className="header-links flex flex-col">
        <Link className="link-hover" href="/about"> About </Link>
        <Link className="link-hover" href="/quiz"> Quiz </Link>
        <Link className="link-hover" href="/skill-library"> Skill Library </Link>
        </div>
    </div>
          </section>
  );
}
