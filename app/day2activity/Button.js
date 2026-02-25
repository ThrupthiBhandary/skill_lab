export default function Button({ label, onClick }) {
  function handleClick() {
    console.log("Button clicked");
    if (onClick) {
      onClick();
    }
  }

  return (
    <button onClick={handleClick}>
      {label}
    </button>
  );
}