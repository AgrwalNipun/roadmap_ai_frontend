import { Navbar } from "../Components/Navbar";
import { useState } from "react";
import { generateRoadmap } from "../apis/roadmapApis";
import { useNavigate } from "react-router-dom";
export const Generate = () => {
  const navigate = useNavigate();
  const [topic, setTopic] = useState("");

  const handleGenerate = async () => {
    console.log("Generating roadmap for:", topic);
    // TODO: Call API to generate roadmap
    const res = await generateRoadmap(topic);
    if (res) {

      navigate("/roadmap/"+res?.id);

    }
    
    console.log(res);
    
    
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Generate New Roadmap</h1>
        <div className="bg-[hsl(var(--card))] p-6 rounded-xl border border-[hsl(var(--border))] shadow-sm">
          <p className="text-[hsl(var(--primary))] mb-4">
            Enter a topic to generate a comprehensive learning roadmap.
          </p>
          <div className="flex gap-4">
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g., Learn React, Master Python..."
              className="flex-1 p-3 rounded-lg bg-[hsl(var(--input))] border-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
            />
            <button
              onClick={handleGenerate}
              className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Generate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
