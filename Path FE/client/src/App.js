import 'bootstrap/dist/css/bootstrap.css';
import { Route , Routes, BrowserRouter} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import SignUp from './components/Signup'
import FooterPage from './components/FooterPage'
import Errorpage from './components/Errorpage'
import PatientDetails from './components/PatientDetails';
import TestBook from './components/TestBook';
import Payment from './components/Payment';
import PaymentRecipet from './components/PaymentRecipet';
import CreateReport from './Admin/CreateReport';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Adminaddtest from './Admin/Adminaddtest';
import Allbookingdetails from './Admin/Allbookingdetails';


const App = () => {

 
  return (
   <>
 
    
    <ToastContainer theme='colored' position="top-center"/>
     <BrowserRouter>
    
     <Navbar/>
     <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/*' element={<Errorpage/>} />
      <Route path='/patient' element={<PatientDetails/>} />
      <Route path='/testbook' element={<TestBook/>} />
      <Route path='/payment' element={<Payment/>} />
      <Route path='/PaymentReciept' element={<PaymentRecipet/>} />
      <Route path='/admin/createreport' element={<CreateReport/>} />
      <Route path='/admin/addtest' element={<Adminaddtest/>} />
      <Route path='/admin/alldetails' element={<Allbookingdetails/>} />

      
    </Routes>
    <FooterPage/>
    </BrowserRouter>
    
 
  </>
  )
}

export default App