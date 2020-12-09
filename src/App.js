import './App.css';
import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        //to keep state context:
        //this.increment = this.increment.bind(this)
        //or use arrow function for increment or inside onClick
    }

    increment = () => {
        const currCount = this.state.count;
        const newCount = currCount + 1;
        this.setState({ count: newCount });
    };

    decrement() {
        const currCount = this.state.count;
        const newCount = currCount - 1;
        this.setState({ count: newCount });
    }

    render() {
        return (
            <div className="App">
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>+</button>
                <button
                    onClick={() => {
                        this.decrement();
                    }}>
                    -
                </button>
            </div>
        );
    }
}

export default App;
