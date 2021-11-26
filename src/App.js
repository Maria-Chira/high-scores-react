import React, { useState } from "react";
import "./App.css";
import Button from "./Button";
import HighScoreTable from "./HighScoreTable";
import allCountryScores from "./scores.js";
import WorldWideTable from "./WorldWideTable";

//sorting by name
let sortedCountries = allCountryScores.sort((country1, country2) => {
  if (country1.name < country2.name) {
    return -1;
  } else if (country1.name > country2.name) {
    return 1;
  } else {
    return 0;
  }
});

//sorting descending by score
let sortedDescending = sortedCountries.map((country) => {
  return {
    name: country.name,
    scores: country.scores.sort((player1, player2) => player2.s - player1.s),
  };
});



function App() {
  let [ascending, setAscending] = useState(false);
  let [countries, setCountries] = useState(sortedDescending);
  let [name, setName] = useState("Sort Ascending");

  //sorting adcending by score
  function ascendingScores() {
    let sortedAscending = sortedCountries.map((country) =>  {
      return {
        name: country.name,
        scores: country.scores.sort((player1, player2) => player1.s - player2.s ),
      };
    });
    setCountries(sortedAscending);
  }

  //sorting descending by score
  function descendingScores() {
    let sortedDescending = sortedCountries.map((country) => {
      return {
        name: country.name,
        scores: country.scores.sort((player1, player2) => player2.s - player1.s),
      };
    });
    setCountries(sortedDescending);
  }

  //function for event listener onClick for button
  function handleBtnClick() {
    if (ascending === true) {
      descendingScores();
      setName("Sort Ascending");
    } else {
      ascendingScores();
      setName("Sort Descending");
    }
    setAscending(!ascending);
  }

  //displaying only the scores in a separate array in order to sort it descending.
  function DisplayAllScores(){
    let AllScoresArray = [];
    allCountryScores.map((country) =>
      country.scores.map((score) => AllScoresArray.push(score)));
      const sortedAllScoresArray = AllScoresArray.sort((player1, player2) => player2.s - player1.s);
      return sortedAllScoresArray;
  }
  const AllScoresArray = DisplayAllScores();
  return (
    <div className="App">
      <div>
        <table>
          <thead></thead>
          <caption className="MainHeading">
            <h1>World Wide Scores</h1>
          </caption>
          <tbody>
            {AllScoresArray.map((score, index) => (
              <WorldWideTable key={index} country={score} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="CountryScores">
        <h1 className="MainHeading">High Scores Per Country</h1>
        <Button click={handleBtnClick} name={name} />
        {countries.map((country, index) => (
          <HighScoreTable key={index} country={country} />
        ))}
      </div>
    </div>
  );
}

export default App;
