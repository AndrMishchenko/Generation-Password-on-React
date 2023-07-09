import './App.css';
import {useState} from 'react'

function App() {

  const [test, setTest] = useState('test')

  return (
    <>
      <div className='wrapper'>
        <div className='main-box'>
          <div className='text'>sdfsdfsd</div>
          <div className='output'>{test}</div>
        </div>
      </div>
    </>
  );
}

export default App;
