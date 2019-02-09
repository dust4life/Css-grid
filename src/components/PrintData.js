import React from "react";

// style
import { Title, CellTitle } from "css-grid/style";

function PrintData(props) {
  return (
    <div>
      <Title>
        {props.titles.map((title, ind) => (
          <CellTitle key={ind}>{title}</CellTitle>
        ))}
      </Title>
      <>
        {props.dataArray.map((value, ind) => (
          <Title key={ind}>
            {Object.keys(value).map(unit => (
              <div key={unit}>{value[unit]}</div>
            ))}
          </Title>
        ))}
      </>
    </div>
  );
}

export { PrintData };
