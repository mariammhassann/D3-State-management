import { useTheme } from "../context/ThemeContext.jsx";
import UserCard from "./UserCard.jsx";
import abanobImg from "../assets/images/abanob.webp";
import omarImg from "../assets/images/Omar.avif";
import "./Dashboard.css"; // عشان نكتب CSS للـ widgets

function Dashboard() {
  const { theme } = useTheme();

  const team = [
    { name: "Mariam Ashraf", role: "Software Engineer" },
    { name: "Abanob", role: "UI/UX Designer", image: abanobImg },
    { name: "Omar", role: "Backend Developer", image: omarImg },
    { name: "Sameh", role: "Customer Relations" },
    { name: "Mohammed", role: "Marketing Manager" },
    { name: "Mohamed Ahmed", role: "FE Intern" },
    { name: "Mohamed Samy", role: "Intern" },
    { name: "Ahmed Samy", role: "BE Intern" },
    { name: "Mohammed", role: "Delivery Manager" },
  ];

  const colors = ["bg-blue", "bg-purple", "bg-green", "bg-orange", "bg-pink"];

  return (
    <div className={`dashboard ${theme}`}>

      {/* 🔹 Statistics Widgets */}
      <div className="widgets-grid">
        <div className="widget widget-color">
          <h3>Total Members</h3>
          <p>{team.length}</p>
        </div>
    
      </div>

      {/* 🔹 Team Cards */}
      <div className="cards-grid">
        {team.map((member, i) => (
          <UserCard key={i} {...member} cardColor={colors[i % colors.length]} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
