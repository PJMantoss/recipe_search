import React, { FormEvent, useEffect, useState } from 'react';
import { IRecipe } from './IRecipe';
import './App.css';

function App() {
  const [recipeFound, setRecipeFound] = useState<IRecipe[]>([]);
  const [recipeSearch, setRecipeSearch] = useState("");

  const searchForRecipes = async (query: string): Promise<IRecipe[]>  => {
    const result = await fetch(`http://localhost:3000/?search=${query}`);
    return (await result.json()).results;
  }

  const search = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const input = form.querySelector('#searchText') as HTMLInputElement;
    setRecipeSearch(input.value);
  }

  useEffect(() => {
    (async () => {
      const query = encodeURIComponent(recipeSearch);
      const response = await searchForRecipes(query);
      setRecipeFound(response);
    })();
  }, [recipeSearch]);

  return (
    <div className="App">
      <h1>Recipe Search App</h1>
      <form className="searchForm" onSubmit={e => search(e)} >
        <input type="text" name="search" id="searchText" />
        <input type="submit" value="Search" />
      </form>
      {recipeSearch && <p>results for { recipeSearch }...</p>}

      <div className="recipeContainer"></div>
    </div>
  );
}

export default App;
