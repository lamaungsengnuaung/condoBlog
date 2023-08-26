import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import About from './pages/About';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
