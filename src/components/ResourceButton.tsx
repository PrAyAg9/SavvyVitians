import React from 'react';

interface ResourceButtonProps {
  title: string;
  onClick: () => void;
  icon: React.ReactNode;
}

const ResourceButton: React.FC<ResourceButtonProps> = ({ title, onClick, icon }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center w-32 h-32 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow hover:bg-blue-50 focus:outline-none"
    >
      <span className="text-blue-800 text-3xl mb-2">{icon}</span>
      <span className="text-sm font-semibold text-gray-800">{title}</span>
    </button>
  );
};

export default ResourceButton;
