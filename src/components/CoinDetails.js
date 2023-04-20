import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { Link } from "react-router-dom";

const CoinDetails = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`} className="block">
      <div className="grid grid-cols-[auto,auto,3fr,auto,auto,auto,1.5fr,1.5fr,2fr] items-center h-[80px] border-b w-full ">
        <div className="fav-star">
          <AiOutlineStar />
        </div>
        <div>{coin.market_cap_rank}</div>
        <div className="flex items-center">
          <img
            className="w-7 mx-2
         rounded-full"
            src={coin.image}
            alt={coin.id}
          />
          <p className="Crypto-Name hidden ">{coin.name}</p>
          <p className="Ticker-Symbol p-3  ">{coin.symbol.toUpperCase()} </p>
          <p className="Price ">${coin.current_price.toLocaleString()}</p>
          <div className="pl-2">
            {coin.price_change_percentage_24h > 0 ? (
              <p className="text-green-600">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </p>
            ) : (
              <p className="text-red-600">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </p>
            )}
          </div>
          <p className="hidden md:block">
            ${coin.total_volume.toLocaleString()}
          </p>
          <p className="hidden sm:block">${coin.market_cap.toLocaleString()}</p>
        </div>
        <div>
          <Sparklines data={coin.sparkline_in_7d.price}>
            <SparklinesLine color="teal" />
          </Sparklines>
        </div>
      </div>
    </Link>
  );
};

export default CoinDetails;
