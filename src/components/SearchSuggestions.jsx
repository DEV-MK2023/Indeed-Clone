// SearchSuggestions.jsx
import React from 'react';

const suggestions = [
  'internship in web development',
  'web developer',
  'internship',
  'front end developer internship',
  'web development internship',
  'internship in software house',
  'front end developer',
  'react js internship',
  'developer internship',
  'work from home',
];

const SearchSuggestions = () => {
  return (
    <div className="  rounded-lg p-4 w-full max-w-sm sm:w-80 mb-4 ml-4">
      <h2 className="text-base font-semibold mb-3">People also searched:</h2>
      <div className="flex flex-wrap gap-2">
        {suggestions.map((text, i) => {
          const slug = text.toLowerCase().replace(/\s+/g, '-');
          return (
            <a
              key={i}
              href={`/${slug}`}
              className="flex items-center px-3 py-1.5 text-sm bg-gray-100 rounded-full hover:bg-gray-200 transition"
            >
              <span className="mr-2">🔍</span>
              {text}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SearchSuggestions;
