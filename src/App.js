import logo from './logo.svg';
import './App.css';
import AddVisitor from './components/AddVisitor';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
  
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<ViewAll/>}/>
        <Route path='/add'element={<AddVisitor/>}/>


      </Routes>
      
      </BrowserRouter>

    
    
  );
}

export default App;
