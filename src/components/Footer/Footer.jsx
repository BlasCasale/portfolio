import React from 'react'
import './Footer.css'


const Footer = ({ style }) => {

    return (
        <div className={`${style}Div boxFooter`}>
            <footer className={`${style}Footer`}>

                <i className={`bi bi-geo-alt ${style}Info`}> Argentina, Buenos Aires, La Plata.</i>

                <i className={`bi bi-file-earmark-arrow-down ${style}Info`}><a href="https://docs.google.com/document/d/1y0p5DKsRh4Ks1rncFnn-ZjaE2aZbFM2A_w5vTXDTl_w/edit?usp=drive_link" target='_blank'>CV</a></i>

            </footer>
        </div>
    )
}

export default Footer
