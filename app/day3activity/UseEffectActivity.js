"use client";
import { useEffect, useState } from "react";

export default function Page() {
  //  1  Log When Component Loads
  useEffect(() => {
    console.log("Component Loaded");
  }, []);

  //2  Update Document Title
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  // 3  Fetch Data on Mount
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);


  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>useEffect Activities</h1>

     
      <h2>1) Log on Mount</h2>
      <p>Open console to see "Component Loaded"</p>

      <hr />

      <h2>2) Update Document Title</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <hr />

      <h2>3) Fetch Users</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map((u) => (
            <li key={u.id}>{u.name}</li>
          ))}
        </ul>
      )}

      <hr />

    
      <h2>4) Timer</h2>
      <p>Seconds: {seconds}</p>
    </div>
  );
}
