
import { getProducts } from "../../festik";
import { ProductList } from "../../components/ProductList/productList";

const Service = () => {
 const products = getProducts();


            return (
          
         <main>
               <ProductList products={products} />
               
      
                </main>
   )

}
export default Service;