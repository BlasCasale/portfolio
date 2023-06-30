import React from 'react'
import './Footer.css'


const Footer = ({ style }) => {

    {
        /*
        <i class="bi bi-phone"></i> celu regular
        <i class="bi bi-telephone"></i> telefono regular
        <i class="bi bi-geo-alt"></i> geopoint
        <i class="bi bi-envelope-at"></i> mail
        <i class="bi bi-file-earmark-arrow-down"></i> descargar cv
        */
    }

    return (
        <div className={`${style}Div boxFooter`}>
            <footer className={`${style}Footer`}>
                
                <i className={`bi bi-geo-alt ${style}Info`}> Argentina, Buenos Aires, La Plata.</i>

                <i className={`bi bi-file-earmark-arrow-down ${style}Info`}><a href="https://drive.google.com/file/d/1APhb-QGF4Xc-DtpSfe2ouR_9YGiu4jrG/view?usp=drive_link" target='_blank'> CV</a></i>

            </footer>
        </div>
    )
}

export default Footer