import React, {useState} from 'react';
export default function Funclifecycle(){
    const [text,setText] =useState("hii")
    const handleButton=()=>{
        setText("hello")
    }
    return(
        <div>
            <h1>{text}</h1>
            <button onClick={handleButton}>click me</button>
        </div>
    );
}