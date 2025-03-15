import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [userName, setUsername] = useState('');

  useEffect(() => {
    getNames();
  }, []);

  const getNames = async () => {
    try {
      const response = await axios.get('http://localhost:5000/names'); // Ensure correct API URL
      console.log(response.data); // Debugging response
      setUsername(response.data);
    } catch (error) {
      console.error("Error fetching names:", error);
    }
  };

  return (
    <>
      <h1>My Website</h1>
      <h3>Hello {userName}</h3>
    </>
  );
}

export default App;
