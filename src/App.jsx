import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage';
import Support from './Components/Support/Support';



const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/support" element={<Support />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
