import "./App.css";
import Header from "./components/Header";

import bands from "./bands";
import Headliners from "./components/Headliners";
import SmallerActs from "./components/SmallerActs";
import Unknowns from "./components/Unknowns";

function App() {
  return (
    <body className="background">
      <Header></Header>
      <div className="days">
        <Headliners />
        <SmallerActs />
        <Unknowns />
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
