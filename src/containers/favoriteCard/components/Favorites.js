import { useState } from "react";
import FavoritesIcon from "./FavoritesIcon";
import App from "../../recipeCard/App";
import FavList from './FavList';
import ShowAlert from "./ShowAlert";
import "./Favorites.css";


export default function Favorites() {
    const [cartItems, setCartItems] = useState([]);
    const [showCart, setShowCart] = useState(false); // модальное окно
    const [showAlert, setShowAlert] = useState(null);

    const appendToCart = (item, quantity = 1) => {
        // нужно проверить, нет ли уже такого рецепта в избранном
        const itemIndex = cartItems.findIndex(value => value.id === item.id);
        if (itemIndex < 0) { // такого рецепта еще нет
            const newItem = {
                ...item,
                quantity: quantity
            };
            setCartItems([...cartItems, newItem]);
        } else { // такой рецепт уже есть
            const newItem = {
                ...cartItems[itemIndex],
                quantity: cartItems[itemIndex].quantity + quantity
            };
            const newCart = cartItems.slice(); // копия массива cartItems
            newCart.splice(itemIndex, 1, newItem);
            setCartItems(newCart);
        }
        setShowAlert(item.name + ' добавлен в избранное');
    };
    const toggleShow = () => setShowCart(!showCart);
    const removeFromCart = (id) => {
        const newCart = cartItems.filter(item => item.id !== id);
        setCartItems(newCart);
    };

    const hideAlert = () => setShowAlert(null);

    return (
        <main className="container">
            <FavoritesIcon length={cartItems.length} toggleShow={toggleShow} />
            {showAlert && <ShowAlert text={showAlert} hideAlert={hideAlert} />}
            <App appendToCart={appendToCart} />
            {showCart ? (
             <FavList items={cartItems} toggleShow={toggleShow} removeFromCart={removeFromCart} /> 
            ):( 
                null
            )}
        </main>
    );
}
