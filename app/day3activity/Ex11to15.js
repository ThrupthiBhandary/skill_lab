"use client";
import { useState } from "react";

export default function Page() {
  // 11 To-Do 
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // 12 Add to Cart Quantity
  const [qty, setQty] = useState(0);

  // 13 Theme Toggle
  const [dark, setDark] = useState(false);

  // 14  Quiz
  const [result, setResult] = useState("");

  // 15 Multiple Counters
  const [c1, setC1] = useState(0);
  const [c2, setC2] = useState(0);
  const [c3, setC3] = useState(0);

  function addTask() {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  }

  return (
    <div>
      <h1>Level 3 Tasks</h1>

      
      <h2>11) To-Do List</h2>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>

      <hr />

      <h2>12) Add to Cart</h2>
      <p>Product name</p>
      <button onClick={() => setQty(qty + 1)}>+</button>
      <span>{qty}</span>
      <button onClick={() => qty > 0 && setQty(qty - 1)}>-</button>

      <hr />

      <h2>13) Theme Toggle</h2>
      <p>{dark ? "Dark mode" : "Light mode"}</p>
      <button onClick={() => setDark(!dark)}>Toggle</button>

      <hr />

   
      <h2>14) Simple Quiz</h2>
      <p>Which is a JS framework?</p>
      <button onClick={() => setResult("Wrong")}>Django</button>
      <button onClick={() => setResult("Correct")}>Next.js</button>
      <p>{result}</p>

      <hr />


      <h2>15) Multiple Counters</h2>

      <p>Counter 1: {c1}</p>
      <button onClick={() => setC1(c1 + 1)}>+</button>

      <p>Counter 2: {c2}</p>
      <button onClick={() => setC2(c2 + 1)}>+</button>

      <p>Counter 3: {c3}</p>
      <button onClick={() => setC3(c3 + 1)}>+</button>
    </div>
  );
}
