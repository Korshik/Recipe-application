import './FavList.css';
import FavItem from './FavItem';

export default function FavList(props, fav) {
    
    return (
        <div className="cart-modal">
            <i className="material-icons cart-modal-close" onClick={props.toggleShow}>
                close
            </i>
            <h5 className="red-text text-lighten-1">Ваши рецепты</h5>
                <div className='favorite-container'>
                    <div className='favorite-container-modal'>
                    {fav.map(favorite => <FavItem key={favorite.id} {...favorite} />)}
                    </div>
                </div>
        </div> 
)}