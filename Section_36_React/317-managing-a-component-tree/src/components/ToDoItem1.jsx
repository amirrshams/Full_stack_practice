import React from "react";
import { useState } from "react";

function ToDoItem1(props){

    const [isClicked, setIsClicked] = useState(false)

    function handleClick(){
        setIsClicked(prevItem =>{
            return !prevItem;
    })
    }

    return <li style={{textDecoration: isClicked ? "line-through" : 'none' }} onClick={handleClick}>{props.text}</li>;
}



export default ToDoItem1;