import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import "./NavBar.css";
 
function Nav ({onSearch}) {
    return(
        <div className="nav">
            <SearchBar onSearch={onSearch}/>
            <Link to="/about"> <button>About</button></Link>
            <Link to="/home"> <button>Home</button></Link>
        </div>
    )
}
export default Nav;