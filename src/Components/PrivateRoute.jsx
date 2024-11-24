import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

export default function PrivateRoute({ children }) {
    const isAuthenticated = useSelector((state) => !!state.auth.user);
  
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />
    }
  
    return children
  }