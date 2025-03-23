import React from 'react'
import { Navigate, Outlet } from 'react-router'

export default function ProtectedRoutes() {
  //! fake user
  const fakeUser = null
  return !fakeUser ? <Outlet /> : <Navigate to={"/login"} />
}
