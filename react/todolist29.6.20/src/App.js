import React, { Component } from "react";

class App extends Component {

    state = {
       todos: ["Learn react"],
       inputValue: ""
    }

    render() {
        return (
            <div>
                <input type="text"
                    value={this.state.inputValue}
                    onChange={event => this.setState({inputValue: event.target.value})}
                    onKeyUp={event => {
                        if(event.keyCode === 13){
                            this.setState({
                                todos: [this.state.inputValue, ...this.state.todos]
                            })
                        }
                    }}
                />
                {this.state.todos.map(todoText => (
                    <li key={todoText}>{todoText}</li>
                ))}
            </div>
        );
    };
};

export default App;