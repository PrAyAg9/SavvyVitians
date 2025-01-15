import React from "react";

interface ToolCardProps {
  image: string;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ image, title, description, linkText, linkUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <a
          href={linkUrl}
          className="text-blue-800 font-medium mt-4 inline-block hover:underline"
        >
          {linkText} →
        </a>
      </div>
    </div>
  );
};

export default ToolCard;
