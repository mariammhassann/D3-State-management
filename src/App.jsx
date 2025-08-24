import Dashboard from "./components/Dashboard.jsx";
import ThemeToggleButton from "./components/ThemeToggleButton.jsx";

function App() {

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Team Dashboard</h1>
      <div style={{ display: "flex", justifyContent: "center", marginBottom:15 }}>
        <ThemeToggleButton />
      </div>
      <Dashboard />
    </div>
  );
}


export default App;

