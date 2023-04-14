import { Link } from "react-router-dom";
import "./Card.css";

export default function Card({name , gender ,onClose  , species , image, id}) {
   return (
      <div className="card">
         <button onClick={onClose}>X</button>
         <Link to={`/detail/${id}`}>
         <h2 className="card-name">{name}</h2>
         </Link>
      
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img src={image} alt={name} />
      </div>
   );
}
