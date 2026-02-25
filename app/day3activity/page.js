
'use client';
import Link from 'next/link';
import { useState } from "react";
import Exercise1 from './Exercise1';
import Exercise2 from './Exercise2';
import Exercise3 from './Exercise3';
import Level2Ex6 from './Level2Ex6';
import Ex7 from './Ex7';
import Ex9_10 from './EX9_10'

export default function page() {

    const [color, setColor] = useState('pink');
    function changeColor() {
        if (color == "pink") {
            setColor("black")

        }
        else {
            setColor("pink")
        }
    }

        return (
            <div style={{ backgroundColor: `${color}` }}>
                <Exercise1 />
                <Exercise2 />
                <Exercise3 />
                <h6 onClick={changeColor} style={{cursor:'pointer'}}>Change backgroundColor</h6>
                <Level2Ex6/>
                <Ex7/>
                <Ex9_10/>
            </div>
        )
    }