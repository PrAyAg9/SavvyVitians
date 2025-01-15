// src/components/RecentDiscussions.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { Timestamp } from 'firebase/firestore';

// Interface for Discussion type
interface Discussion {
  id: string;
  title: string;
  description: string;
  repliesCount: number;
  createdAt: Timestamp | null;
}

interface RecentDiscussionsProps {
  discussions: Discussion[];
  onLoadMore: () => void;
  hasMore: boolean;
}

const RecentDiscussions: React.FC<RecentDiscussionsProps> = ({
  discussions,
  onLoadMore,
  hasMore,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800">Recent Discussions</h3>
      <ul className="mt-4 space-y-4">
        {discussions.map((discussion) => (
          <li key={discussion.id} className="border-b pb-4">
            <Link to={`/discussion/${discussion.id}`}>
              <div className="flex justify-between">
                <h4 className="text-gray-800 font-medium">{discussion.title}</h4>
                <span className="text-sm text-gray-600">
                  {discussion.createdAt
                    ? discussion.createdAt.toDate().toLocaleString()
                    : 'Just now'}
                </span>
              </div>
              <div className="flex justify-between mt-2">
                <p className="text-gray-600">{discussion.description}</p>
                <span className="text-sm text-gray-600">
                  {discussion.repliesCount} replies
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {hasMore && (
        <button
          onClick={onLoadMore}
          className="mt-4 px-6 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default RecentDiscussions;