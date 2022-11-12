import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DataFeaching from './Component/DataFeaching'
const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="" element={<DataFeaching/>}/>
        
    </Routes>
</BrowserRouter>
  )
}

export default Router