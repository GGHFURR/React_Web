import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

const Header = React.lazy(() => import('./component/header/header.jsx'));
const Nav = React.lazy(() => import('./component/nav/nav.jsx'));
const About = React.lazy(() => import('./component/about/about.jsx'));
const Experience = React.lazy(() => import('./component/experience/experience.jsx'));
const Service = React.lazy(() => import('./component/service/service.jsx'));
const Portofolio = React.lazy(() => import('./component/portofolio/portofolio.jsx'));
const Contact = React.lazy(() => import('./component/contact/Contact.jsx'));
const Footer = React.lazy(() => import('./component/footer/footer.jsx'));





const App = () => {
  return (
    <Router> 
      <Routes>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Service/>
      <Portofolio />
      <Contact/>
      <Footer />
      </Routes>
      
    </Router>
  )
}

export default App