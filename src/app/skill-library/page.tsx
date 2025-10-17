import { supabase } from "@/lib/supabaseClient";

// Define the structure of a Skill row
type Skills = {
  id: string | number;
  name: string;
  category?: string;
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
    <main className="p-8 max-w-5xl mx-auto text-white">
      <h1 className="text-4xl font-bold mb-8 text-zip-blue">Skill Library</h1>

      <div className="space-y-10">
        {Object.entries(grouped).map(([category, items]) => (
          <section key={category}>
            <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
              {category}
            </h2>
            <div className="flex flex-wrap gap-3">
              {items.map((Skills) => (
                <button
                  key={Skills.id}
                  className="bg-gray-800 hover:bg-zip-blue/80 text-white px-4 py-2 rounded-lg transition-all duration-200"
                >
                  {Skills.title}
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
