class ProductManager {
    constructor(){
        this.products = [];
    }

    static id = 0

    addProduct(title, description, price, image, code, stock){
        for(let i=0; i<this.products.length; i++){
            if (this.products[i].code === code){
                console.log(`El codigo ${code} ya existe`);
                break;
            }
        }

        const newProduct = {
            title, 
            description, 
            price, 
            image, 
            code, 
            stock,

        }
        if (!Object.values(newProduct).includes(undefined)){
            ProductManager.id++
            this.products.push({...newProduct,
                
                id:ProductManager.id });
        }else{
            console.log("todos los campos deben ser completados")
        }
        
      

    }

    getProduct() {
        return this.products;
    }
    existe (id) {
        return this.products.find((producto) => producto.id === id)
    }
    getProductById(id) {
        !this.existe(id) ? console.log("No Found") : console.log(this.existe(id))
        
    }
}

const productos = new ProductManager();
//primera llamada array vacio
console.log(productos.getProduct());
//añado productos
productos.addProduct("titulo1","descripcion1", 1000, "imagen1", "abc123", 5);

productos.addProduct("titulo2","descripcion2", 2700, "imagen2", "abc124", 8 );
//validacion faltante de un campo
productos.addProduct("titulo4","descripcion4", 7700, "imagen4", "abc125", 10 );
//segunda llamada array con producto
console.log(productos.getProduct());
//validacion de codigo repetido
productos.addProduct("titulo3","descripcion3", 1500, "imagen3", "abc124", 7);
//busqueda de producto por id
productos.getProductById(2)