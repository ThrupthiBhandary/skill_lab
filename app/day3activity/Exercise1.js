'use client';
import { useState } from 'react';
export default function Exercise1() {
    const [text, setText] = useState('');
    const[name,setName]=useState('');
    function nameSet()
    {
        setName(text);
    }
    return (
        <div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}style={{border:'1px solid pink'}}></input>
            <button onClick={nameSet} style={{border:'2px solid white',cursor:'pointer'}}>set</button>
            <h6 > hello,{name}</h6>
        </div>
    )
}