// src/components/Updates.tsx

import React from 'react';
import { Bell, Smartphone, ArrowRight } from 'lucide-react';

const Updates = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-800 mb-8 md:text-3xl">Latest Updates</h3>

        {/* Make the cards appear in a row on small screens */}
        <div className="flex flex-col gap-6 sm:flex-row sm:gap-4">
          <UpdateCard
            tag="New"
            icon={<Bell className="h-6 w-6" />}
            title="Enhanced FFCS Interface"
            description="Experience our newly redesigned course registration system with improved features and user experience."
          />

          <UpdateCard
            tag="Update"
            icon={<Smartphone className="h-6 w-6" />}
            title="Mobile App Launch"
            description="Access FFCS on the go with our new mobile application. Available now on iOS and Android."
          />
        </div>

        <div className="mt-8 text-center">
          <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors text-sm md:text-base">
            View all updates
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

const UpdateCard = ({
  tag,
  icon,
  title,
  description,
}: {
  tag: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 hover:shadow-lg transition-all hover:-translate-y-1 flex-1">
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        <div
          className={`p-2 sm:p-3 rounded-xl ${
            tag === 'New' ? 'bg-yellow-50' : 'bg-green-50'
          }`}
        >
          {icon}
        </div>
      </div>
      <div>
        <span
          className={`inline-block px-2 py-1 text-xs rounded-full font-medium mb-2 sm:mb-3 ${
            tag === 'New' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
          }`}
        >
          {tag}
        </span>
        <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
          {title}
        </h4>
        <p className="text-gray-600 text-xs sm:text-sm">{description}</p>
        <button className="mt-3 text-blue-600 hover:text-blue-800 font-medium inline-flex items-center text-xs sm:text-sm">
          Learn more
          <ArrowRight className="ml-1 sm:ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  </div>
);

export default Updates;
