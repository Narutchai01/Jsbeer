
import './App.css'
import Homepage from './Homepage'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Brewerypage from './Brewerypage'


function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Brewery" element={<Brewerypage />} />
      </Routes>

    </>
  )
}

export default App
