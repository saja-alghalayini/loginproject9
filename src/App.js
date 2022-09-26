import { Routes, BrowserRouter, Route, Link } from 'react-router-dom';
import Userinfo from './users/UserInfo';
import UpdateInfo from './users/updateUser';
import About from './static/about';
import Contact from './static/contact';
import Adminlogin from './admin/AdminLogin';
import Dashboard from './admin/Dash';
import Auction from './admin/Auction';
import Home from './components/Home';
import LoginAndReg from "./LoginAndReg";

function App() {

  return (
    <> <Home/>
    <BrowserRouter>
    <Routes>
      <Route exact path='/user' element={<Userinfo />} />
      <Route path='/updateInfo' element={<UpdateInfo />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path="/loginA" element={<Adminlogin />} />
      <Route path="/auction" element={<Auction />} /> 
      <Route path="/dashboard" element={<Dashboard />} /> 
      <Route path="/login" element={<LoginAndReg />}/>
      {/* <Route path="/Home" element={<Home/>}/> */}
    </Routes>
    </BrowserRouter>
    </>

  );
}
export default App;

