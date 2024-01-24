import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Main from "./components/Main";

function App() {
  const [data, setData] = useState({})

  useEffect(()=>{
    fetchData();
  }, [])

  const fetchData = async ()=>{
    try{
      //const response = await fetch('http://localhost:5000/predict')
      //const jsonData = await response.json()
      //setData(jsonData)
    }
    catch(error){
      console.log("Error: ", error)
    }
  }
  
  console.log(data.fields)
  console.log(data.fields?.[0])
  return (
    <>
      
     <br />
     
     <NavBar/>
     <Main data = {data} />
    </>
  );
}

export default App;
