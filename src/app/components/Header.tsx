"use client";
import Link from "next/link";


export default function Header() {
  return (
    <section className="dark-mlue-bg m-auto sticky top-0 z-40">
            <div className="w-[95%] grid grid-cols-2 gap-10 m-auto py-5">
      <div className="justify-start flex">
        <h1 className="header-links mlue-text">
          Start Somewhere
        </h1>
      </div>
      <div className="header-links flex justify-end gap-5">
        <Link className="link-hover" href="/about"> About </Link>
        <Link className="link-hover" href="/quiz"> Quiz </Link>
        <Link className="link-hover" href="/skill-library"> Skill Library </Link>
        </div>
    </div>
          </section>
  );
}
