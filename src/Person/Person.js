//Creating a component

//import react

import React from 'react';
import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            {/*Receiving click() method from App component*/}
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>

    )

};


export default person;
