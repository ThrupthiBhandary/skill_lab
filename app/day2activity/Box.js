export default function Box({ color, size }) {
  return (
    <div
      style={{
        backgroundColor: color,
        width: size,
        height: size
      }}
    ></div>
  );
}