/* eslint-disable quotes */
import { Route, Routes, BrowserRouter } from "react-router-dom"
import React from 'react'

import Home from "./components/Home"
import AnimalsAll from "./components/animals/AnimalsAll"
import DisplayMap from "./components/explore/MapPage"
import AnimalDetail from "./components/animals/AnimalDetail"
import AnimalAdd from "./components/animals/AnimalAdd"
import AnimalEdit from "./components/animals/AnimalEdit"
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"


const App = () => {

  return (
    <main className="site-wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<DisplayMap />} />
          <Route path="/animals" element={<AnimalsAll />} />
          <Route path="/animals/:id" element={<AnimalDetail />} />
          <Route path="/animals/add" element={<AnimalAdd />} />
          <Route path="/animals/:id/edit" element={<AnimalEdit />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
