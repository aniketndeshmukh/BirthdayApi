import {useEffect,useState} from 'react'

const apiFetch = () => {
  const[data,setData]=useState([])
  useEffect(()=>{
fetch("https://jsonplaceholder.typicode.com/users")
.then(res=>res.json())
.then(d=>setData(d))
  },[data])
  return (
    <div>
         {data.map((x)=>{
        return(
          <section key={x.id}>
            <p>{x.name}</p> 
          </section>
        )
      })}
     </div>
  )
}
export default apiFetch
