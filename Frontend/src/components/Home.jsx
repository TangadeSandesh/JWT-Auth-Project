import React, {useState} from 'react'
import NavBar from './NavBar';
import NewsBoard from './NewsBoard';

function Home() {
  const [category, setCategory] = useState("general");

   return (
    <div>
      <NavBar setCategory={setCategory}/>
      <NewsBoard category={category}/>
    </div>
  )
}

export default Home
