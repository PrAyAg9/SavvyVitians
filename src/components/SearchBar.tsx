import React, { useState } from "react";
import subjects from "../data/subjects";

interface SearchBarProps {
  onSearch: (subjectCode: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim()) {
      const filteredSuggestions = Object.keys(subjects).filter(
        (key) =>
          key.toLowerCase().includes(value.toLowerCase()) ||
          subjects[key].name.toLowerCase().includes(value.toLowerCase())
      );

      // const limited = filtered.slice(0,10);
      
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (subjectCode: string) => {
    setQuery(subjectCode);
    setSuggestions([]);
    onSearch(subjectCode);
  };

  return (
    <div className="relative max-w-4xl mx-auto mt-6">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search by subject code or name (e.g., ECE100, Calculus)"
        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {suggestions.length > 0 && (
        <ul className="absolute left-0 top-full w-full bg-white border border-gray-300 rounded-md shadow-md mt-2 z-10">
          {suggestions.map((code) => (
            <li
              key={code}
              onClick={() => handleSuggestionClick(code)}
              className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
            >
              {code} - {subjects[code].name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
