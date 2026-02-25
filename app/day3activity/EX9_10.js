'use client'
import {useState} from 'react';
export default function Ex9_10()
{
    const[status,setStatus] =useState(false);
    const[count,setCount]=useState(0);
    function changeStatus()
    {
        setStatus(!status)
    }
    return(<div>
        <button onClick={changeStatus} style={{ border: '1px solid purple' }}>{status?"Off":"ON"}</button>
        <div><h6>{count}</h6>
            <button onClick={()=>setCount(prev=>prev+1)} style={{ border: '1px solid purple' }}>Increase</button>
            <button onClick={()=>setCount(prev=>prev-1)} style={{ border: '1px solid purple' }}>Decrease</button>
            <button onClick={()=>setCount(0)} style={{ border: '1px solid purple' }}>Reset</button>
        </div>
    </div>
    )
}