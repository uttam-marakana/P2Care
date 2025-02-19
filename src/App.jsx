import React, { lazy, Suspense } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Layouts
const FullLayout = lazy(() => import('./layouts/fullLayout/FullLayout'));
const BlankLayout = lazy(() => import('./layouts/blankLayout/BlankLayout'));

//public Pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const About_Dr = lazy(() => import('./pages/About_Dr'));
const About_Hosp = lazy(() => import('./pages/About_Hosp'));
const Appointment = lazy(() => import('./pages/Appointment'));
const Articles = lazy(() => import('./pages/Articles'));
const Blogs = lazy(() => import('./pages/Blogs'));
const Clinic_Appointment = lazy(() => import('./pages/Clinic_Appointment'));
const Book_Appointment = lazy(() => import('./pages/Clinic_Appointment'));
const Dr_Article = lazy(() => import('./pages/Dr_Article'));
const Dr_List = lazy(() => import('./pages/Dr_List'));
const Dr_Profile = lazy(() => import('./pages/Dr_Profile'));
const Dr_Review = lazy(() => import('./pages/Dr_Review'));
const FeedBack = lazy(() => import('./pages/FeedBack'));
const Hospital = lazy(() => import('./pages/Hospital'));
const Patients_Details = lazy(() => import('./pages/Patients_Details'));
const Reviews = lazy(() => import('./pages/Reviews'));
const Services = lazy(() => import('./pages/Services'));
// const Error = lazy(() => import('./pages/Error'));

// loading utils page
const Loading = lazy(() => import('./components/loading/Loading'));

// Auth Pages
const Login = lazy(() => import('./pages/auth/Login'));
const Register = lazy(() => import('./pages/auth/Register'));


function App() {
  
  return (
    <>
      <BrowserRouter>
      <Suspense fallback={<div><Loading /></div>}>
        <Routes>

          {/* Public Pages Route */}
          <Route element={<FullLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/about-dr' element={<About_Dr />} />
            <Route path='/about-hosp' element={<About_Hosp />} />
            <Route path='/appointment' element={<Appointment />} />
            <Route path='/articles' element={<Articles />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/clinic-appointment' element={<Clinic_Appointment />} />
            <Route path='/book-appointment' element={<Book_Appointment />} />
            <Route path='/dr-article' element={<Dr_Article />} />
            <Route path='/dr-list' element={<Dr_List />} />
            <Route path='/dr-profile' element={<Dr_Profile />} />
            <Route path='/dr-review' element={<Dr_Review />} />
            <Route path='/feedback' element={<FeedBack />} />
            <Route path='/hospital' element={<Hospital />} />
            <Route path='/patient-details' element={<Patients_Details />} />
            <Route path='/reviews' element={<Reviews />} />
            <Route path='/services' element={<Services />} />
            
            {/* <Route path='/*' element={<Error />} /> */}
          </Route>

          {/* Auth Pages Route */}
          <Route element={<BlankLayout />}>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Route>
        </Routes>
      </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
