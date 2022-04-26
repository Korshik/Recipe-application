/* eslint-disable no-undef */
import React, {useState} from "react";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from './App.scss'
// import { styled } from "@material-ui/core";
import styled from 'styled-components';


const StyledCard = styled.div`
top: auto;
margin-top: 60px;
margin-right: 15px;
margin-left: 15px;
}`

const Recipe = ({title, image, ingredients, id, addToFavorites, removeFromFavorites, isFavorite}) => {
    
    const getRecipe = () => {
        
        return (
          <React.Fragment>
            <div className={'recipe_hidden_header'}>
                <p className={'hidden_header_text'}>Preparation</p>
            </div>
                <div className={'recipe_hidden_info'}>
                    {ingredients.map(ingredient => (
                        <p>{ingredient.text}</p>))}
                </div>
          </React.Fragment>  
        )
    }
    const [isOpen, setIsOpen] = useState();
    
   
    return(
            < StyledCard className={'recipe_main_container'}>
                <div className={`recipe_container_modal ${isOpen ? "recipe_container_modal_active" : ""}`}>
                    <div className={'recipe_container_image'}>
                        <div className={'recipe_image'}><img className={style.image} src={image} alt=""></img><h3>{title}</h3>
                        { isFavorite
                        ?
                        <button className='favourite_btn' onClick={() => removeFromFavorites ({id},-1) }>-</button>
                        :
                        <button className='favourite_btn' onClick={() => addToFavorites({id}, 1) }>+</button>
                        }
                        
                        </div>
                    </div>
                    <div className={'recipe_text_container'}>
                        <div className={'recipe_hidden_container'}>
                        {getRecipe()}
                        </div>
                        <div className='cont_btn_open_dets' onClick={() => {setIsOpen(!isOpen)}} >            
                        <a href="#e"> <div className="cont_btn"> <FontAwesomeIcon icon={faAngleLeft}  /></div></a>
                        </div>   
                    </div>
                </div>
            </StyledCard>
    );
}
export default Recipe;
export   {StyledCard};