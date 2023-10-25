import {useEffect,useState} from 'react'

const searchApi = () => {
  const[data,setData]=useState([])
  const[search,setSearch]=useState("")
  useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users")
   .then(res=>res.json())
   .then(d=>setData(d))
  },[data])
  return (
    <div>
       <center><input type='text' onChange={(e)=>setSearch(e.target.value)}></input></center>
      {data.filter((item)=>item.name.toLowerCase().includes(search)).map((x)=>{
         
        return(
          <section key={x.id}>
           <center><p>{x.name}</p> </center> 
          </section>
        )
      })}
     
      
    </div>
  )
}

export default searchApi
