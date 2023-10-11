import React from 'react'
import './Footer.css'


const Footer = ({ style }) => {

    return (
        <div className={`${style}Div boxFooter`}>
            <footer className={`${style}Footer`}>
                
                <i className={`bi bi-geo-alt ${style}Info`}> Argentina, Buenos Aires, La Plata.</i>

                <i className={`bi bi-file-earmark-arrow-down ${style}Info`}><a href="https://drive.google.com/file/d/1Zczb-atPWJg0-Bc234F5ajppxYKX0NXV/view?usp=drive_link" target='_blank'> CV</a></i>

            </footer>
        </div>
    )
}

export default Footer