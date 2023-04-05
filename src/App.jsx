import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PokemonPage from './pages/PokemonPage';
import Home from './pages/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {
  return(
    <div className="App">
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Home /> } />
          <Route path='/pokemon/:id' element={<PokemonPage />} />
        </Route>
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      <Footer />
    </div>
  )
} 

export default App
