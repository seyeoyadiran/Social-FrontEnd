import { useState } from 'react'
import './App.css'
import Home from './pages/Home/Home'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Home/>
     
    </>
  )
}

export default App
