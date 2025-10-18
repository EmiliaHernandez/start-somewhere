"use client";

import { useState } from "react";

const accordionData = [
  {
    title: "Share your preferences",
    content:
      "With our quiz, easily mark your interests and we will recommend a starting point for you. Alternatively, browse freely in our skill library and take your pick.",
  },
  {
    title: "Work on a suggested small project",
    content:
      "Once you’ve decided what to try out, follow our guides that outline a short beginner project! Make it your own! Styling, personality, and content experimentation is encouraged.",
  },
  {
    title: "Expand on your project or try something new",
    content:
      "Our goal is to help people discover new passions. Take the project further by expanding on it past our tutorial. We highly suggest trying out more skills if the first one doesn’t stick, it’s free!",
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordionWrapper">
      {accordionData.map((item, index) => (
        <div
          key={index}
          className={`accordionItem ${
            openIndex === index ? "open" : "close"
          }`}
        >
          <h2
            className="accordionItemHeading"
            onClick={() => toggle(index)}
          >
            {item.title}
          </h2>
          <div
            className={`accordionItemContent ${
              openIndex === index ? "show" : "hide"
            }`}
          >
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
