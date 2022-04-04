import React, {useState} from "react";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from './App.css'
// import { styled } from "@material-ui/core";
import styled from 'styled-components';

// import {Button} from '../favorites/index.js';

const StyledCard = styled.div`
top: auto;
margin-top: 60px;
margin-right: 15px;
margin-left: 15px;
}`

const Recipe = ({title, image, ingredients }) => {
    
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
            <StyledCard div className={'recipe_main_container'}>
                <div className={`recipe_container_modal ${isOpen ? "recipe_container_modal_active" : ""}`}>
                    <div className={'recipe_container_image'}>
                        <div className={'recipe_image'}><img className={style.image} src={image} alt=""></img><h3>{title}</h3>
                        {/* <Button></Button> */}
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