'use client';
import {useState} from "react"
export default function Exercise2()
{
    const[count,setCount]=useState(0);
    function countIncrement(){
 (setCount(prev=>prev+1));
    }
       
    
    return(
        <div>
            <h6 onClick={countIncrement} style={{cursor:'pointer'}}>You have clicked {count} times</h6>
        </div>
    )
}