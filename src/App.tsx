import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [recipeFound, setRecipeFound] = useState([]);
  const [recipeSearch, setRecipeSearch] = useState("");

  const searchForRecipes = async (query: string): Promise<any>  => {
    const result = await fetch(`http://localhost:3000/?search=${query}`);
    return (await result.json()).results;
  }

  useEffect(() => {
    (async () => {
      const query = encodeURIComponent(recipeSearch);
      const response = await searchForRecipes(query);
      setRecipeFound(response);
    })
  },[])

  return (
    <div>
    </div>
  );
}

export default App;
