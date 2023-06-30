import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import '../style.css'
import NavBar from "./components/NavBar/NavBar"
import AboutMe from "./components/AboutMe/AboutMe"
import Footer from "./components/Footer/Footer"
import Proyects from "./components/Proyects/Proyects"

export const App = () => {

    const [darkMode, setDarkMode] = useState(false)

    const style = darkMode ? "dark" : "clear"

    const changeDarkMode = () => setDarkMode(!darkMode)

    return (
        <>
            <BrowserRouter>
                <NavBar style={style} changeDarkMode={changeDarkMode} />
                <Routes>
                    <Route path="/" element={<AboutMe style={style} />} />
                    <Route path="/proyects" element={<Proyects style={style} />} />
                </Routes>
                <Footer style={style} />
            </BrowserRouter>
        </>
    )
}