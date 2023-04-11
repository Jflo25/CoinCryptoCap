import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CoinDetails from './CoinDetails'

const CryptoList = ({coins}) => {

  const [search,setSearch] = useState('')


  return (
    <div className='rounded-div my-4 mx-auto'>
      <div className='flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right '>
        <h1 className='text-2xl font-bold my-2'>Search Crypto</h1>
        <form>
          <input onChange={(e) => setSearch(e.target.value)} className='w-full bg-primary border border-input px-4 py-2 rounded-2xl shadow-xl' type="text" placeholder='Search a coin' />
        </form>
      </div>

      <table className='w-full border-collapse text-center '>
        <thead>
          <tr className='border-b flex justify-between'>
            <th></th>
            <th className='px-4'>#</th>
            <th className='text-left'>Coin</th>
            <th></th>
            <th>Price</th>
            <th >24hr</th>
            <th className='hidden md:table-cell'>24hr Volume</th>
            <th className='hidden sm:table-cell'>Mkt</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {coins.filter((value) => {
          if (search ==='' ){
            return value 
          } 
          else if (
            value.name.toLowerCase().includes(search.toLowerCase())
          ) {
            return value
          }
          }).map((coin) =>(
        <Link to={/CoinPage/}>
          <CoinDetails key={coin.id} coin={coin} />
        </Link>  
          ))} 
        </tbody> 
      </table>
    </div>
  )
}

export default CryptoList