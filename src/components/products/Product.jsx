/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

function Product(props) {
    // eslint-disable-next-line react/prop-types
    const {product,showButton} =props
 console.log(props)
  return (
    <>
     <div className="card" style={{background:"#000", width:"200px" ,height:"100%",padding:"10px"}}>
       
        <img style={{width:"200px"}} src={product.image} alt="" />
        <span>{product.title}</span>
        <p>Price:{product.price}</p>
        {showButton &&  <Link to={`/product/${product.id}`} style={{textDecoration:"none"}}>Ditilse</Link>}
      
        








     </div>



        </>
      
    
  )
}

export default Product
