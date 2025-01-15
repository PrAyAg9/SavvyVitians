// src/pages/MakeContribution.tsx

import React, { useState } from "react";
import subjects from "../data/subjects";

interface Resource {
  id: number;
  name: string;
  file: string;
}

interface Folder {
  [teacherName: string]: Resource[];
}

interface SubjectType {
  name: string;
  folders: {
    "Teacher Materials"?: Folder;
    Assignments?: Folder;
    "Tips to Pass"?: Resource[];
    "Previous Year Papers"?: Resource[];
  };
}


const isValidSubjectCode = (code: string) => {
  if (code.length < 5) return false;
  const regex = /^[A-Za-z0-9]+$/; 
  return regex.test(code);
};

const MakeContribution: React.FC = () => {
  const [subjectCode, setSubjectCode] = useState("");
  const [subjectName, setSubjectName] = useState("");

  const [modulesTeacher, setModulesTeacher] = useState("");
  const [modulesFiles, setModulesFiles] = useState<File[]>([]);

  const [assignmentsTeacher, setAssignmentsTeacher] = useState("");
  const [assignmentsFiles, setAssignmentsFiles] = useState<File[]>([]);


  const [tipsFiles, setTipsFiles] = useState<File[]>([]);


  const [papersFiles, setPapersFiles] = useState<File[]>([]);


  const [localSubjects, setLocalSubjects] = useState<Record<string, SubjectType>>(subjects);


  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<File[]>>
  ) => {
    if (e.target.files) {
      setter(Array.from(e.target.files)); 
    }
  };


  const handleSubmit = () => {
    if (!isValidSubjectCode(subjectCode)) {
      alert("Subject code must be at least 5 alphanumeric characters (e.g., ECE200).");
      return;
    }

    setLocalSubjects((prevSubjects) => {
      const updated = { ...prevSubjects };
      if (!updated[subjectCode]) {
        updated[subjectCode] = {
          name: subjectName || "Unnamed Subject",
          folders: {},
        };
      }

      if (subjectName.trim()) {
        updated[subjectCode].name = subjectName;
      }

      function ensureTeacherFolder(
        subjectObj: SubjectType,
        folderKey: "Teacher Materials" | "Assignments",
        teacher: string
      ) {
        if (!subjectObj.folders[folderKey]) {
          subjectObj.folders[folderKey] = {};
        }
        const folder = subjectObj.folders[folderKey] as Folder;
  
        if (!folder[teacher]) {
          folder[teacher] = [];
        }
        return folder[teacher];
      }

      function ensureFlatFolder(
        subjectObj: SubjectType,
        folderKey: "Tips to Pass" | "Previous Year Papers"
      ) {

        if (!subjectObj.folders[folderKey]) {
          subjectObj.folders[folderKey] = [];
        }
        return subjectObj.folders[folderKey] as Resource[];
      }

      const subjectObj = updated[subjectCode];

      if (modulesFiles.length > 0) {
        const teacher = modulesTeacher.trim() || "General";
        const resourcesArray = ensureTeacherFolder(subjectObj, "Teacher Materials", teacher);
        modulesFiles.forEach((file) => {
          resourcesArray.push({
            id: Date.now() + Math.floor(Math.random() * 1000),
            name: file.name,
            // The path => /downloads/<SubjectCode>/Teacher Materials/<filename>
            file: `/downloads/${subjectCode}/Teacher Materials/${file.name}`,
          });
        });
      }

      // Assignments
      if (assignmentsFiles.length > 0) {
        const teacher = assignmentsTeacher.trim() || "General";
        const resourcesArray = ensureTeacherFolder(subjectObj, "Assignments", teacher);
        assignmentsFiles.forEach((file) => {
          resourcesArray.push({
            id: Date.now() + Math.floor(Math.random() * 1000),
            name: file.name,
            file: `/downloads/${subjectCode}/Assignments/${file.name}`,
          });
        });
      }


      if (tipsFiles.length > 0) {
        const folderArr = ensureFlatFolder(subjectObj, "Tips to Pass");
        tipsFiles.forEach((file) => {
          folderArr.push({
            id: Date.now() + Math.floor(Math.random() * 1000),
            name: file.name,
            file: `/downloads/${subjectCode}/Tips to Pass/${file.name}`,
          });
        });
      }

      if (papersFiles.length > 0) {
        const folderArr = ensureFlatFolder(subjectObj, "Previous Year Papers");
        papersFiles.forEach((file) => {
          folderArr.push({
            id: Date.now() + Math.floor(Math.random() * 1000),
            name: file.name,
            file: `/downloads/${subjectCode}/Previous Year Papers/${file.name}`,
          });
        });
      }

      return updated;
    });

    // 4) Clear the form
    setSubjectCode("");
    setSubjectName("");
    setModulesTeacher("");
    setModulesFiles([]);
    setAssignmentsTeacher("");
    setAssignmentsFiles([]);
    setTipsFiles([]);
    setPapersFiles([]);

    alert("Contribution submitted successfully!");
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800">Make a Contribution</h1>
        <p className="text-gray-600 mt-4">
          Provide a subject code, name, and upload any of the materials below. Only fill what you need!
        </p>

        <div className="mt-6 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Subject Code (≥5 chars, alphanumeric, e.g. ECE200)"
            value={subjectCode}
            onChange={(e) => setSubjectCode(e.target.value.toUpperCase())}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Subject Name (optional if updating existing subject code)"
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Modules Section */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800">1. Modules</h2>
          <p className="text-gray-600 mb-2 text-sm">
            Optionally enter a teacher name and select files for modules.
          </p>
          <input
            type="text"
            placeholder="Teacher Name (default: General)"
            value={modulesTeacher}
            onChange={(e) => setModulesTeacher(e.target.value)}
            className="w-full px-4 py-2 mb-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="file"
            multiple
            onChange={(e) => handleFileChange(e, setModulesFiles)}
          />
        </div>

        {/* Assignments Section */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800">2. Assignments</h2>
          <p className="text-gray-600 mb-2 text-sm">
            Optionally enter a teacher name and select assignment files.
          </p>
          <input
            type="text"
            placeholder="Teacher Name (default: General)"
            value={assignmentsTeacher}
            onChange={(e) => setAssignmentsTeacher(e.target.value)}
            className="w-full px-4 py-2 mb-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="file"
            multiple
            onChange={(e) => handleFileChange(e, setAssignmentsFiles)}
          />
        </div>

        {/* Tips to Pass */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800">3. Tips to Pass</h2>
          <p className="text-gray-600 mb-2 text-sm">
            Upload files if you want to share exam tips, cheat sheets, etc.
          </p>
          <input
            type="file"
            multiple
            onChange={(e) => handleFileChange(e, setTipsFiles)}
          />
        </div>

        {/* Previous Year Papers */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800">4. Previous Year Papers</h2>
          <p className="text-gray-600 mb-2 text-sm">
            Upload past question papers if you have them.
          </p>
          <input
            type="file"
            multiple
            onChange={(e) => handleFileChange(e, setPapersFiles)}
          />
        </div>

        <button
          onClick={handleSubmit}
          className="mt-6 bg-blue-800 text-white px-6 py-3 rounded-md hover:bg-blue-900"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default MakeContribution;
