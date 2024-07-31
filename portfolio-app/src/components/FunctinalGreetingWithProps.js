import React from "react";

const FunctionalGreeting = (props) => {
    console.log(props);
    return <h1>hello,  {props.name} {props.looks} {props.age} {props.greeting}</h1>;
};

export default FunctionalGreeting;