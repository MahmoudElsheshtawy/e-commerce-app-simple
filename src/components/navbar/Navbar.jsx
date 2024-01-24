
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
<div className="contaner" style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
<div>Elsheshatawy</div>
<div className="menu">

 




    <ul >
        <Link style={{margin:"5px",textDecoration:"none",color:"#fff"}} to="/">Home</Link>
        <Link style={{margin:"5px",textDecoration:"none",color:"#fff"}} to="/About" >about</Link>
        <Link style={{margin:"5px",textDecoration:"none",color:"#fff"}} to="/Info">info</Link>
    </ul>
    
</div>
</div>
  )
}

export default Navbar