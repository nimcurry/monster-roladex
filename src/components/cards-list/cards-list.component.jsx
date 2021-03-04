import React, {  } from 'react';
import './cards-list.style.css';
import {Card} from  '../card/card.component'
//props: any parameter that we pass into card-list in app.js
//children: property object that gets passsed between the anguler brackets <> children</>

export const CardsList = (props)=> (
    //console.log(props);
    <div className="cards-list">
        {
            props.monsters.map(
                /* "monster" is a prop passed from the card component */
            monster=>(<Card key={monster.id} monster={monster}/>)
          )
        }
    </div>
);