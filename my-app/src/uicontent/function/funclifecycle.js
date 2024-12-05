import React, {useState} from 'react';
export default function Funclifecycle(){
    const [text,setText] = useState(1)

    const handleButton1=()=>{
        setText(text => text+1)
    }
    const handleButton2=()=>{
        setText(text => text+2)
    }
    const handleButton3=()=>{
        setText(text => text-2)
    }
    const handleButton4=()=>{
        setText(text => text-1)
    }

    // const [text,setText] =useState("hii")
    // const handleButton=()=>{
    //     setText("hello")
    // }
    return(
        <>
        <h1>{text}</h1>
        <button onClick={handleButton1}>+1</button>
        <button onClick={handleButton2}>+2</button>
        <button onClick={handleButton3}>-2</button>
        <button onClick={handleButton4}>-1</button>
        </>
        // <div>
        //     <h1>{text}</h1>
        //     <button onClick={handleButton}>click me</button>
        // </div>
    )
}