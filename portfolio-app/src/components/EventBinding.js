import React from "react";

class EventBinding extends React.Component {

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
            
        });
        console.log(this);
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.name} {this.props.greeting}</h1>
                <button onClick={this.handleClick.bind(this)}>
                    {this.state.buttonText}
                </button>
            </div>
        )
    }

}

export default EventBinding