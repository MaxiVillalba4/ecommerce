import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"


const NavBar = () => {

    return(
        <nav className="NavBar">
            <Link to="/">
            <h3>Villalba's Shop</h3>
            </Link>
            <div className="categories">
                <NavLink to="/category/Buzos" className={({isActive}) => isActive? "ActiveOption" : "Option"}>Buzos</NavLink>
                <NavLink to="/category/Pantalones" className={({isActive}) => isActive? "ActiveOption" : "Option"}>Pantalones</NavLink>
                <NavLink to="/category/Remeras" className={({isActive}) => isActive? "ActiveOption" : "Option"}>Remeras</NavLink>
                <NavLink to="/category/Accesorios" className={({isActive}) => isActive? "ActiveOption" : "Option"}>Accesorios</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar