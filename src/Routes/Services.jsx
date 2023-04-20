import React, { useState } from "react";

//The Services component will contain the calculation services for investment returns and crypto staking rewards
const Services = () => {
  // Staking Yield Calculator state variables
  const [stakingAmount, setStakingAmount] = useState("");
  const [apy, setApy] = useState("");
  const [months, setMonths] = useState("");
  const [yieldAmount, setYieldAmount] = useState("");
  const [totalAmount, setTotalAmount] = useState("");

  // Function to calculate staking rewards and total amount after staking
  const calculateStaking = () => {
    const yearlyRewards = (apy / 100) * stakingAmount;
    const monthlyRewards = (yearlyRewards / 12) * months;
    setYieldAmount(
      monthlyRewards.toLocaleString("en-US", {
        maximumFractionDigits: 2,
      })
    );
    setTotalAmount(
      (monthlyRewards + parseFloat(stakingAmount)).toLocaleString("en-US", {
        maximumFractionDigits: 2,
      })
    );
  };

  // Crypto Profit Calculator state variables
  const [initialInvestment, setInitialInvestment] = useState("");
  const [buyPrice, setBuyPrice] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [profit, setProfit] = useState("");
  const [percentGain, setPercentGain] = useState("");
  const [totalReturn, setTotalReturn] = useState("");

  // Function to calculate crypto profit, percentage gain, and total return
  const calculateCryptoProfit = () => {
    const investmentReturn = initialInvestment * (sellPrice / buyPrice);
    const profitAmount = investmentReturn - initialInvestment;
    const percentGain = (profitAmount / initialInvestment) * 100;
    const totalReturn = profitAmount + parseFloat(initialInvestment);

    setProfit(
      profitAmount.toLocaleString("en-US", {
        maximumFractionDigits: 2,
      })
    );
    setPercentGain(
      percentGain.toLocaleString("en-US", {
        maximumFractionDigits: 0,
      })
    );
    setTotalReturn(
      totalReturn.toLocaleString("en-US", {
        maximumFractionDigits: 2,
      })
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Staking Yield Calculator*/}
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Staking Yield Calculator
      </h2>

      <div className="flex flex-col w-60 mb-4 items-center mx-auto">
        <label className="flex flex-col">
          Staking Amount:
          <input
            className="border border-gray-300 p-2 rounded-md"
            type="number"
            value={stakingAmount}
            onChange={(e) => setStakingAmount(e.target.value)}
          />
        </label>
        <label className="flex flex-col">
          APY (%):
          <input
            className="border border-gray-300 p-2 rounded-md"
            type="number"
            value={apy}
            onChange={(e) => setApy(e.target.value)}
          />
        </label>
        <label className="flex flex-col">
          Months:
          <input
            className="border border-gray-300 p-2 rounded-md"
            type="number"
            value={months}
            onChange={(e) => setMonths(e.target.value)}
          />
        </label>
      </div>
      <div className="text-center">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md "
          onClick={calculateStaking}
        >
          Calculate
        </button>
      </div>
      {yieldAmount && (
        <p className="mt-4">
          Staking Rewards: <span className="font-semibold">{yieldAmount}</span>
        </p>
      )}
      {totalAmount && (
        <p>
          Total Amount: <span className="font-semibold">{totalAmount}</span>
        </p>
      )}

      {/* Crypto Profit Calculator */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Crypto Profit Calculator
        </h2>
        <div className="flex flex-col w-60 mb-4 items-center mx-auto">
          <label className="flex flex-col">
            Initial Investment:
            <input
              type="number"
              id="initialInvestment"
              value={initialInvestment}
              onChange={(e) => setInitialInvestment(e.target.value)}
              className="border border-gray-300 p-2 rounded-md"
            />
          </label>
          <label className="flex flex-col">
            Average Buy-In Price:
            <input
              type="number"
              id="buyPrice"
              value={buyPrice}
              onChange={(e) => setBuyPrice(e.target.value)}
              className="border border-gray-300 p-2 rounded-md"
            />
          </label>
          <label className="flex flex-col">
            Sell Price:
            <input
              type="number"
              id="sellPrice"
              value={sellPrice}
              onChange={(e) => setSellPrice(e.target.value)}
              className="border border-gray-300 p-2 rounded-md"
            />
          </label>
        </div>
        <div className="text-center">
          <button
            onClick={calculateCryptoProfit}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Calculate
          </button>
        </div>
        {profit && (
          <div className="text-center mt-4">
            <p>
              Profit:{" "}
              <span className="font-semibold">
                ${profit} (%{percentGain})
              </span>
            </p>
            <p>
              Total Return:{" "}
              <span className="font-semibold">${totalReturn}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
