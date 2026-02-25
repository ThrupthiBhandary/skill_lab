'use client';
import { useState } from 'react';
export default function Ex7() {
    const [input, setInput] = useState(0);
    const[status,setStatus]=useState(false);
    const[password,setPassword]=useState('');
   
    function ageHandler()
    {
        const age=input;
        if(age>=18)
        {
            setStatus(true)
        }
        
    }
    return (

        < div >
            <input type="Number" value={input} onChange={(e)=>setInput(e.target.value)} style={{ border: '1px solid white' }}></input>
            <button onClick={ageHandler} style={{ border: '1px solid white' }}>check Eligibility</button>
            {status&&<h6>Congartulations you are elligible</h6>}
             {!status&&<h6>You are not elligible</h6>}

             <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}style={{ border: '1px solid white' }}></input>
            

        </div >
    )
}