import React, { useState } from "react";
import { Plus, X, Save } from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

interface Course {
  id: string;
  code: string;
  name: string;
  faculty: string;
  credits: string;
  slots: string[];
  venue: string;
  color: string;
}

// Slot mapping
const slotMapping: { [day: string]: string[] } = {
  Monday: ["A11", "B11", "C11", "A21", "A14", "B21", "C21"],
  Tuesday: ["D11", "E11", "F11", "D21", "E14", "B22", "F21"],
  Wednesday: ["A12", "B12", "C12", "A22", "B14", "B22", "A24"],
  Thursday: ["D12", "E12", "F12", "D22", "F14", "D22", "F22"],
  Friday: ["A13", "B13", "C13", "A23", "C14", "B24", "C21"],
  Saturday: ["D13", "E13", "F13", "D23", "D14", "D24", "E23"],
};

const validSlots = Object.values(slotMapping).flat();
const periods = [
  "8:30 - 10:00",
  "10:05 - 11:40",
  "11:45 - 1:15",
  "1:15 - 2:45",
  "2:50 - 4:00",
  "4:05 - 5:55",
  "6:00 - 7:30",
];

const FFCSHelp = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [totalCredits, setTotalCredits] = useState(0);

  const [courseInput, setCourseInput] = useState({
    code: "",
    name: "",
    faculty: "",
    credits: "",
    slots: "",
    venue: "",
  });

  // Handle form input
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setCourseInput({ ...courseInput, [name]: value });
  };

  // All occupied slots
  const getOccupiedSlots = () => courses.flatMap((course) => course.slots);

  // Validate
  const validateInputs = () => {
    const { code, name, faculty, credits, slots, venue } = courseInput;
    if (!code.trim() || !name.trim() || !faculty.trim() || !credits.trim() || !slots.trim() || !venue.trim()) {
      alert("Please fill out all fields.");
      return false;
    }
    const creditValue = parseInt(credits, 10);
    if (isNaN(creditValue) || creditValue < 1 || creditValue > 5) {
      alert("Credits must be between 1 and 5.");
      return false;
    }
    const slotList = slots.split(",").map((s) => s.trim());
    for (const slot of slotList) {
      if (!validSlots.includes(slot)) {
        alert(`Invalid slot: ${slot}. Must be e.g. A11, B12, etc.`);
        return false;
      }
    }
    return true;
  };

  // Add course
  const addCourse = () => {
    if (!validateInputs()) return;
    const { code, name, faculty, credits, slots, venue } = courseInput;
    const newSlots = slots.split(",").map((s) => s.trim());
    const occupiedSlots = getOccupiedSlots();
    const conflicting = newSlots.filter((s) => occupiedSlots.includes(s));
    if (conflicting.length > 0) {
      alert("These slots already occupied: " + conflicting.join(", "));
      return;
    }
    const newCourse: Course = {
      id: Date.now().toString(),
      code,
      name,
      faculty,
      credits,
      slots: newSlots,
      venue,
      color: "#3498db",
    };
    setCourses([...courses, newCourse]);
    setTotalCredits(totalCredits + parseInt(credits));
    setCourseInput({
      code: "",
      name: "",
      faculty: "",
      credits: "",
      slots: "",
      venue: "",
    });
  };

  // Remove course
  const removeCourse = (id: string) => {
    const c = courses.find((course) => course.id === id);
    if (!c) return;
    setCourses(courses.filter((course) => course.id !== id));
    setTotalCredits(totalCredits - parseInt(c.credits));
  };

  // Change color from Selected Courses
  const handleColorChange = (id: string, color: string) => {
    setCourses((prev) =>
      prev.map((c) => (c.id === id ? { ...c, color } : c))
    );
  };

  // Change color from Timetable
  const handleTimetableColorChange = (id: string, color: string) => {
    setCourses((prev) =>
      prev.map((c) => (c.id === id ? { ...c, color } : c))
    );
  };

  // Render a cell
  const renderTimetableCell = (slot: string) => {
    const c = courses.find((course) => course.slots.includes(slot));
    if (!c) {
      return (
        <div className="border-2 border-dashed border-gray-200 rounded h-[36px] flex items-center justify-center" />
      );
    }
    return (
      <div
        className="h-[36px] rounded flex items-center justify-center cursor-pointer"
        style={{ backgroundColor: c.color }}
        onClick={() => {
          const newColor = prompt("New color (#hex):", c.color);
          if (newColor && /^#([0-9A-F]{3}){1,2}$/i.test(newColor)) {
            handleTimetableColorChange(c.id, newColor);
          }
        }}
      >
        <p className="text-white text-xs font-semibold text-center">
          {c.code}
        </p>
      </div>
    );
  };

  // Save timetable as PDF
  const saveTimetable = async () => {
    const pdf = new jsPDF("p", "mm", "a4");
    const timetableEl = document.getElementById("timetable");
    const selectedEl = document.getElementById("selected-courses");
    if (!timetableEl || !selectedEl) return;

    const canvas1 = await html2canvas(timetableEl, { scale: 2 });
    const data1 = canvas1.toDataURL("image/png");
    const pdfW = pdf.internal.pageSize.getWidth();
    const props1 = pdf.getImageProperties(data1);
    const h1 = (props1.height * pdfW) / props1.width;
    pdf.addImage(data1, "PNG", 0, 0, pdfW, h1);

    if (h1 > pdf.internal.pageSize.getHeight()) pdf.addPage();

    const canvas2 = await html2canvas(selectedEl, { scale: 2 });
    const data2 = canvas2.toDataURL("image/png");
    const props2 = pdf.getImageProperties(data2);
    const h2 = (props2.height * pdfW) / props2.width;
    const yOffset = h1 + 10 > pdf.internal.pageSize.getHeight() ? 10 : h1 + 10;
    pdf.addImage(data2, "PNG", 0, yOffset, pdfW, h2);

    pdf.save("timetable.pdf");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        FFCS Timetable Creator
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Add Course */}
        <div className="bg-white p-4 sm:p-6 rounded shadow space-y-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
            Add a Course
          </h2>
          <div className="text-sm space-y-3">
            {/* Course Code */}
            <div>
              <label className="block mb-1 font-medium">Course Code</label>
              <input
                name="code"
                value={courseInput.code}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Course Name */}
            <div>
              <label className="block mb-1 font-medium">Course Name</label>
              <input
                name="name"
                value={courseInput.name}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Faculty */}
            <div>
              <label className="block mb-1 font-medium">Faculty</label>
              <input
                name="faculty"
                value={courseInput.faculty}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Credits */}
            <div>
              <label className="block mb-1 font-medium">Credits</label>
              <select
                name="credits"
                value={courseInput.credits}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Credits</option>
                {[1, 2, 3, 4, 5].map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            {/* Slots */}
            <div>
              <label className="block mb-1 font-medium">Slots</label>
              <input
                name="slots"
                value={courseInput.slots}
                onChange={handleInputChange}
                placeholder="A11,B12"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-xs mt-1 text-gray-500">
                Occupied: {getOccupiedSlots().join(", ") || "None"}
              </p>
            </div>
            {/* Venue */}
            <div>
              <label className="block mb-1 font-medium">Venue</label>
              <input
                name="venue"
                value={courseInput.venue}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Button */}
            <button
              onClick={addCourse}
              className="w-full bg-blue-800 text-white py-2 rounded flex items-center justify-center hover:bg-blue-900 transition"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Course
            </button>
          </div>
        </div>

        {/* Timetable + Selected Courses */}
        <div className="lg:col-span-2 space-y-6">
          {/* Timetable */}
          <div id="timetable" className="bg-white p-4 sm:p-6 rounded shadow">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
                Weekly Schedule
              </h2>
              <div className="mt-2 sm:mt-0 flex items-center space-x-4">
                <span className="text-sm text-gray-600">
                  Total Credits: {totalCredits}
                </span>
                <button
                  onClick={saveTimetable}
                  className="bg-blue-800 text-white px-3 py-2 rounded hover:bg-blue-900 transition flex items-center"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save Timetable
                </button>
              </div>
            </div>

            <div className="w-full overflow-x-auto">
              <table className="table-fixed w-full text-xs sm:text-sm md:text-base">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-2 py-2 w-20 text-left font-medium text-gray-600">
                      Day
                    </th>
                    {periods.map((p, idx) => (
                      <th
                        key={idx}
                        className="px-2 py-2 text-left font-medium text-gray-600"
                      >
                        {p}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {Object.entries(slotMapping).map(([day, slots]) => (
                    <tr key={day}>
                      <td className="px-2 py-3 font-medium text-gray-900 whitespace-nowrap">
                        {day}
                      </td>
                      {slots.map((slot) => (
                        <td key={slot} className="px-2 py-3">
                          {renderTimetableCell(slot)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Selected Courses */}
          <div
            id="selected-courses"
            className="bg-white p-4 sm:p-6 rounded shadow"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              Selected Courses
            </h2>
            <div className="space-y-3">
              {courses.length === 0 && (
                <p className="text-sm text-gray-500">No courses selected.</p>
              )}
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-gray-50 p-3 rounded flex items-center justify-between"
                >
                  <div className="flex items-center space-x-4">
                    {/* Color Picker */}
                    <div className="flex items-center">
                      <label className="mr-2 text-sm text-gray-700">Color:</label>
                      <input
                        type="color"
                        value={course.color}
                        onChange={(e) => handleColorChange(course.id, e.target.value)}
                        className="w-6 h-6 border border-gray-300 rounded"
                      />
                    </div>
                    {/* Info */}
                    <div className="text-xs sm:text-sm">
                      <h3 className="font-medium text-gray-900">{course.code}</h3>
                      <p className="text-gray-600">{course.name}</p>
                      <p className="text-gray-500">
                        {course.faculty} • {course.credits} Credits • Slots: {course.slots.join(", ")}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeCourse(course.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FFCSHelp;
