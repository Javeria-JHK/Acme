import react from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function About() {
  return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-700">This is the about page of our application.</p>
      </div>

  );
}   