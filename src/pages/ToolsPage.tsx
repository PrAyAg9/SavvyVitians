import React, { useState } from "react";
import ToolCard from "../components/ToolCard";

const toolsData = [
  {
    image: "../../images/1.png", 
    title: "CGPA Calculator",
    description: "Calculate your CGPA easily with our advanced calculator tool.",
    linkText: "Calculate Now",
    linkUrl: "signin",
  },
  {
    image: "../../images/2.png", 
    title: "Grade Predictor",
    description: "Predict your potential grades based on historical data.",
    linkText: "Predict Grades",
    linkUrl: "signin",
  },
  {
    image: "../../images/3.png", 
    title: "Teacher Rating",
    description: "View and submit anonymous feedback for professors.",
    linkText: "Rate Teachers",
    linkUrl: "signin",
  },
  {
    image: "../../images/4.png", 
    title: "Project Collaboration",
    description: "Find teammates for your academic projects.",
    linkText: "Find Partners",
    linkUrl: "sigin",
  },
  {
    image: "../../images/4.png", 
    title: "Time Table Planner",
    description: "Plan your weekly timetable effectively with this tool.",
    linkText: "Plan Timetable",
    linkUrl: "signin",
  },
  {
    image: "../../images/3.png", 
    title: "Exam Scheduler",
    description: "Schedule and track your exams with ease.",
    linkText: "Schedule Exams",
    linkUrl: "signin",
  },
];

const ToolsPage: React.FC = () => {
  const [toolsToShow, setToolsToShow] = useState(4); // Show initial tools

  const handleLoadMore = () => {
    setToolsToShow((prev) => Math.min(prev + 4, toolsData.length)); // Load 4 more tools or show all
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 text-center">Academic Tools</h1>
        <p className="text-gray-600 text-center mt-4">
          Explore a variety of tools to enhance your academic experience.
        </p>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {toolsData.slice(0, toolsToShow).map((tool, index) => (
            <ToolCard
              key={index}
              image={tool.image}
              title={tool.title}
              description={tool.description}
              linkText={tool.linkText}
              linkUrl={tool.linkUrl}
            />
          ))}
        </div>

        {/* Load More Button */}
        {toolsToShow < toolsData.length && (
          <div className="text-center mt-8">
            <button
              onClick={handleLoadMore}
              className="px-6 py-3 bg-blue-800 text-white rounded-md hover:bg-blue-900 transition-colors"
            >
              Load More Tools
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToolsPage;
