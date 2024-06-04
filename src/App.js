import React, { createContext, useState } from 'react'
import Header from './Components/Header'
import Home from './Pages/Home'
import Features from './Pages/Features'
import Advantages from './Pages/Advantages'
import Testimonials from './Pages/Testimonials'
import Faq from './Pages/Faq'
import Download from './Pages/Download'
import Footer from './Components/Footer'

export const ThemeContext = createContext("light");

const App = () => {

  const [theme,setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div id={theme}>
      <Header/>
      <Home/>
      <Features/>
      <Advantages/>
      <Testimonials/>
      <Faq/>
      <Download/>
      <Footer/>
    </div>
    </ThemeContext.Provider>
  )
}

export default App