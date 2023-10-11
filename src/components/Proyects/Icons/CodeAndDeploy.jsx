import React from 'react'
import '../Proyects.css'

const CodeAndDeploy = ({ code, deploy, style }) => {
    return (
        <div className={`${style}ProyectsIcons divContainer`}>
            <a href={code} target="_blank" rel="noopener noreferrer"><i className={`bi bi-code-slash iconCustom ${style}Color`}></i></a>
            <a href={deploy} target="_blank" rel="noopener noreferrer"><i className={`bi bi-display iconCustom ${style}Color`}></i></a>
        </div>
    )
}

export default CodeAndDeploy