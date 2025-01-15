import React from 'react';

interface ResourceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <span className="text-blue-800 text-2xl mr-3">{icon}</span>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ResourceCard;
