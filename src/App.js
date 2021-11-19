import "./App.css";
import HighScoreTable from "./HighScoreTable";
import allCountryScores from "./scores.js";


function App() {
  return (
    <div className="App">
      <h1 className="MainHeading">High Scores Per Country</h1>
      {allCountryScores.map((country, index) => (
        <HighScoreTable key={index} country={country} />
      ))}
    </div>
  );
}

export default App;
