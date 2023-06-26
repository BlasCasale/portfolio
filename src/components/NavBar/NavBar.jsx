import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const NavBar = ({ style, changeDarkMode }) => {

    const open = "open"

    const disable = "disable"

    const active = "active"

    const navOff = "nav"

    const navVisible = "navVisible"

    const [css, setCss] = useState({ ul: disable, buttonOpen: open, buttonClose: disable, nav: navOff })

    const closeUl = () => {
        setCss({ ul: disable, buttonOpen: open, buttonClose: disable, nav: navOff })
    }

    const openUl = () => {
        setCss({ ul: active, buttonOpen: disable, buttonClose: open, nav: navVisible })
    }

    return (
        <header className={`${style}Header header`}>

            <div className={`${style}SocialMedia divSocialMedia`}>

                <a href="https://github.com/BlasCasale" target='_blank'><img src="/gh.webp" alt="GitHub" /></a>

                <a href="" target='_blank'><img src="/li.webp" alt="LinkedIn" /></a>

                <a href="" target='_blank'><img src="/wsp.webp" alt="WhatsApp" /></a>

            </div>

            <button onClick={() => openUl()} className={`${css.buttonOpen} btn one`}><i className="bi bi-list"></i></button>

            <nav className={css.nav}>
                <button onClick={() => changeDarkMode()}>Cambiar</button>
                <button onClick={() => closeUl()} className={`${css.buttonClose} btn two`}><i className="bi bi-list"></i></button>
                <ul className={`${css.ul} ul`}>
                    <li>
                        <Link>Sobre mi</Link>
                    </li>
                    <li>
                        <Link>Proyectos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}



export default NavBar