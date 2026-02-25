export default function ListRender() {
  const users = ["John", "Jane", "Alice"];

  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
}