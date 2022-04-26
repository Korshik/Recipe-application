import React from "react";
import {faBookmark} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './FavoritesIcon.scss'
export default function FavoritesIcon (props) {
    return (
        <div className="favorites-icon" onClick={props.toggleShow}>
            <FontAwesomeIcon icon={faBookmark} size="sm"/>
            {props.length ? <span>{props.length}</span> : null}
        </div>
    );
}
