import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../products/Product";


const ProductList = () => {
    const [data, setData] = useState([]);
    // const [cattegores, setcattegores] = useState([]);
    const [category,setCategory]=useState([])


    //categories
    const fechcategory = async ()=>{
      try {
             const res =await axios.get("https://fakestoreapi.com/products/categories")
               setCategory(res.data)
              console.log(res.data)

      } catch (error) {
       console.error('Error fetching data:', error);
      }

       }   
       //dtat
       const fetchData = async () => {
        try {
          const response = await axios.get('https://fakestoreapi.com/products');
          setData(response.data);
          console.log(response.data)
        
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      // const filtercat = async (catName) => {
      //   try {
      //     const response = await axios.get(`https://fakestoreapi.com/products/category/${catName}`);
      //     setcattegores(response.data);
      //     console.log(catName)
        
      //   } catch (error) {
      //     console.error('Error fetching data:', error);
      //   }
      // };
  const filtercat= (catName)=>{

    console.log(catName)
    fetch(`https://fakestoreapi.com/products/category/${catName}`)
    .then(res=>res.json())
    .then(data=>setData(data))
  }
  



// filter

// filter
useEffect(() => {
  fetchData();
  fechcategory();
  // filtercat();
}, []);
  return (
    <div>
       <div className="categorise" style={{display:"flex", justifyContent:"center",padding:'20px'}}>
       <button onClick={()=>fetchData()}>all_categorise</button>
        {category.map((cattegores)=>(
         
            <div className="row" key={cattegores.id} >
             
              <button onClick={()=>filtercat(cattegores)}>{cattegores}</button>
              </div>
          ))}
        </div>
        <div className="contaners" >
       
            {data.map((product)=>(
              <div className="card" key={product.id}>
                  <Product product={product} showButton={true}/>
              </div>
            ))}
        </div>
    </div>
  )
}

export default ProductList