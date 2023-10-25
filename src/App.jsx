import React,{useState,useEffect} from 'react';
import './mobile.css';

const App = () => {
  const[data,setData]=useState([])
  useEffect(()=>{
fetch("./data.js")
.then(res=>res.json())
.then(d=>setData(d))
  },[data])
  return (
    <div className='bg'>
     <div className='mob'> {data.map((x)=>{
        return(
          <section key={x.id}>
            <p>{x.name}</p> 
          </section>
        )
      })}</div>
    </div>
  )
}
export default App
