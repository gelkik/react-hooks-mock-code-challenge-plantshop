import React,{useState} from "react";

function NewPlantForm({setPlants,plants}) {
  
  const [newPlant,setNewPlant]=useState({});
  
  function handleSubmit(e){
    e.preventDefault();
    setPlants([...plants,newPlant])
    console.log(newPlant)
  }

  function handleChange(e){
    const {name,value} = e.target;
    setNewPlant({...newPlant,[name]:value})
  }


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Plant name" 
          value={newPlant.name}
          // onChange={(e)=>setNewPlant(e.target.value)}
          onChange={handleChange}
        />
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL"
          value={newPlant.image} 
          // onChange={(e)=>setNewPlant(e.target.value)}
          onChange={handleChange}
        />
        <input 
          type="number" 
          name="price" 
          step="0.01" 
          placeholder="Price" 
          value={newPlant.price} 
          // onChange={(e)=>setNewPlant(e.target.value)}
          onChange={handleChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
