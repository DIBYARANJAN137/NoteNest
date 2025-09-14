 import React from 'react'
 import { Route, Routes } from 'react-router'
import HomePage from './psges/HomePage.jsx'
import CreatePage from './psges/CreatePage.jsx'
import NoteDetail from './psges/NoteDetail.jsx'
import toast from 'react-hot-toast'
 
 
  const App = () => {
    return (
        <div className="relative h-full w-full">
         <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#63e_100%)]"></div>
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/create" element={<CreatePage />} /> 
          <Route path="/note/:id" element={< NoteDetail />} /> 
        </Routes>
      </div>
    )
  }
 
 export default App


 