import {useState} from 'react'
import img from './img/menu.jpg'
import './App.css' 


const App = () => {
  const[quantity,setQuantity]=useState(0)
  const[price,setPrice]=useState(0)
  const[buy,afterbuy]=useState('Buy Now')
 return(
  <div className='App'>
    <img className='img' src={img} alt="img not found" />
    <h1>kfc bucket</h1>
    <div> Quanity:{quantity}<button onClick={()=>setQuantity(quantity+1)}>+</button></div>
    <div><button onClick={()=>setPrice(quantity*50)}>Price</button>{price}</div>
    <div> <button onClick={()=>afterbuy('Thanku for visiting')}>{buy}</button></div>

  </div>
  )
}

export default App
