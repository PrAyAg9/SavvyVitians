import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import subjects from "../data/subjects";

interface Resource {
  id: number;
  name: string;
  file: string;
}

const GetResources: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedFolder, setSelectedFolder] = useState<keyof typeof subjects[string]["folders"] | null>(null); // Restrict to valid folder keys
  const [selectedTeacher, setSelectedTeacher] = useState<string | null>(null);

  const handleSearch = (subjectCode: string) => {
    if (subjects[subjectCode]) {
      setSelectedSubject(subjectCode);
      setSelectedFolder(null);
      setSelectedTeacher(null);
    } else {
      alert("No resources found for the entered subject.");
    }
  };

  const handleFolderClick = (folderName: keyof typeof subjects[string]["folders"]) => {
    setSelectedFolder(folderName);
    setSelectedTeacher(null);
  };

  const handleTeacherClick = (teacherName: string) => {
    setSelectedTeacher(teacherName);
  };

  const handleBackToFolders = () => {
    setSelectedFolder(null);
    setSelectedTeacher(null);
  };

  const handleBackToTeachers = () => {
    setSelectedTeacher(null);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 text-center">Get Resources</h1>
        <p className="text-gray-600 text-center mt-4">
          Search for subjects to find teacher materials, tips, previous year papers, and more.
        </p>

        <SearchBar onSearch={handleSearch} />

        {/* Display Resources for Selected Subject */}
        {selectedSubject && !selectedFolder && (
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-800">
              Resources for {subjects[selectedSubject].name} ({selectedSubject})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              {Object.keys(subjects[selectedSubject].folders).map((folderName) => (
                <div
                  key={folderName}
                  onClick={() => handleFolderClick(folderName as keyof typeof subjects[string]["folders"])}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <h3 className="text-lg font-semibold text-gray-800">{folderName}</h3>
                  <p className="text-gray-600">Click to view resources.</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Display Teachers for Selected Folder */}
        {selectedSubject && selectedFolder && !selectedTeacher && (
          <div className="mt-12">
            <button
              onClick={handleBackToFolders}
              className="text-blue-500 hover:underline mb-4"
            >
              Back to Folders
            </button>
            <h2 className="text-2xl font-semibold text-gray-800">
              {selectedFolder} - Teachers
            </h2>
            {["Teacher Materials", "Assignments"].includes(selectedFolder) ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                {Object.keys(
                  subjects[selectedSubject].folders[selectedFolder] as Record<string, Resource[]>
                ).map((teacherName) => (
                  <div
                    key={teacherName}
                    onClick={() => handleTeacherClick(teacherName)}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <h3 className="text-lg font-semibold text-gray-800">
                      {teacherName}
                    </h3>
                    <p className="text-gray-600">Click to view resources.</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600 mt-4">
                This folder does not have teacher-specific resources.
              </p>
            )}
          </div>
        )}

        {/* Display Resources for Selected Teacher */}
        {selectedSubject && selectedFolder && selectedTeacher && (
          <div className="mt-12">
            <button
              onClick={handleBackToTeachers}
              className="text-blue-500 hover:underline mb-4"
            >
              Back to Teachers
            </button>
            <h2 className="text-2xl font-semibold text-gray-800">
              {selectedFolder} - {selectedTeacher}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              {(subjects[selectedSubject].folders[selectedFolder] as Record<string, Resource[]>)[
                selectedTeacher
              ].map((resource) => (
                <div
                  key={resource.id}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-gray-800">
                    {resource.name}
                  </h3>
                  <a
                    href={resource.file}
                    download
                    className="text-blue-500 hover:underline mt-2 block"
                  >
                    Download
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Display Resources for Non-Teacher-Specific Folders */}
        {selectedSubject &&
          selectedFolder &&
          !["Teacher Materials", "Assignments"].includes(selectedFolder) && (
            <div className="mt-12">
              <button
                onClick={handleBackToFolders}
                className="text-blue-500 hover:underline mb-4"
              >
                Back to Folders
              </button>
              <h2 className="text-2xl font-semibold text-gray-800">
                {selectedFolder} - Resources
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                {(
                  subjects[selectedSubject].folders[selectedFolder] as Resource[]
                ).map((resource) => (
                  <div
                    key={resource.id}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-lg font-semibold text-gray-800">
                      {resource.name}
                    </h3>
                    <a
                      href={resource.file}
                      download
                      className="text-blue-500 hover:underline mt-2 block"
                    >
                      Download
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default GetResources;
