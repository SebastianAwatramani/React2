import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            {name: "Sebastian", age: 35},
            {name: "Tina", age: 30},
            {name: "Peter", age: 55}
        ]
    }
    render() {
        return (
          <div className="App">
            <h1> Hi, I am a react app.</h1>
              <p>This is really working</p>
              <button>Switch Name</button>
              <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age} />
              <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age} />
              <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age}>My Hobbies: Racing</Person>
          </div>
        );

        // return React.createElement('div', 'null',
        //     React.createElement('h1', {className: 'App'}, "does this work now?"),
        //     'Hi, I\'m a React App');

    }
}

export default App;
