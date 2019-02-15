import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'


class App extends Component {
    state = {
        persons: [
            {name: "Sebastian", age: 35},
            {name: "Tina", age: 30},
            {name: "Peter", age: 55}
        ],
        showPersons: false
    };

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {name: newName, age: 35},
                {name: "Tina", age: 30},
                {name: "Peter", age: 42}
            ]
        })
    };

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: "Sebbbbastian!!!", age: 35},
                {name: event.target.value, age: 30},
                {name: "Peter", age: 42}
            ]
        })
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow}); //Sets showPersons to opposite of whatever it is.  Pretty cool method.
    };

    render() {

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };
        //Using ternaries for conditional rendering can get cumbersome in large projects.  This method here separates the logic out
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {/*Anonymous function I pass to map method is executed on every item in the array*/}
                    {this.state.persons.map(person => {
                        return <Person
                            name={person.name}
                            age={person.age}
                        />
                    })}
                </div>
            );
        }
        return (
            <div className="App">
                <h1> Hi, I am a react app.</h1>
                <p>This is really working</p>
                <button style={style}
                        onClick={this.togglePersonsHandler}>Switch Name
                </button>
                {persons}
            </div>
        );

        // return React.createElement('div', 'null',
        //     React.createElement('h1', {className: 'App'}, "does this work now?"),
        //     'Hi, I\'m a React App');

    }
}

export default App;
