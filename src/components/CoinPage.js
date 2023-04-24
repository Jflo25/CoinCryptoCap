import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CoinPage = () => {
  const params = useParams();
  const [coin, setCoin] = useState({});

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoin(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="Coin-Name text-2xl font-semibold mb-6 text-center">
        {coin.name}
      </h2>

      <div className="Coin-Content flex w-full sm:w-60 mb-4 mx-auto">
        <div className="rows-container flex flex-col">
          <div className="1st-row text-center items-center flex justify-around mx-2 w-full">
            <div className="coin-ranking ">
              <p>Rank #{coin.market_cap_rank}</p>
            </div>

            <span className="Coin-heading ">
              {coin.image ? (
                <img className="h-[50px]" src={coin.image.small} alt="" />
              ) : null}
            </span>

            <p>{coin.name}</p>
            <p>{coin.symbol}</p>
            <p className="coin-price flex">
              $
              {coin.market_data?.current_price ? (
                <h1>{coin.market_data.current_price.usd.toLocaleString()}</h1>
              ) : null}
            </p>
          </div>

          <div className="second-row">
            <div className="price-change">
              <p>{coin.market_data?.price_change_percentage_24h}</p>
              <p>{coin.market_data?.price_change_percentage_7d}</p>
              <p>{coin.market_data?.price_change_percentage_30d}</p>
              <p>{coin.market_data?.price_change_percentage_1y}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="body w-full">
        <div className="description p-6 ">
          <p>{coin.description ? coin.description.en : ""}</p>
        </div>
      </div>
    </div>
  );
};

export default CoinPage;
