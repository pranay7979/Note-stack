
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route, } from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import NoteState from './context/notes/NotesState';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { useState } from 'react';
import Alert from './components/Alert';
import Land from './components/Land';

function App() {
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type

    })
    setTimeout(()=>{
      setAlert(null);

    },1500);
  }
  return (
    <>
    <NoteState> 
    <Router>
      <Navbar/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
      <Route path="/Land" element={<Land  />} />
      <Route path="/" element={<Home showAlert={showAlert} />} />
        <Route exact path="/About" element={<About />}></Route>
        <Route exact  path="/login" element={<Login showAlert={showAlert}/>}> </Route>
        <Route exact  path="/signup" element={<SignUp showAlert={showAlert}/>}> </Route>
      </Routes>
      </div>
      </Router>
      </NoteState>
    </>
  );
}

export default App;

//npm run both
