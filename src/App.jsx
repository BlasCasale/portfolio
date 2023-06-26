import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import NavBar from "./components/NavBar/NavBar"
import AboutMe from "./components/AboutMe/AboutMe"
import '../style.css'

export const App = () => {

    const [darkMode, setDarkMode] = useState(false)

    const style = darkMode ? "dark" : "clear"

    const changeDarkMode = () => setDarkMode(!darkMode)

    return (
        <>
                <BrowserRouter>
                    <NavBar style={style} changeDarkMode={changeDarkMode} />
                    <Routes>
                        <Route path="/" element={<AboutMe />} />
                    </Routes>
                </BrowserRouter>
        </>
    )
}