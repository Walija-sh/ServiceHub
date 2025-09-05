import React from 'react'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Providers from './pages/Providers'
import { Route, Routes } from 'react-router-dom'
import ProviderProfile from './pages/ProviderProfile'
import About from './pages/About'
import AuthPage from './pages/AuthPage'
import EditProviderProfile from './pages/EditProviderProfile'
import NotFound from './pages/NotFound'


const App = () => {
  return (
    <>
     <Routes>
      <Route path='/' element={<Layout/>}>
       <Route path='' element={<Home/>}/>
       <Route path='about' element={<About/>}/>
       <Route path='services' element={<Providers/>}/>
       <Route path='provider' element={<EditProviderProfile/>}/>
       <Route path='services/profile' element={<ProviderProfile/>}/>
        <Route path="/auth" element={<AuthPage />} /> 
        {/* 404 route */}
    <Route path="*" element={<NotFound />} />
      </Route>
     
     </Routes>
    </>
  )
}

export default App