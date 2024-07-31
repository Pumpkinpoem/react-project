import React from "react";

class StatefulGreeting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "hello!",
            buttonText: "exit",
        };
    }

    handleClick() {
        this.setState({
            introduction: "goodbye",
            buttonText: this.state.buttonText === "exit" ? "enter" : "exit",
        });
        console.log(this.state.introduction);
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.name} {this.props.greeting}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </div>
        )
    }

}

export default StatefulGreeting