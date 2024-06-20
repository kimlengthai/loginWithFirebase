import './App.css';
import { SignUpForm } from './SignUpForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import { Login } from './Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/signup" element={<SignUpForm />} />
    {/*
    
     */}
    </Routes>
    </BrowserRouter>
  )
}

export default App;