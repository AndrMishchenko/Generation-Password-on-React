import './App.css';
import { Route, Routes } from 'react-router-dom';
import Auth from './components/Auth';
import Home from './components/Home';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Auth/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
    </>
  );
}

export default App;
