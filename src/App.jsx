import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage';
import Support from './Pages/Support/Support';
import Pricing from './Pages/Pricing/Pricing';
import Features from './Pages/Features/Features';
import SignUpPage from './Pages/SignUpPage/SignUpPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';




const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path='/features' element={<Features />} />
          <Route path="/support" element={<Support />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/signUp' element={<SignUpPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
