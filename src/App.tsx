import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [recipeFound, setRecipeFound] = useState([]);
  const [recipeSearch, setRecipeSearch] = useState("");

  const recipesSearch = async (query: string) => {
    const result = await fetch(`http://localhost:3000/?search=${query}`);
    return (await result.json()).results;
  }

  return (
    <div>
    </div>
  );
}

export default App;
