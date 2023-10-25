import { Console } from "console";
import fs, { accessSync } from "fs";
import {promise as fs} from "fs";


class ProductManager {
    constructor () {
    this.patch = "./productos.txt";
    this.products = []
    }

    static id = 0
    
    addProduct = async (title, description, price, image, code, stock) => {
        
        ProductManager.id++

        let newProduct = {
            title, 
            description, 
            price, 
            image, 
            code, 
            stock,
            id: ProductManager.id

        };
        this.products.push(newProduct)
       console.log (newProduct)
        await fs.writeFile( this.patch, JSON.stringify(this.products))
    };
    readProducts = async () =>{
    let respuesta =  await fs.readFile(this.patch, utf-8)
    return  JSON.parse(respuesta)
    }
    getProduct = async () => {
        let respuesta2 = await this.readProducts()
        return console.log(respuesta2)
    }; 
    getProductById = async (id) => {
        let respuesta3 = await this.readProducts()
       if  (!respuesta3.find(product => product.id === id)){
        console.log("producto no encontrado")
         } else {
            console.log ( respuesta3.find(product => product.id === id))
         }

        //let filter = respuesta3.find(product => product.id === id)
       
       //console.log(filter)
    };
    deleteProductById = async (id) =>{ 
        let respuesta3 = await this.readProducts()
        let productFilter = respuesta3.filter(products => products.id != id )
        await fs.writeFile( this.patch, JSON.stringify(productFilter))
        console.log ("se elimino un producto") 

    };
    updateProduct = async ({id,...producto}) => {
        //console.log(producto)
        await this.deleteProductById(id);
        let productOld = await this.readProducts();
        let productModif = [{...producto, id},...productOld];
        await fs.writeFile( this.patch, JSON.stringify(productModif)) 
    };
}

const productos = new ProductManager();

productos.addProduct("titulo1","descripcion1", 1000, "imagen1", "abc123", 5);
productos.addProduct("titulo2","descripcion2", 2700, "imagen2", "abc124", 8 );
productos.addProduct("titulo3","descripcion3", 1500, "imagen3", "abc125", 7);

//productos.getProduct()

//productos.getProductById(1)

//productos.deleteProductById(2)

productos.updateProduct({ 
    title:"titulo3", 
    description:"descripcion3", 
    price:3500, 
    image: "imagen3", 
    code:"abc125", 
    stock:7,
    id:3
})