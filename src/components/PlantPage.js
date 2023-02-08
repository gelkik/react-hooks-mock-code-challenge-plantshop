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

  function handleSearch(searchName){
    const newFilter = plants.filter((plant)=>{
      return plant.name === searchName;
    })
    setPlants(newFilter);
  }

  return (
    <main>
      <NewPlantForm 
        // handleSubmit={handleSubmit}
        setPlants={setPlants}
        plants={plants}
      />
      <Search 
        handleSearch={handleSearch}
      />
      <PlantList 
        plants={plants}
      />
    </main>
  );
}

export default PlantPage;
