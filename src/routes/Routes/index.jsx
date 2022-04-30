import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Registration from "../../pages/Registration";
import Profile from "../../pages/Profile";
import NotFound from "../../pages/NotFound";
import PrivateRoute from "../components/PrivateRoute";
import GuestRoute from "../components/GuestRoute";
import RecipeList from '../../containers/recipeCard/RecipeList';
import Favorites from '../../containers/favoriteCard/components/Favorites';
import {useState} from "react";


function AppRoutes() {
  

  const [favorites, setFavorites] = useState([]);
  const addToFavorites = (item, quantity = 1) => {
    // нужно проверить, нет ли уже такого рецепта в избранном
    const itemIndex = favorites.findIndex(value => value.id === item.id);
    if (itemIndex < 0) { // такого рецепта еще нет
      const newItem = {
        ...item,
        quantity: quantity
      };
      setFavorites([...favorites, newItem]);
    } else { // такой рецепт уже есть
      const newItem = {
        ...favorites[itemIndex],
        quantity: favorites[itemIndex].quantity + quantity
      };
      const newCart = favorites.slice(); // копия массива cartItems
      newCart.splice(itemIndex, 1, newItem);
      setFavorites(newCart);
    }
  };
  const removeFromFavorites = (id) => {
    const newCart = favorites.filter(item => item.id !== id);
    setFavorites(newCart);
   
  };

  return  (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route path="/Recipes" element={<RecipeList favorites={null} addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites}/>}>
     
      </Route>
      <Route path="/Favorites" element={<Favorites favorites={favorites} addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites} />}>

      </Route>
      <Route
        path="/login"
        element={
          <GuestRoute>
            <Login />
          </GuestRoute>
        }
      />
      <Route
        path="/registration"
        element={
          <GuestRoute>
            <Registration />
          </GuestRoute>
        }
      />

      <Route path="/not-found-404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/not-found-404" />} />
    </Routes>
  ) 
  
}

export default AppRoutes;
