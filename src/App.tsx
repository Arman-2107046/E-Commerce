import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'


export default function App() {
  return (
  <Router>

    <Routes>

      <Route path='/' element={<Home/>}/>
      {/* <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>} />
      <Route path='/business' element={<Business/>}/>
      <Route path='sustainability' element={<Sustainability/>}/> */}

      
    </Routes>
  </Router>
  
  )
}