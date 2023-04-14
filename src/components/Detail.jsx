import axios from "axios";
import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import './Detail.css'

function Detail (){
    const {CharacterId} =useParams()
    const [character , setCharacter] = useState({})

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${CharacterId}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [CharacterId]);
    return(
        <div>

            <h1>{character?.name}</h1>
            <p>{character?.status}</p>
            <p>{character?.species}</p>
            <p>{character?.gender}</p>
            <img src={character?.image} alt={character.name} />
        </div>
    )
}
export default Detail;