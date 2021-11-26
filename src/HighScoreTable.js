import React from "react";

const HighScoreTable = (props) =>{

    return (
      <table>
        <thead></thead>
        <caption className="Caption">
          <h3>
            High scores: <span>{props.country.name}</span>
          </h3>
        </caption>

        <tbody>
          {props.country.scores.map((player, index) => {
            return (
              <tr key={index}>
                <td className="TableData">{player.n}</td>
                <td className="TableData">{player.s}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
};


export default HighScoreTable;

