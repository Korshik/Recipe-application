import { useState } from 'react';
import Recipe from '../../recipeCard/Recipe';

const FavItem = ({title, image, ingredients },{props}) => {
    

    const [fav] = useState([]);
    return (
        <div className='favorite-container'>
            <div className='recipe_container_image'>
                <div className='recipe_image'><img className={image} src={image} alt=""></img>
                 </div>
            </div>
            <div className='favorite-text-container'>
                <p className='favorite-header'><h3>{title}</h3></p>
                <p className='favorite-text'>{ingredients.text}</p>
                <div><i className="material-icons cart-item-delete" onClick={() => props.removeFromCart(props.id)}>close</i></div>
            </div>
         
            {fav.map(favorite => (
            <Recipe 
            key={favorite.recipe.label}
            title={favorite.recipe.label} 
            image={favorite.recipe.image}
            ingredients={favorite.recipe.ingredients}
            
        /> 
        ))}
       </div>
    );
}
export default FavItem;