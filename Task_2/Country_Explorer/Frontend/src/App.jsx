import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [localVisits, setLocalVisits] = useState(0);

  useEffect(() => {
    const savedVisits = localStorage.getItem('react_visit_count');
    let currentVisits = 1;

    if (savedVisits) {
      currentVisits = parseInt(savedVisits, 10) + 1;
    }

    localStorage.setItem('react_visit_count', currentVisits);
    
    setLocalVisits(currentVisits);
  }, []);
  
  return (
   <div className="h-screen w-screen bg-gray-900 ">
    <div className=" flex flex-col items-center justify-center h-fit w-full px-8 py-4 bg-blue-200">
      <h1 className="text-2xl font-bold text-gray-800">Country Explorer</h1>
      <p className="text-gray-600">Welcome to the Country Explorer app!</p>
    </div>
    <div className="flex flex-col items-center justify-center h-fit w-full px-8 py-4 bg-gray-200">
      <h3 className="text-lg font-semibold text-gray-800">Visitor Count: {localVisits}</h3>
    </div>
   </div>
  );
}

export default App