"use client";
export default function Button(){
    function clicked(){
        return (
            <div>
            <h4>button clicked</h4>
            </div>
        )
    }
    return(
    <div>
<button onClick={clicked}>click me </button>
    </div>)
}