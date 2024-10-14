import React from 'react'
import Navbar from '../component/Navbar'
import Banner from '../component/Banner'
import NewCollection from '../component/NewCollection'
import BestFashion from '../component/BestFashion'
import BestSeller from '../component/BestSeller'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <NewCollection/>
      <BestFashion/>
      <BestSeller/>
    </div>
  )
}

export default Home