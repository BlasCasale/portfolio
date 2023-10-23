import React from 'react'
import './Footer.css'


const Footer = ({ style }) => {

    return (
        <div className={`${style}Div boxFooter`}>
            <footer className={`${style}Footer`}>
                
                <i className={`bi bi-geo-alt ${style}Info`}> Argentina, Buenos Aires, La Plata.</i>

                <i className={`bi bi-file-earmark-arrow-down ${style}Info`}><a href="https://drive.google.com/file/d/1rOjoShh_CxqjoQPn20n6Bv19nkbYandc/view?usp=share_link" target='_blank'> CV</a></i>

            </footer>
        </div>
    )
}

export default Footer
