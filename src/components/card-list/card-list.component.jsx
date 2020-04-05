import React from 'react';

import {Card} from '../card/card.component';

import './card-list.style.css';

export const CardList = props => (
    <div className='card-list'>
        {
        props.gitUsers.map(gitUser => (<Card key={gitUser.id} gitUsers = {gitUser} />))
      }
    </div>
);