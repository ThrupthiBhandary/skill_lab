import Child from "./Child";

export default function Parent() {
  function handleClick() {
    alert("Parent triggered");
  }

  return (
    <div>
      <h2>Parent Component</h2>
      <Child onButtonClick={handleClick} />
    </div>
  );
}