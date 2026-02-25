export default function BookCard({ title, author }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "12px",
        borderRadius: "8px",
        marginBottom: "10px",
        width: "250px"
      }}
    >
      <h3>Title: {title}</h3>
      <p>Author: {author}</p>
    </div>
  );
}