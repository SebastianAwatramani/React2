import React, {Component} from 'react';
import './App.css';

class App extends Component {
    render() {
        // return (
        //   <div className="App">
        //     <h1> Hi, I am a react app.  Wait holy shit, in real time?</h1>
        //   </div>
        // );

        return React.createElement('div', 'null',
            React.createElement('h1', {className: 'App'}, "does this work now?"),
            'Hi, I\'m a React App');

    }
}

export default App;
