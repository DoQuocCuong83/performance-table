import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { BTCCellContainer } from "../btc-cell-animation";

const Cell = (props) => {
  const { id, column } = props;

  const cellChange = useRef(false);

  const value = useSelector((state) => {
    if (state.previousBTCs3[id]) {
      if (state.previousBTCs3[id][column] === state.currentBTCs3[id][column]) {
        cellChange.current = false;
      } else if (
        state.previousBTCs3[id][column] > state.currentBTCs3[id][column]
      ) {
        cellChange.current = "decrease";
      } else {
        cellChange.current = "increase";
      }
    }
    if (state.currentBTCs3[id]) {
      return state.currentBTCs3[id][column];
    }
  });

  return (
    <td key={value}>
      {!cellChange.current && value !== undefined && String(value)}
      {cellChange.current === "decrease" && (
        <BTCCellContainer>{String(value)}</BTCCellContainer>
      )}
      {cellChange.current === "increase" && (
        <BTCCellContainer>{String(value)}</BTCCellContainer>
      )}
    </td>
  );
};

const BTC3Table = () => {
  const BTCIds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <table>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>C</th>
          <th>P</th>
          <th>T</th>
          <th>V</th>
        </tr>
      </thead>
      <tbody>
        {BTCIds.map((item) => {
          return (
            <tr key={item}>
              <td>BTC{item}</td>
              <Cell id={item} column={"c"} />
              <Cell id={item} column={"p"} />
              <Cell id={item} column={"t"} />
              <Cell id={item} column={"v"} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default BTC3Table;
