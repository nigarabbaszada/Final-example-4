import Navbar from './Components/Navbar'
import './Components/Navbar/Navbar.css'
import Header from './Components/Header'
import './Components/Header/Header.css'
import Section from './Components/Section'
import './Components/Section/Section.css'
import Card from './Components/Cards'
import './Components/Cards/Card.css'
import Footer from './Components/Footer'
import './Components/Footer/Footer.css'
import Home from './Pages/Home'
import Add from './Pages/Add'
import Course from './Pages/Course'
import Offer from './Pages/Offer'
import Plan from './Pages/Plan'
import Schedule from './Pages/Schedule'
import Trainer from './Pages/Trainer'
import { Route, Routes } from "react-router-dom"
import Body from './Components/Body'
import './Components/Body/Body.css'


function App() {


  return (
    <>
     
     <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/offer' element={<Offer/>}/>
      <Route path='/course' element={<Course/>}/>
      <Route path='/schedule' element={<Schedule/>}/>
      <Route path='/trainer' element={<Trainer/>}/>
      <Route path='/plan' element={<Plan/>}/>
      <Route path='/add' element={<Add/>}/>



     </Routes>








     <Navbar/>
   <Header/>
   <Section/>
  
   <Body/>
   <Card/>
   
   <Footer/>
    </>
  )
}

export default App
