import { useTheme } from "../context/ThemeContext.jsx";
import UserCard from "./UserCard.jsx";
import abanobImg from "../assets/images/abanob.webp";
import omarImg from "../assets/images/Omar.avif"


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
     { name: " Ahmed Samy", role: "BE Intern" },
    { name: "Mohammed", role: "Delivery Manager" },



];
  return (
    <div className={`dashboard ${theme}`}>
      <div className="cards-grid">
        {team.map((member, i) => (
          <UserCard key={i} {...member} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
