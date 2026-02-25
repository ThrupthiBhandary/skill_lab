'use client';
import { useState } from 'react';
export default function Exercise1() {
    const [text, setText] = useState('');
    const[charCount,setCharCount]=useState(0);
    function calculateChar()
    {let len=text.length;
    console.log(len)
       setCharCount(len);
    }
    return (
        <div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}style={{border:'1px solid white'}}></input>
            <button onClick={calculateChar} style={{border:'2px solid white',cursor:'pointer'}}>check</button>
            <h6>total character:{charCount}</h6>
            
        </div>
    )
}