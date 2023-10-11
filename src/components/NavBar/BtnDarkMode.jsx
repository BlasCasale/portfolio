import React from 'react'
import './NavBar.css'

const BtnDarkMode = ({ changeDarkMode, style }) => {

    return (
        <button onClick={() => changeDarkMode()} className={`${style}BtnMode btnMode`}>{style === "dark" ?
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sun-high" width="37" height="37" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z" />
                <path d="M6.343 17.657l-1.414 1.414" />
                <path d="M6.343 6.343l-1.414 -1.414" />
                <path d="M17.657 6.343l1.414 -1.414" />
                <path d="M17.657 17.657l1.414 1.414" />
                <path d="M4 12h-2" />
                <path d="M12 4v-2" />
                <path d="M20 12h2" />
                <path d="M12 20v2" />
            </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-moon" width="37" height="37" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
            </svg>

        }</button>
    )
}

export default BtnDarkMode