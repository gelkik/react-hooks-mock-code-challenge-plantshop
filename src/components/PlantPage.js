import React, {useState,useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants,setPlants] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:6001/plants')
    .then(res=>res.json())
    .then(data=>{
      setPlants(data);
    })
  },[]);

  // function handleSubmit(e){
  //   e.preventDefault();
  //   setPlants(newPlant=>([...plants,newPlant]))
  //   console.log([plants])
  // }

  return (
    <main>
      <NewPlantForm 
        // handleSubmit={handleSubmit}
        setPlants={setPlants}
        plants={plants}
      />
      <Search />
      <PlantList 
        plants={plants}
      />
    </main>
  );
}

export default PlantPage;
