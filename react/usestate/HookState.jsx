import React , { useState } from 'react'


const Home = () => {
  const [count, setCount] = useState(0);
  const counter=()=>{
    setCount(count+1)
  }
  return (
    <div>
        <p>The value of count is: {count}</p>
        <button onClick={counter}>Increament</button>
    </div>
  )
}

export default Home