import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage';
import Support from './Pages/Support/Support';
import Pricing from './Pages/Pricing/Pricing';
import Features from './Pages/Features/Features';
import SignUpPage from './Pages/SignUpPage/SignUpPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
import Blog from './Pages/Blog/Blog';
import BlogPage1 from './Pages/BlogPages/BlogPage1';




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
          <Route path='/blog' element={<Blog />} />
          <Route path='/blogpage1' element={<BlogPage1 />} /> 
        </Routes>
      </Router>
    </div>
  )
}

export default App;

<Route path='/blogpage1' element={<BlogPage1 />} /> 