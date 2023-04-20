import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CoinPage = ({ coins }) => {
  // Initialize coin state to an empty object.
  const [coin, setCoin] = useState({});
  // Get coinId from URL params.
  const { coinId } = useParams();

  // useEffect hook to fetch coin data.
  useEffect(() => {
    // Find the specific coin in the coins array.
    const specificCoin = coins.find((coin) => coin.id === coinId);

    // If the specific coin is found in the coins array.
    if (specificCoin) {
      // Set coin state with the specific coin data
      // and convert the image property to match the individual coin API data structure.
      setCoin({
        ...specificCoin,
        image: { small: specificCoin.image },
      });
    } else {
      // If the specific coin is not found in the coins array,
      // fetch data from the individual coin API.
      axios
        .get(`https://api.coingecko.com/api/v3/coins/${coinId}`)
        .then((res) => {
          // Set coin state with the fetched data.
          setCoin(res.data);
        })
        .catch((err) => {
          // Log the error if there's any.
          console.log(err);
        });
    }
  }, [coinId, coins]); // Add coinId and coins as dependencies to useEffect.

  // Render the CoinPage component.
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="Coin-Name text-2xl font-semibold mb-6 text-center">
        {coin.name}
      </h2>
      <div className="Coin-Content flex w-full sm:w-60 mb-4 items-center mx-auto">
        <div className="coin-ranking">
          <p>Rank #{coin.market_cap_rank}</p>
        </div>

        <div className="Coin-info text-center items-center flex mx-2">
          <span className="Coin-heading ">
            {coin.image ? (
              <img className="h-[50px]" src={coin.image.small} alt="" />
            ) : null}
          </span>
          <p>{coin.name}</p>
          <p>{coin.symbol}</p>
          <p className="coin-price">{coin.current_price}</p>
        </div>
      </div>
    </div>
  );
};

export default CoinPage;
