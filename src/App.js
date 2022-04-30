import {Routes, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home'
import About from './Pages/About/About'
import ServiceDetail from'./Pages/ServiceDetail/ServiceDetail';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import CheckOut from './Pages/Checkout/Checkout/Checkout';
import AddService from './Pages/AddService/AddService';
import ManageServices from './Pages/ManageServices/ManageServices';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Order from './Pages/Order/Order';



function App() {
  return (

    <div className="app-container">

    <Header></Header>   
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register'element={<Register></Register>}></Route>
        <Route path='/checkout/:serviceId' element={<RequireAuth>
          <CheckOut></CheckOut>
        </RequireAuth>}>
         </Route> 

        <Route path='/orders' element={<RequireAuth>
          <Order></Order>
        </RequireAuth>}>
          
        </Route>
        
      <Route path='/addservice' element={<RequireAuth><AddService></AddService></RequireAuth>}> </Route>

      <Route path='/manage' element={<RequireAuth><ManageServices></ManageServices></RequireAuth>} ></Route>
      
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      
    <Footer></Footer>
     <ToastContainer />

    </div>
  );
}

export default App;
