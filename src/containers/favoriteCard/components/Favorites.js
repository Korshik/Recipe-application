import { useState } from "react";
import FavoritesIcon from "./FavoritesIcon";
import RecipeList from "../../recipeCard/RecipeList";
import ShowAlert from "./ShowAlert";
import "./Favorites.css";


export default function Favorites({addToFavorites, removeFromFavorites, favorites}) {
    const [showCart, setShowCart] = useState(false); // модальное окно
    const [showAlert, setShowAlert] = useState(null);
    const toggleShow = () => setShowCart(!showCart);
    const hideAlert = () => setShowAlert(null);

    return (
        <main className="container">
            <FavoritesIcon length={favorites.length} toggleShow={toggleShow} />
            {showAlert && <ShowAlert text={showAlert} hideAlert={hideAlert} />}
            <RecipeList addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites} favorites={favorites}/>
            {/*{showCart ? (*/}
            {/* <FavList items={favorites} toggleShow={toggleShow} removeFromCart={removeFromCart} />*/}
            {/*):( */}
            {/*    null*/}
            {/*)}*/}
        </main>
    );
}
