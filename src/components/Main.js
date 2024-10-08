import React from 'react'
import Navbar from './Navbar';
import Note from './Note';
import {
    Route,
    BrowserRouter as Router,
    Routes,
  } from "react-router-dom";
import About from './About';
import AddNote from './AddNote';
import Alert from './Alert';
import Logregis from './Logregis';
import Footer from './Footer';

export default function Main() {

  return (
    <div className='h-full'>
        <Router>
            <Navbar/>
            <Alert/>
            <Routes>
            <Route path="/" element={<Note />} />
            <Route path="/about" element={<About />} />
            <Route path="/addnote" element={<AddNote />} />
            <Route path="/login" element={<Logregis />} />
            </Routes>
            <Footer/>
        </Router>
    </div>
  )
}
