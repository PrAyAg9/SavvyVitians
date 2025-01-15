// src/components/Hero.tsx

import React, { useState } from "react";
import { Search } from "lucide-react";
import BackgroundDiv from "./BackgroundDiv";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      navigate("/resources", { state: { searchQuery: query } });
    } else {
      alert("Please enter a search term.");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <BackgroundDiv imageUrl="/images/bleback.jpg">
      <div className="bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="pt-10 pb-16">
            <div className="max-w-4xl mx-auto text-center mb-10 px-4">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                All Your Modules, Notes, Question Papers
                <br className="hidden sm:block" />
                Just One Click Away
              </h2>
              <p className="text-lg sm:text-xl md:text-1l text-gray-600">
                Crack Exams, Smash Grades with SavvyVitian
              </p>
            </div>

            <div className="max-w-3xl mx-auto px-4">
              {/* Conditionally render images based on screen size */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                {/* Hide images on mobile */}
                <img
                  src="../../images/study.svg"
                  alt="Study"
                  className="h-12 w-12 flex-shrink-0 hidden sm:block"
                />
                <div className="flex-1 flex items-stretch bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Search for a document, course or university"
                    className="w-full py-3 px-4 rounded-l-xl focus:outline-none text-gray-700 text-sm sm:text-base md:text-lg"
                  />
                  <button
                    onClick={handleSearch}
                    className="bg-blue-800 text-white px-4 sm:px-6 py-3 rounded-r-xl hover:bg-blue-900 transition-colors flex items-center whitespace-nowrap"
                  >
                    <Search className="h-5 w-5" />
                    <span className="ml-2 font-medium hidden sm:inline">
                      Search
                    </span>
                  </button>
                </div>
                <img
                  src="../../images/comment.svg"
                  alt="Comment"
                  className="h-12 w-12 flex-shrink-0 hidden sm:block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundDiv>
  );
};

export default Hero;
