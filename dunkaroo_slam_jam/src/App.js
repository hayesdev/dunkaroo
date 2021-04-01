import "./App.css";
import Header from "./components/Header";

import bands from "./bands";
import Headliners from "./components/Headliners";

function App() {
  return (
    <body className="background">
      <Header></Header>
      <div className="days">
        <Headliners />
        <h2>Smaller acts</h2>
        <h3>Totally unknown</h3>
      </div>
      <div className="days">
        <h1>Headliners</h1>
        <h2>Smaller acts</h2>
        <h3>Totally unknown</h3>
      </div>
      <div className="days">
        <h1>Headliners</h1>
        <h2>Smaller acts</h2>
        <h3>Totally unknown</h3>
      </div>
    </body>
  );
}

export default App;
