import React, {useState} from "react";
import style from './recipe.module.css';
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Recipe = ({title, image, mealType, ingredients }) => {
    const getRecipe = () => {
        return (
          <React.Fragment>
            <div className='cont_tabs'>
                <p className="cont_preparation">Preparation</p>
            </div>
            <div className='cont_text_det_preparation'>
                <div className='cont_info_preparation'>
                    {ingredients.map(ingredient => (
                        <p>{ingredient.text}</p>))}
                </div>
            </div>
          </React.Fragment>  
        )
    }
    const [isOpen, setIsOpen] = useState();
    return(
            <div className="cont_central">
                <div className={`cont_modal ${isOpen ? "cont_modal_active" : ""}`}>
                    <div className='cont_photo'>
                        <div className='cont_img_back'><img className={style.image} src={image} alt=""></img><h3>{title}</h3><p>{mealType}</p></div>
                        <div className='cont_detalles'>   
                        </div>
                    </div>
                    <div className='cont_text_ingredients'>
                        <div className='cont_over_hidden'>
                            {getRecipe()}
                        </div>
                        <div className='cont_btn_open_dets' onClick={() => {setIsOpen(!isOpen)}} >            
                        <a href="#e"> <div className="cont_btn"> <FontAwesomeIcon icon={faAngleLeft}  /></div></a>
                        
                        </div>
                    </div>
                </div>
            </div>
    );
    
}
export default Recipe;