import './App.css';
import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0, inputNum: 0 };
        //to keep state context:
        //this.increment = this.increment.bind(this)
        //or use arrow function for increment or inside onClick
    }

    increment = () => {
        //const addAmount = prompt('How much do you want to add?');
        const currCount = this.state.count;
        const newCount = currCount + this.state.inputNum;
        this.setState({ count: newCount });
    };

    decrement() {
        //const subAmount = prompt('How much do you want to add?');
        const currCount = this.state.count;
        const newCount = currCount - this.state.inputNum;
        this.setState({ count: newCount });
    }

    changeInput = (evt) => {
        let num = parseInt(evt.target.value) || 0;
        //no NaN, but also can't backspace
        this.setState({ inputNum: num });
    };

    render() {
        return (
            <div className="App">
                <h1>{this.state.count}</h1>
                <input
                    value={this.state.inputNum}
                    onChange={this.changeInput}
                />
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
