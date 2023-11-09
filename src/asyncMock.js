const products = [
{
    id:"1",
    nombre:"buzo",
    category:"Buzos",
    price: 10000,
    img:"https://image.lexica.art/full_jpg/19cae003-4fdc-494c-b7f7-237871843a48",
    stock:200,
    description:"buzo negro de hombre",
},
    {   
    id:"2",
    nombre:"pantalon",
    category:"Pantalones",
    price: 10000,
    img:"https://image.lexica.art/full_jpg/444c4096-9380-41ce-9590-737478e83c1d",
    stock:200,
    description:"pantalon de jean",},
    {
    id:"3",
    nombre:"remera",
    category:"Remeras",
    price: 10000,
    img:"https://urbanzoneshop.com/cdn/shop/files/Camiseta_titular_Argentina_3_estrellas_2022_Blanco_IB3593_01_laydown.png?v=1692868515",
    stock:200,
    description:"remera de la seleccion argentina",},
    {
        id:"4",
        nombre:"gorra",
        category:"Accesorios",
        price: 10000,
        img:"https://http2.mlstatic.com/D_NQ_NP_767230-MLA70739805099_072023-O.webp",
        stock:200,
        description:"gorra de la NBA",}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products)
        }, 400)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {resolve(products.find(prod => prod.id ===productId))})
    }, 500)
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {resolve(products.find(prod => prod.category ===categoryId))})
    }, 500)
}