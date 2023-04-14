import { useState } from "react";
import "./SearchBar.css";


function SearchBar({onSearch}) {
const [id, setId] = useState("")

   const handleChange = (event)=>{
      setId(event.target.value)
   }

   return (
      <div className="search">
         <input value={id} type='search' onChange= {handleChange} />
         <button onClick={() =>onSearch(id)} >Agregar</button> 
      </div>
   );
}
export default SearchBar;
