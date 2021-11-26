import React from "react";

const WorldWideTable = (props) => {
    return (
        <tr >
            <td className="TableData">{props.country.n}</td>
            <td className="TableData">{props.country.s}</td>
        </tr>
    );
};

export default WorldWideTable;