
"use client"
import { useState} from 'react';
export default function page()
{
    const[text,setText]=useState('hello');
    const[count,setCount]=useState(0);
    const[color,setColor]=useState('white');
    function changeText()
    {
        setText("LIKE");
    }
    function changeColor()
    {
        setTxt('hii');
        setColor('pink');
    }
    function countIncrement()
    {
        setCount((prev=>prev+1))
    }
    return(
        <div>
           <h2 onClick={changeText}>{text}</h2> 
           <button onClick={countIncrement} style={{color:`${color}`}}>Like:{count}</button>
        </div>
    )
}