import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CoinDescription from "./CoinDescription";

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

      <div className="rows-container flex flex-col mx-auto w-full">
        <div className="Coin-info flex items-center w-full mb-5">
          <div className="relative">
            <div className="coin-ranking absolute -top-4 left-1/2 transform -translate-x-1/2 z-10 md:-top-0 md:left-auto bg-purple-500 text-white px-3 py-2 rounded-md shadow-lg">
              <p>Rank #{coin.market_cap_rank}</p>
            </div>
            <span className="Coin-heading z-20">
              {coin.image ? (
                <img className="h-[50px]" src={coin.image.small} alt="" />
              ) : null}
            </span>
          </div>

          <div className="coin-symbol-and-price text-center ml-4 flex ">
            <p className="mb-0 pr-5">{coin.name}</p>
            {coin.symbol ? (
              <p className="mb-0">{coin.symbol.toUpperCase()}</p>
            ) : null}
          </div>

          <div className="coin-price ml-4 text-lg">
            {coin.market_data?.current_price ? (
              <h1 className="mb-0">
                ${coin.market_data.current_price.usd.toLocaleString()}
              </h1>
            ) : null}
          </div>
        </div>

        <div className="price-change flex flex-col">
          <div className="text-center pb-5">
            <p>Price Change</p>
          </div>
          <div className="price-change-row flex justify-around mb-2">
            <p>
              24h:
              {coin.market_data?.price_change_percentage_24h &&
                coin.market_data.price_change_percentage_24h.toFixed(2)}
              %
            </p>
            <p>
              7d:
              {coin.market_data?.price_change_percentage_7d &&
                coin.market_data.price_change_percentage_7d.toFixed(2)}
              %
            </p>
          </div>
          <div className="price-change-row flex justify-around">
            <p>
              30d:
              {coin.market_data?.price_change_percentage_30d &&
                coin.market_data.price_change_percentage_30d.toFixed(2)}
              %
            </p>
            <p>
              1y:
              {coin.market_data?.price_change_percentage_1y &&
                coin.market_data.price_change_percentage_1y.toFixed(2)}
              %
            </p>
          </div>
        </div>
        <div className="bottom-info flex justify-around py-5">
          <div className="row text-center">
            <h1>Market Cap</h1>
            {coin.market_data &&
            coin.market_data.market_cap &&
            coin.market_data.market_cap.usd ? (
              <p>${coin.market_data.market_cap.usd.toLocaleString()} </p>
            ) : null}
          </div>

          <div className="row">
            <h1>Max Supply</h1>
            {coin.market_data ? (
              <p>{coin.market_data.max_supply.toLocaleString()}</p>
            ) : null}
          </div>
        </div>

        <div className="bottom-info flex justify-center ">
          <div className="row text-center">
            <h1>Circulating Supply</h1>
            {coin.market_data ? (
              <p>{coin.market_data.circulating_supply.toLocaleString()}</p>
            ) : null}
          </div>
        </div>
      </div>

      <div className="body w-full">
        <div className="description p-6 ">
          <CoinDescription coin={coin} />
        </div>
      </div>
    </div>
  );
};

export default CoinPage;
