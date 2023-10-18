import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {

    return(
        <nav>
            <h3>Villalba's Shop</h3>
            <div>
                <button>Buzos</button>
                <button>Pantalones</button>
                <button>Remeras</button>
                <button>Accesorios</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar