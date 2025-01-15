// src/components/QuickLinks.tsx

import React from "react";
import { Calendar, Book, Users, HelpCircle, Search } from "lucide-react";

const QuickLinks = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Quick Links Section */}
        <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 md:text-3xl">Quick Links</h3>
          <div className="grid grid-cols-2 gap-6">
            <QuickLink icon={<Calendar className="text-blue-600" />} text="Academic Calendar" />
            <QuickLink icon={<Book className="text-blue-600" />} text="Course Catalog" />
            <QuickLink icon={<Users className="text-blue-600" />} text="Faculty Directory" />
            <QuickLink icon={<HelpCircle className="text-blue-600" />} text="FAQs" />
          </div>
        </div>

        {/* Quick Course Search & Resources Section */}
        <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 md:text-3xl">
            Quick Course Search & Resources
          </h3>
          <div className="space-y-6">
            {/* Updated Search Bar */}
            <div className="relative">
              <form action="/resources" method="get">
                <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter course code or name"
                  className="w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow text-sm sm:text-base"
                />
              </form>
            </div>

            {/* Popular Courses */}
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2 text-base md:text-lg">Popular Courses</h4>
              <p className="text-gray-600 text-sm md:text-base">
                Get study resources, previous year papers, and expert tips for these courses:
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs sm:text-sm">
                  CSE3003
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs sm:text-sm">
                  MAT1014
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs sm:text-sm">
                  PHY1001
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const QuickLink = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <a href="#" className="flex items-center space-x-3 p-4 rounded-lg hover:bg-blue-50 transition-colors group">
    <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-white transition-colors">
      {icon}
    </div>
    {/* Hide text on mobile, show on tablet and above */}
    <span className="text-gray-700 group-hover:text-blue-800 font-medium hidden sm:inline">
      {text}
    </span>
  </a>
);

export default QuickLinks;
