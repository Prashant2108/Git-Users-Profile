import React from 'react';

import './card.style.css';
import Popup from '../modal/modal-component';

let show = -1;

function showPopup(i) {
        show = i;
     };

function closePopup(){
    show = -1;
};

// function startPopup(f,i) {
//     show = f
//     showPopup = i;
// }

export const Card = props => (
    <div>
    
    {show === props.gitUsers.id &&
        <Popup  text = {props.gitUsers.login}
                closePopup = {closePopup}
        />
        }
    <div className = 'card-container' align="center">
        <img alt="user" src={props.gitUsers.avatar_url} width="180" height="180"/>
        <h1>{props.gitUsers.login}</h1>
        <button onClick={() => showPopup(props.gitUsers.id)}>Details</button>       
    </div>
 
    </div>
);