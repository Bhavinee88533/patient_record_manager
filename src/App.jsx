import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Patients from "./pages/Patients";
import About from "./pages/About";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-screen-xl mx-auto p-6 space-y-12">
        <Home />
        <Patients />
        <About />
      </main>
    </div>
  );
}
