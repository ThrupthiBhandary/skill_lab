export default function Child({ onButtonClick }) {
  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={onButtonClick}>
        Click Me
      </button>
    </div>
  );
}