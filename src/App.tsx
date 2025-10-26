import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import ClothingFashion from './pages/ClothingFashion'
import Groceries from './pages/Groceries'
import Electronics from './pages/Electronics'
import Stationaries from './pages/Stationaries'
import Accessories from './pages/Accessories'
import SkincareHaircare from './pages/SkincareHaircare'
import Beauty from './pages/Beauty'
import HomeKitchen from './pages/HomeKitchen'
import Sports from './pages/Sports'
import Blogs from './pages/Blogs'


export default function App() {
  return (
  <Router>

    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/clothing' element={<ClothingFashion/>}/>
      <Route path='/groceries' element={<Groceries/>}/>
      <Route path='/electronics' element={<Electronics/>}/>
      <Route path='/stationaries' element={<Stationaries/>}/>
      <Route path='/accessories' element={<Accessories/>}/>
      <Route path='/skincare' element={<SkincareHaircare/>}/>
      <Route path='/beauty' element={<Beauty/>}/>
      <Route path='/home' element={<HomeKitchen/>}/>
      <Route path='/sports' element={<Sports/>}/>
       
       
      <Route path='/blogs' element={<Blogs/>}/>

  

      
    </Routes>
  </Router>
  
  )
}


// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Blogs from './pages/Blogs';
// import CategoryPage from './pages/CategoryPage';

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Home */}
//         <Route path="/" element={<Home />} />

//         {/* Blogs */}
//         <Route path="/blogs" element={<Blogs />} />

//         {/* Dynamic Category Page */}
//         <Route path="/category/:slug" element={<CategoryPage />} />
//       </Routes>
//     </Router>
//   );
// }
