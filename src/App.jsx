import { useCallback, useState } from "react"
import '../style.css'
import NavBar from "./components/NavBar/NavBar"
import AboutMe from "./components/AboutMe/AboutMe"
import Footer from "./components/Footer/Footer"
import Proyects from "./components/Proyects/Proyects"

export const App = () => {

    const [language, setLanguage] = useState('es')

    const changeLanguage = useCallback(() => setLanguage(language === 'es' ? 'en' : 'es'))

    const [darkMode, setDarkMode] = useState(false)

    const style = darkMode ? "dark" : "clear"

    const changeDarkMode = useCallback(() => setDarkMode(!darkMode))

    return (
        <>
            <NavBar style={style} changeDarkMode={changeDarkMode} changeLanguage={changeLanguage} language={language} />
            <section id="aboutMe"><AboutMe style={style} language={language} /></section>
            <section id="projects"><Proyects style={style} language={language} /></section>
            <Footer style={style} />
        </>
    )
}