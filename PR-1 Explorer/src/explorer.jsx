import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const data = [
  {
    grid: 1,
    name: "kishan",
    email: "kishan@gmail.com",
    password: "kishan@123",
    course: ["html", "css", "bootstrap", "js"],
    city: "surat",
  },
  {
    grid: 2,
    name: "jay",
    email: "jay@gmail.com",
    password: "kishan@123",
    course: ["photoshop", "figma", "illustrator", "adobe xd"],
    city: "rajkot",
  },
  {
    grid: 3,
    name: "ajay",
    email: "ajay@gmail.com",
    password: "ajay@123",
    course: ["html", "css", "bootstrap", "nodejs"],
    city: "amareli",
  },
  {
    grid: 4,
    name: "nisha",
    email: "nisha@gmail.com",
    password: "nisha@123",
    course: ["html", "css", "bootstrap", "python"],
    city: "vadodara",
  },
];

const Person = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">User Data</h1>
      <center>
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-black text-white">
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Grid</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Courses</th>
            <th className="border border-gray-300 p-2">City</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.grid} className="border border-gray-300">
              <td className="border border-gray-300 p-2 ">{user.grid}</td>
              <td className="border border-gray-300 p-2">{user.name}</td>
              <td className="border border-gray-300 p-2">{user.email}</td>
              <td className="border border-gray-300 p-2">{user.course.join(", ")}</td>
              <td className="border border-gray-300 p-2">{user.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </center>
    </div>
  );
};

export default Person;

