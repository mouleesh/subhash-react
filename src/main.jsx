import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PublicLayout from './PublicLayout.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Signup from './auth/Signup.jsx';
import Login from './auth/Login.jsx';
import Sample from './Sample.jsx';
import Home from './Home.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />} >
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/sample" element={<Sample />} />
        </Route>
        <Route path='/home' element={<Home />} />
        {/* <Route path="/" element={<PrivateLayout />} >
          <Route path="/home" element={<Home />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
