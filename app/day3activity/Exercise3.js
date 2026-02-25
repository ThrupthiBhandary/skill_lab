'use client';

import { useState } from 'react';
export default function Exercise3() {
    const [show, setShow] = useState(false);
    const[count,setCount]=useState(0);
    function msgSet() {
        setShow(!show);
    }
    
    return (
        <div>
            <button onClick={msgSet} style={{ cursor: 'pointer' }}>{show ? 'Welcome Participants!' : 'click to show message'}</button>
            <br/>
        <button onClick={()=>setCount(count+1)}>Likes:{count}</button>
        </div>
    )
}