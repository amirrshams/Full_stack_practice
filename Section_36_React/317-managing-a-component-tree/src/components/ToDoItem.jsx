import React from "react";
import { useState } from "react";

function ToDoItem(props){

    const [isClicked, setIsClicked] = useState(false)

    function handleClick(){
        setIsClicked(prevItem =>{
            return !prevItem;
    })
    }

    return  <div onClick={() => {
            props.onChecked(props.id)}}
            >
                <li>{props.text}</li>
            </div>;
}



export default ToDoItem;