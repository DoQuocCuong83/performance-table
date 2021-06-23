import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import BTC1Table from "./btc1-table";
import BTC2Table from "./btc2-table";
import BTC3Table from "./btc3-table";
import BTC4Table from "./btc4-table";
import { getBTCs } from "../store/reducer";
import { ApplicationContainer } from "./style";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBTCs());
  }, [dispatch]);
  return (
    <ApplicationContainer>
      <BTC1Table />
      <BTC2Table />
      <BTC3Table />
      <BTC4Table />
    </ApplicationContainer>
  );
}

export default Home;
