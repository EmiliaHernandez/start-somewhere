"use client";

import { useState, useEffect, use } from "react";
import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/footer";
import Carousel from "@/components/ui/carousel";

interface Step {
  title: string;
  text: string;
  image_url?: string;
}

interface Skill {
  id: string;
  name: string;
  description: string;
  slug: string;
  steps: Step[];
  video_url?: string;
  project_title?: string;
  technology?: string;
}


export default function SkillPage({ params }: { params: Promise<{ title: string }> }) {
  const { title } = use(params);

const slideData = [
    {
      src: "https://graphicsfamily.com/wp-content/uploads/edd/2022/01/Creative-Landing-Page-Design-Thu-1180x755.jpg",
    },
    {
      src: "https://graphicsfamily.com/wp-content/uploads/edd/2022/01/Creative-Landing-Page-Design-Thu-1180x755.jpg",
    },]

  const [Skills, setSkills] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<"instructions" | "video">("instructions");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      const { data, error } = await supabase
        .from("Skills")
        .select("*")
        .eq("slug", title)
        .single();

      if (error) console.error("Error fetching skill:", error);
      else setSkills(data);

      setLoading(false);
    };

    fetchSkills();
  }, [title]);

  if (loading)
    return <p className="text-center text-gray-400 mt-10">Loading skill...</p>;
  if (!Skills)
    return <p className="text-center text-red-500 mt-10">Skill not found.</p>;

  return (
    <>
      <Header />

      <main className=" mx-auto py-12 text-white dark-mlue-bg">
        <div className="w-[80%] mx-auto">
        <h1 className="main-heading mlue-text">{Skills.title}</h1>
        <h2 className="py-5 subheading">Today you will <span className="projectTech">{Skills.project_title}</span> using <span className="projectTech px-1 mx-1">{Skills.technology}</span></h2>
        <p className="text-lg text-white mb-10">{Skills.description}</p>
        <Carousel slides={slideData} />

        {/* Tabs */}
        <div className="border-b border-gray-700 flex gap-6 mb-6">
          <button
            onClick={() => setActiveTab("instructions")}
            className={`pb-2 transition-all duration-200 ${
              activeTab === "instructions"
                ? "border-b-2 border-zip-blue text-zip-blue"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Instructions
          </button>
          <button
            onClick={() => setActiveTab("video")}
            className={`pb-2 transition-all duration-200 ${
              activeTab === "video"
                ? "border-b-2 border-zip-blue text-zip-blue"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Video Tutorial
          </button>
        </div>

        {/* Tab content */}
        {activeTab === "instructions" && (
          <div className="space-y-10">
            {Skills.steps?.length ? (
              Skills.steps.map((step, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-[#0e1a2f] p-6 flex flex-col md:flex-row gap-6"
                >
                  {step.image_url && (
                    <div className="w-full md:w-1/3">
                      <Image
                        src={step.image_url}
                        alt={step.title}
                        width={400}
                        height={300}
                        className="rounded-lg object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">
                      Step {i + 1}: {step.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No steps available for this skill yet.</p>
            )}
          </div>
        )}

        {activeTab === "video" && (
          <div className="mt-8">
            {Skills.video_url ? (
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={Skills.video_url}
                  title={`${Skills.title} tutorial`}
                  allowFullScreen
                  className="w-full h-[500px] rounded-xl"
                ></iframe>
              </div>
            ) : (
              <p>No video tutorial available for this skill yet.</p>
            )}
          </div>
        )}
        </div>
      </main>

      <Footer />
    </>
  );
}