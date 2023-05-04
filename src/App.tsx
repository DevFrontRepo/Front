import { Routes, Route } from 'react-router-dom'
import { CssBaseline } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import Login from './pages/Login/Login'
import Register from './pages/Login/RegisterVendor';
import RegisterClient from './pages/Login/RegisterClient';
import VerifyMail from './pages/Login/VerifyMail'
import HomePage from './pages/HomePage';
import Popular from './pages/Popular';
import Localisation from './pages/Localisation';
import ForgetPassword from './pages/Login/ForgotPassword';
import Layout from './components/Layout';


function App() {

  return (
    <>
    <CssBaseline />
    <ToastContainer />
    <Routes>
      <Route path='/' element={<Layout />}>        
        <Route index element={<HomePage />} />
        <Route path='Localisation' element={<Localisation />} />
        
        <Route path='Login' element={<Login />} />
        <Route path='Register' element={<Register />} />
        <Route path='RegisterClient' element={<RegisterClient />} />

        <Route path='VerifyMail' element={<VerifyMail />}>
          <Route path=':verificationCode' element={<VerifyMail />}  />
        </Route>

        <Route path='ForgetPassword' element={<ForgetPassword />} />
        <Route path='Popular' element={<Popular />} />
      </Route>
    </Routes>

    </>
  )
}

export default App
