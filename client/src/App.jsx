import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import AllServices from './Pages/AllServices'
import LandingPage from './Pages/LandingPage'
const About = lazy(() => import('./Pages/About'))
const Services = lazy(() => import('./Pages/Services'))
const Contact = lazy(() => import('./Pages/Contact'))
const Gallery = lazy(() => import('./Pages/Gallery'))


const FallbackUI = () => <div className="preloader loaded-success fixed top-0 inset-0 bg-[#1A5D1A] bg-opacity-30 z-50">
  <div className="absolute left-[35%] md:left-[46%] top-1/2 transform -translate-y-1/2">
    <div className="relative mx-auto my-12">
      <div className="inline-block">
        <span className="relative flex h-10 items-center justify-center w-full">
          <span className="animate-ping absolute inline-flex h-20  w-20 rounded-full bg-blue-400 opacity-75" />
          {/* <img className='relative animate-bounce inline-flex rounded-full h-10' src={logo} alt="" /> */}
          {/* <span className='relative animate-bounce inline-flex rounded-full h-10 w-10'></span> */}
          {/* <Spinner color="success" className='!w-[5rem]' /> */}
          <h1 className='font-bold text-3xl animate-ping'>IHA</h1>
        </span>
      </div>
    </div>
  </div>
</div>;

function App() {
  return (
    <BrowserRouter>
      <div className='overflow-hidden'>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<FallbackUI />} /> */}
        <Route path="/about" element={<Suspense fallback={<FallbackUI />}><About /></Suspense>} />
        <Route path="/services" element={<Suspense fallback={<FallbackUI />}><Services /></Suspense>} />
        <Route path="/contact" element={<Suspense fallback={<FallbackUI />}><Contact /></Suspense>} />
        <Route path="/gallery" element={<Suspense fallback={<FallbackUI />}><Gallery /></Suspense>} />
        {/* <Route path="/all-services" element={<Suspense fallback={<FallbackUI />}><AllServices /></Suspense>} /> */}
        <Route path="/landing" element={<Suspense fallback={<FallbackUI />}><LandingPage /></Suspense>} />
      </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
