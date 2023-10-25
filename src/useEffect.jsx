import {useEffect,useState} from 'react'

const App = () => {
  const[count,setCount]=useState(0)
  useEffect(()=>{
    document.title=`${count}`
  })
  return (
    <div>
     <h1>{count}</h1> 
     <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}

export default App
