import React from "react";
import { SlidersHorizontal } from "lucide-react";

const Filters = () => {
  return (
    <div className="flex justify-between items-center mt-6 border-t pt-4">
      <p className="text-gray-600 text-sm">Page 1 of 3 jobs</p>
      <button className="flex items-center gap-2 text-sm text-gray-700 hover:underline">
        <SlidersHorizontal size={16} /> Filter
      </button>
    </div>
  );
};

export default Filters;