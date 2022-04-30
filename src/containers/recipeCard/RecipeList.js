import React, {useEffect, useState} from 'react';
import Recipe from './Recipe'
import './App.scss';

const RecipeList = ({addToFavorites, removeFromFavorites, favorites, isFavorite}) => {
  const APP_ID = '33102f2e';
  const APP_KEY = 'ce09c92abe9b4daf8687c4a072c1f632';
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('Salad');
  useEffect(() => {
    getRecipes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);

  };
  const updateSearch = e => {
    setSearch(e.target.value);
  };
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  return(
    <div className='App'>
      <form onSubmit={getSearch} className='search-form'>
        <input className='search-bar' type='text' value={search} onChange={updateSearch} />
        <button className='search-button' type='submit'>Search</button>
      </form>
      
      <div className='cont_'>
       
      {recipes
        .filter((recipe) => !favorites || favorites.some(({id}) => recipe.recipe.uri === id))
        .map((recipe, index) => (
        <Recipe 
        key={index}
        id={recipe.recipe.uri}
        title={recipe.recipe.label} 
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
        isFavorite={isFavorite}

        />  
      )
         )}
          </div>
    </div>
  )
}

export default RecipeList;
