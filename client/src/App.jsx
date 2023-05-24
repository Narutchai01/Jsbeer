
import './App.css'
import Homepage from './Homepage'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Brewerypage from './Brewerypage'
import About from './About'
import Footer from './components/Footer'


function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Brewery" element={<Brewerypage />} />
        <Route path="/about" element={<About/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
