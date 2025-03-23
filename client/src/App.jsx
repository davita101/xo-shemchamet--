import React from 'react'
import { Route, Routes } from 'react-router'
import Login from './pages/Login'
import ProtectedRoutes from './hooks/Protected-routes'
import Home from './pages/Home'
import Register from './pages/Register'
import Header from './components/Header'
import CreateTask from './pages/CreateTask'
import EditTask from './pages/EditTask'

export default function App() {
  return (
    <div>
      <Header />
      <div className='p-sm'>
        <Routes>
          <Route path='/' element={<ProtectedRoutes />} >
            <Route path='/home' element={<Home />} />
            <Route path='/create-task' element={<CreateTask />} />
            <Route path='/edit-task/:id' element={<EditTask />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/login' element={<Register />} />
          <Route path='*' element={<>not found</>} />
        </Routes>
      </div>
    </div>
  )
}
