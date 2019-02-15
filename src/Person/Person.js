//Creating a component

//import react

import React from 'react';

const person = (props) => {
    return (
        <div>
            {/*Receiving click() method from App component*/}
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
        </div>

    )

};


export default person;
