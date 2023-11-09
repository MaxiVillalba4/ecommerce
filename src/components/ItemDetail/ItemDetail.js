import ItemCount from "../itemCount/itemCount.js"

const ItemDetail = ({id, nombre, category, price, img, stock, description}) => {
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
                categoria: {category}
            </p>
            <p className="Info">
                descripcion: {description}
            </p>
            <p className="Info">
                precio:${price}
            </p>
        </section>
        <footer className="ItemFooter">
        <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("cantidad agregada",quantity)}/>
        </footer>
    </article>
)
}

export default ItemDetail