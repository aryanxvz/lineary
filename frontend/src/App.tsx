import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Blogs } from './pages/Blogs'
import { Blog } from './pages/Blog'
import { Publish } from './pages/Publish'
import { Account } from './pages/Account'
import ProtectedRoute from './components/ProtectedRoute'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to="/signup" replace />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog" element={<ProtectedRoute><Blogs /></ProtectedRoute>} />
          <Route path="/blog/:id" element={<ProtectedRoute><Blog /></ProtectedRoute>} />
          <Route path="/publish" element={<ProtectedRoute><Publish /></ProtectedRoute>} />
          <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App