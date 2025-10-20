import React from 'react'
import ProductDetail from '../pages/ProductDetail'
import { Navigate, useOutletContext } from 'react-router-dom'
const PrivateRoute = () => {
  const { authenticated } = useOutletContext()
  return authenticated ? <ProductDetail /> : <Navigate to="/login" />
}

export default PrivateRoute

