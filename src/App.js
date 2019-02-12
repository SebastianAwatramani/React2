import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    render() {
        return (
          <div className="App">
            <h1> Hi, I am a react app.</h1>
              <p>This is really working</p>
              <Person name = "Sebastian" age = "35"/>
              <Person name = "Tina" age = "30" />
              <Person name = "Ginger" age = "22">My Hobbies: Racing</Person>
          </div>
        );

        // return React.createElement('div', 'null',
        //     React.createElement('h1', {className: 'App'}, "does this work now?"),
        //     'Hi, I\'m a React App');

    }
}

export default App;
