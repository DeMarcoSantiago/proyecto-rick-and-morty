import Card from './Card';
import "./Cards.css"


export default function Cards({characters}) {

   return (
   <div className="cards_container">
{characters.map((elemento) => {  
   return<Card
   key = {elemento.id}
   name={elemento.name}
   species = {elemento.species}
   gender = {elemento.gender}
   image = {elemento.image}
   onClose={() => window.alert('Emulamos que se cierra la card')}
   />
})}
   </div>);
}
