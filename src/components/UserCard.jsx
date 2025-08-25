import "./UserCard.css";
import defaultAvatar from "../assets/images/default-avatar.jpg";

function UserCard({ name, role, image, cardColor }) {
  return (
    <div className={`user-card ${cardColor}`}>
      <img
        src={image || defaultAvatar}
        alt={name}
        className="user-image"
      />
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
}

export default UserCard;
