import AppDownload from '../../components/AppDownload/AppDownload'
import ExploreMenu from '../../components/Explore_menu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import Header from '../../components/Header/Header'
import './Home.css'
import React, { useState } from 'react'

const Home =() =>{

const [category,setCategory] = useState("All");

  return (
    <div>  
          <Header/>
          <ExploreMenu category={category} setCategory={setCategory} />
          <FoodDisplay category={category}/>
          <AppDownload/>
    </div>
  )
}

export default Home