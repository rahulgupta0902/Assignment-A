import { Routes,Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
import EditUser from './Features/Users/EditUser';

function App() {
  return (
    <div className='appContainer'>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Dashboard/>} />    
        <Route path="/edit-user/:id" element={<EditUser/>} />
    </Routes>
    
    </div>
    
  );
}

export default App;
