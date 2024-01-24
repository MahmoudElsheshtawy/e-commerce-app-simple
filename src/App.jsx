
import './App.css'
import Ditilse from './components/dtilse/Ditilse'
import About from './components/home/About'
import Home from './components/home/Home'
import Info from './components/home/Info'
import Navbar from './components/navbar/Navbar'
import {  Route, Routes } from 'react-router-dom'
// import ProductList from './components/productlist/ProductList'
function App() {
  

  return (
    <>
    {/* <h1>hi my name is mahmoud elsheshtawy</h1>
    <h2>
      this e-commerce-app with api fake store api
    </h2> */}
    <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}>home</Route>
      <Route path='/About' element={<About/>}>about</Route>
      <Route path='/Info' element={<Info/>}>info</Route>
      <Route path='/product/:productId' element={<Ditilse/>}>product</Route>
     </Routes>
    
  
    {/* <Home/> */}
   
    </>
  )
}

export default App
