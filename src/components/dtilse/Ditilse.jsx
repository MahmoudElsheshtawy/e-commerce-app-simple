import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Product from "../products/Product";

const Ditilse = () => {
  const prams =useParams()
  console.log(prams)
  const [product ,setproduct ]= useState({})
  useEffect(() => {
    const fechProduct = async () => {
        try {
          const product = await axios.get(`https://fakestoreapi.com/products/${prams.productId}`);
          setproduct(product.data);
          console.log(product.data)
        
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fechProduct();

}, []);
  return (
    <div>
      {/* <h1>edvefpjfewjfoiwe -{product} {prams.productId}</h1> */}
     <Product product={product} showButton={false}/>

    </div>
  )
}

export default Ditilse