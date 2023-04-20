import React, { useState, useEffect } from "react";
import axios from "axios";
import CoinPage from "../components/CoinPage";

const SingleCoin = ({ coins }) => {
  return (
    <div>
      <CoinPage coins={coins} />
    </div>
  );
};

export default SingleCoin;
