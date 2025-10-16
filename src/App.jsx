import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './Pages/Home/home'
import Recipe from './Pages/Recipe/Recipe'
import Footer from './components/Footer/Footer'
import { Routes, Route } from 'react-router'
import Aboutpage from './Pages/AboutPages/AboutPage'
import RecipeDetails from './Pages/RecipeDetails/RecipeDetails'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<Aboutpage/>}/>
        <Route path='/recipe' element={<Recipe/>}/>
        <Route path='/recipe/:id' element={<RecipeDetails/>}/>
      </Routes>
      
      <Footer/>
    </div>
  )
}

export default App
