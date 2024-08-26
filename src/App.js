
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert =(message, type)=>{
    setAlert({
        msg:message,
        type:type,
      })
      setTimeout(()=>{
        setAlert(null)
      },1500)
  }
  const toggleMode= ()=>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert(" :Light Mode has been enabled", "success")

    } else{
      setMode('dark');
      document.body.style.backgroundColor='#082847';
      showAlert(" :Dark Mode has been enabled", "success")

    }
  }
  return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm showAlert= {showAlert} mode={mode} heading="Enter the text to analyze:"/>
    </div>


    </>
  )
}

export default App;
