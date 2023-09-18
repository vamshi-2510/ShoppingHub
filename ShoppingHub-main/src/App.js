import {Route,Routes,NavLink} from 'react-router-dom'
import Home from './components/Home'
import Contactus from './components/Contactus'
import Login from './components/Login'
import Signup from './components/Signup'
import NavB from './components/NavB'
import { Container } from 'react-bootstrap'
import Cart from './components/Cart'
import MyOrders from './components/MyOrder'
import Footer from './components/Footer'
import Fashion from './components/Products/Fashion'
import Electronics from './components/Products/Electronics'
import Furniture from './components/Products/Furniture'
import Books from './components/Products/Books'
function App() {
  return (
    <div className='abc xyz container-fluid'>
      <NavB/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/MyOrders' element={<MyOrders/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/Contactus' element={<Contactus/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
        <Route path='/Fashion' element={<Fashion/>}></Route>
        <Route path='/Electronics' element={<Electronics/>}></Route>
        <Route path='/Furniture' element={<Furniture/>}></Route>
        <Route path='/Books' element={<Books/>}></Route>
      </Routes>
      <Footer className="mt-5"/>
      
    </div>
  );
  }
export default App;
