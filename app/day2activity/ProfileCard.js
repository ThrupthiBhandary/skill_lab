export default function ProfileCard({ name, image, role, isOnline }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        borderRadius: "10px",
        width: "220px",
        textAlign: "center",
        position: "relative"
      }}
    >
      {/* Status Dot */}
      <span
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          backgroundColor: isOnline ? "green" : "gray"
        }}
      ></span>

      <img
        src={image}
        alt={name}
        style={{ width: "80px", height: "80px", borderRadius: "50%" }}
      />

      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}