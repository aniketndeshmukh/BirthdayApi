import {useEffect,useState} from 'react'

const App = () => {
  const[name,setName]=useState("")
  useEffect(()=>{
    document.title=`${name}`
  })
  return (
    <div>
     <h1>Aniket {name}</h1>
     <button  onClick={()=>setName("Deshmukh")}>Show the sirname</button>
      
    </div>
  )
}

export default App
