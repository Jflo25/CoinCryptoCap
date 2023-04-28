import React, { useState, useEffect } from "react";
import axios from "axios";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Trending.css";

const Trending = () => {
  // Set state for trending coins and the start index of the displayed coins
  const [trending, setTrending] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  // API endpoint URL
  const url = "https://api.coingecko.com/api/v3/search/trending";

  // Fetch trending coins data from the API
  useEffect(() => {
    axios.get(url).then((response) => {
      setTrending(response.data.coins);
    });
  }, []);

  // Set an interval to update the start index every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 2) % trending.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [trending]);

  // Slice the trending coins array to display only 2 coins at a time
  const coinsToDisplay = trending.slice(startIndex, startIndex + 2);

  return (
    <div className="rounded-div my-12 py-1 text-primary">
      <h1 className="text-2xl font-bold py-4 text-center">Trending Coins</h1>
      {/* Container for the sliding coins */}
      <div className="coins-container overflow-hidden ">
        {/* Transition group for managing sliding transitions */}
        <TransitionGroup className="coins-transition-group ">
          {coinsToDisplay.map((coin, idx) => (
            // Apply sliding transitions to each coin
            <CSSTransition key={idx} timeout={500} classNames="coin">
              <div className="rounded-div pb-3 flex justify-between p-4 hover:scale-105 ease-in-out duration-300 mb-4">
                <div className="flex w-full items-center justify-between">
                  <div className="flex ">
                    <img
                      className="rounded-full "
                      src={coin.item.small}
                      alt="/"
                    />
                    <div>
                      <p className="font-bold ml-1">{coin.item.name}</p>
                      <p className="ml-1">{coin.item.symbol}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <img
                      className="w-6 m-2"
                      src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                      alt="/"
                    />
                    <p className="mr-5">{coin.item.price_btc.toFixed(7)}</p>
                  </div>
                </div>
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </div>
  );
};

export default Trending;
