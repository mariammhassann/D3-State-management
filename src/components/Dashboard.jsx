import { useTheme } from "../context/ThemeContext";
import UserCard from "./UserCard";
import abanobImg from "../assets/images/abanob.webp";
import omarImg from "../assets/images/omar.avif";

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

  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>My Dashboard</h2>
        <ul>
          <li>🏠 Home</li>
          <li>👤 Users</li>
          <li>⚙️ Settings</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="topbar">
          <h1>Welcome, Mariam 👋</h1>
        </header>

        {/* Stats Section */}
        <section className="cards">
          <div className="card">
            <div className="card-icon">👥</div>
            <h3>Total Users</h3>
            <p className="card-value">1,250</p>
          </div>
          <div className="card">
            <div className="card-icon">📦</div>
            <h3>Projects</h3>
            <p className="card-value">15</p>
          </div>
          <div className="card">
            <div className="card-icon">📈</div>
            <h3>Growth</h3>
            <p className="card-value">+12%</p>
          </div>
        </section>

        {/* Team Section */}
        <h2 className="section-title">Our Team</h2>
        <div className={`dashboard ${theme}`}>
          <div className="cards-grid">
            {team.map((member, i) => (
              <UserCard key={i} {...member} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
