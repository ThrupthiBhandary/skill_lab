import ProfileCard from "./ProfileCard";

export default function ProfilecUsage() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <ProfileCard
        name="John"
        role="Frontend Developer"
        image="https://www.pngmart.com/files/23/Profile-PNG-Photo.png"
        isOnline={true}
      />

      <ProfileCard
        name="keerthi"
        role="UI Designer"
        image="https://www.pngmart.com/files/23/Profile-PNG-Photo.png"
        isOnline={false}
      />
    </div>
  );
}