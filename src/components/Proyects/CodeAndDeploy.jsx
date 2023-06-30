import React from 'react'
import './Proyects.css'

const CodeAndDeploy = ({ code, deploy }) => {
    return (
        <>
            <a href={code} target="_blank" rel="noopener noreferrer"><i className="bi bi-code-slash iconCustom"></i></a>
            <a href={deploy} target="_blank" rel="noopener noreferrer"><i className="bi bi-display iconCustom"></i></a>
        </>
    )
}

export default CodeAndDeploy