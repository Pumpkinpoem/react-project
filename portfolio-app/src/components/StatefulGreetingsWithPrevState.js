import React from "react";

class StatefulGreetingsWithPrevState extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "hello!",
            buttonText: "exit",
            count: 0,
        };
    }

    handleClick = () => {
        this.setState((prevState, prevProps) => {
            console.log("Previous State: ", prevState);
            console.log("Previous Props: ", prevProps);
            return {
                introduction: prevState.introduction === "Hello" ? "Goodbye" : "Hello",
                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit",

            }
        })
    }


    incrementCount = () => {
        this.setState((prevState, prevProp) => ({
            count: prevState.count + 1
        }));
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.name} {this.props.greeting}</h1>
                <button onClick={this.handleClick}>{this.state.buttonText}</button>
                <button onClick={this.incrementCount}>Increment</button>
                <p>Count: {this.state.count}</p>
            </div>
        )
    }
}

export default StatefulGreetingsWithPrevState;
