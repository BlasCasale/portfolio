import React from 'react'
import './Footer.css'


const Footer = ({ style }) => {

    return (
        <div className={`${style}Div boxFooter`}>
            <footer className={`${style}Footer`}>

                <i className={`bi bi-geo-alt ${style}Info`}> Argentina, Buenos Aires, La Plata.</i>

                <i className={`bi bi-file-earmark-arrow-down ${style}Info`}><a href="https://docs.google.com/document/d/11DTRRpC1kLbpK8nh0RPx_iIY0CNB357W2mCO-YH-qAY/edit?usp=drive_link" target='_blank'>CV</a></i>

            </footer>
        </div>
    )
}

export default Footer
