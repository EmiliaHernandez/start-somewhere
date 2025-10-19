import { supabase } from "@/lib/supabaseClient";
import Header from "../components/Header";
import Footer from "../components/footer";
import Image from "next/image";
import QuizCallout from "../components/QuizCallout";
import Link from "next/link";

// Define the structure of a Skill row
type Skills = {
  id: string | number;
  title: string;
  category?: string;
  slug?: string;
};

export default async function SkillLibraryPage() {
  // Fetch all Skills
  const { data: Skills, error } = await supabase.from("Skills").select("*");

  if (error) {
    console.error("Error fetching Skills:", error);
    return <p className="text-red-500">Failed to load Skills.</p>;
  }

  if (!Skills?.length) {
    return <p className="text-gray-400">No Skills found.</p>;
  }

  // Group Skills by category
  const grouped = Skills.reduce<Record<string, Skills[]>>((acc, Skills) => {
    const cat = Skills.category || "Uncategorized";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(Skills);
    return acc;
  }, {});

  return (
    <>
<Header></Header>
    <main className=" mx-auto dark-mlue-bg text-white">
      <section className="flex w-[80%] m-auto justify-center gap-10 self-stretch">
        <div>
      <h1 className="main-heading mb-8">Explore the full skill library</h1>
      <h2>Read through all our options and select a starting point</h2>
</div>
<div>
  <Image
      src="/ImagePlaceholder.png"
      className="m-auto ImageEffect"
        width={100}
        height={150}
        alt="Placeholder art"/>
</div>
      </section>

      <div className="space-y-10 w-[80%] m-auto">
        {Object.entries(grouped).map(([category, items]) => (
          <section key={category}>
            <h2 className="subheading mb-4 border-b border-gray-700 pb-2">
              {category}
            </h2>
            <div className="flex flex-wrap gap-3">
              {items.map((Skills) => (
                <Link
  key={Skills.id}
  href={`/skill-library/${encodeURIComponent(Skills.slug)}`} // or use slug
  className="white-button transition-all duration-200"
>
  {Skills.title}
</Link>
              ))}
            </div>
          </section>
          
        ))}
      </div>
      <QuizCallout></QuizCallout>
    </main>
    <Footer></Footer>
    </>
  );
}
