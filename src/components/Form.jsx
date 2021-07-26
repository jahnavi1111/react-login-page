import React, { useState } from "react";
import Input from "./Input";


function Form(props) {
    
// let [buttonColor, setButtonColor] = useState("white");


// function changeToBlack() {
//     setButtonColor("black");
// }
// function changeToWhite() {
//     setButtonColor("white");
// }
    
let [isMousedOver, setMouseOver] = useState(false);
let [headingText, setHeadingText] = useState("");
let [name, setName] = useState("");

function handleChange(event) {
    setName(event.target.value);
}

function handleClick(event) {
    setHeadingText(name);
    event.preventDefault();
}
function handleMouseOver() {
    setMouseOver(true);
}
function handleMouseOut() {
    setMouseOver(false);
}
    return (<form className="form" onSubmit={handleClick} >
    <h1>Hello {headingText} </h1>
    <input onChange={handleChange} type="text" placeholder="What's your name?" value={name}/>
    <Input type="text" placeholder="Username" />
    <Input type="password" placeholder="Password" />

    {(!props.isRegistered) && <Input type="password" placeholder="Confirm Password" />}

    <button type="submit" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{backgroundColor: isMousedOver? "black":"white"}}>
    {props.isRegistered? "Login": "Register"}
    </button>

    </form>);
}

export default Form;
