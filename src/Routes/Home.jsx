import React from 'react'
import CryptoList from '../components/CryptoList'
import Trending from '../components/Trending'

const Home = ({coins}) => {
  return (
    <div className='w-[90%] mx-auto'>
      <Trending/>
      <CryptoList coins={coins}/>
    </div>
  )
}

export default Home 