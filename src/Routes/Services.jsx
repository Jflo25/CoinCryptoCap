import React, { useState } from 'react'


const Services = () => {
   const [stakingAmount, setStakingAmount] = useState("");
   const [apy, setApy] = useState("");
   const [months, setMonths] = useState("");
   const [yieldAmount, setYieldAmount] = useState("");
   const [totalAmount, setTotalAmount] = useState("");
 
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

   // Crypto Profit Calculator
  const [initialInvestment, setInitialInvestment] = useState("");
  const [buyPrice, setBuyPrice] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [profit, setProfit] = useState("");
  const [percentageGain, setPercentageGain] = useState("");

  const calculateCryptoProfit = () => {
    const investmentReturn = initialInvestment * (sellPrice / buyPrice);
    const profitAmount = investmentReturn - initialInvestment;
    const percentGain = (profitAmount / initialInvestment) * 100;

    setProfit(
      profitAmount.toLocaleString("en-US", {
        maximumFractionDigits: 2,
      })
    );
    setPercentageGain(
      percentGain.toLocaleString("en-US", {
        maximumFractionDigits: 2,
      })
    );
  };

  const totalReturn = parseFloat(initialInvestment) + parseFloat(profit || 0);

    return (
     <div className="container mx-auto px-4 py-8">
       <h2 className="text-2xl font-semibold mb-6 text-center">Staking Yield Calculator</h2>
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
       <div className='text-center'>
       <button className="bg-blue-500 text-white px-4 py-2 rounded-md " onClick={calculateStaking}>
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
    <h2 className="text-xl font-bold mb-4">Crypto Profit Calculator</h2>
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div>
        <label htmlFor="initialInvestment" className="block mb-1">Initial Investment:</label>
        <input
          type="number"
          id="initialInvestment"
          value={initialInvestment}
          onChange={(e) => setInitialInvestment(e.target.value)}
          className="w-full px-2 py-1 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label htmlFor="buyPrice" className="block mb-1">Average Buy-In Price:</label>
        <input
          type="number"
          id="buyPrice"
          value={buyPrice}
          onChange={(e) => setBuyPrice(e.target.value)}
          className="w-full px-2 py-1 border border-gray-300 rounded"
        />
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div>
        <label htmlFor="sellPrice" className="block mb-1">Sell Price:</label>
        <input
          type="number"
          id="sellPrice"
          value={sellPrice}
          onChange={(e) => setSellPrice(e.target.value)}
          className="w-full px-2 py-1 border border-gray-300 rounded"
        />  
      </div>
      <div>
        <label htmlFor="InitialInvestment" className="block mb-1">Initial Investment:</label>
        <input
          type="number"
          id="InitialInvestment"
          value={initialInvestment}
          onChange={(e) => setInitialInvestment(e.target.value)}
          className="w-full px-2 py-1 border border-gray-300 rounded"
        />
      </div>
    </div>
    <button
      onClick={calculateCryptoProfit}
      className="w-full py-1 mb-4 bg-blue-500 text-white font-bold rounded"
    >
      Calculate
    </button>
    {profit && (
      <div className="text-center">
        <p>Profit: ${profit}</p>
        <p>Total Return: ${totalReturn}</p>
      </div>
    )}

  </div>

 )}

export default Services