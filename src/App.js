import { Routes, Route, Link } from 'react-router-dom'

import Home from "./components/Homepage/Home.js";
import Contact from './components/Contact/Contact.js'
import ProvinceMainPage from './components/Province/provinceMainPage.js'
import Bac from './components/Province/Bac.js'
import Nam from './components/Province/Nam.js'
import Trung from './components/Province/Trung.js'

//HaNoi
import HaNoiDanhLam from './components/ProvinceLink/HaNoi/HaNoiDanhLam.js'
import HaNoi from './components/ProvinceLink/HaNoi/HaNoi.js';
import HaNoiLichSu from './components/ProvinceLink/HaNoi/HaNoiLichSu.js';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/provinceMainPage' element={<ProvinceMainPage/>}></Route>
        <Route path='/bac' element={<Bac />}></Route>
        <Route path='/nam' element={<Nam />}></Route>
        <Route path='/trung' element={<Trung />}></Route>

        <Route path='/HaNoi' element={<HaNoi />}></Route>
        <Route path='/HaNoi-DLTC' element={<HaNoiDanhLam />}></Route>
        <Route path='/HaNoi-DTLS' element={<HaNoiLichSu />}></Route>


      </Routes>
    </div>
  );
}

export default App;


