import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <body
        className="background"
        // style={{ backgroundImage: `url(${background})` }}
      >
        <Header></Header>
        <div className="days">
          <h1>Headliner</h1>
          <h2>Next acts</h2>
          <h3>Smaller acts</h3>
          <h4>Totally unknown</h4>
        </div>
        <div className="days">
          <h1>Headliner</h1>
          <h2>Next acts</h2>
          <h3>Smaller acts</h3>
          <h4>Totally unknown</h4>
        </div>
        <div className="days">
          <h1>Headliner</h1>
          <h2>Next acts</h2>
          <h3>Smaller acts</h3>
          <h4>Totally unknown</h4>
        </div>
      </body>
    </div>
  );
}

export default App;
