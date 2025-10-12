import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="max-w-7xl m-auto px-2 dark:bg-gray-900 transition-colors duration-300">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
