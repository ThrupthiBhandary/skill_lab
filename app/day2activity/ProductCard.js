export default function ProductCard({ name, price, inStock }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", width: "200px" }}>
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>

      {!inStock && <p>Out of Stock</p>}
    </div>
  );
}