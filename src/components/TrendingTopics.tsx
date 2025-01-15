// src/components/TrendingTopics.tsx

import React from 'react';
import { Link } from 'react-router-dom';

// Interface for Discussion type
interface Discussion {
  id: string;
  title: string;
  repliesCount: number;
}

interface TrendingTopicsProps {
  topics: Discussion[];
}

const TrendingTopics: React.FC<TrendingTopicsProps> = ({ topics }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800">Trending Topics</h3>
      <ul className="mt-4 space-y-2">
        {topics.map((topic, index) => (
          <li key={topic.id}>
            <span className="text-gray-600">
              #{index + 1}{' '}
              <Link
                to={`/discussion/${topic.id}`}
                className="text-blue-800 hover:underline"
              >
                {topic.title}
              </Link>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingTopics;