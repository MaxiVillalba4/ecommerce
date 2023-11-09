import { Link } from "react-router-dom"

const Item = ({id, nombre, category, price, img, stock}) =>{

return (
    <article className="CardItem">
        <header className="Header">
            <h2 className="ItemHeader">
                {nombre}
            </h2>
        </header>
        <picture>
            <img src={img} alt={nombre} className="ItemImg"/>
        </picture>
        <section>
            <p className="Info">
                precio:${price}
            </p>
            <p className="Info">
                stock disponible: {stock}
            </p>
        </section>
        <footer className="ItemFooter">
        <Link to={'/item/${id}'} >Ver Detalle</Link>
        </footer>
    </article>
)
}
export default Item
