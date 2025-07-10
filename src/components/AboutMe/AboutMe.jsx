import React from 'react'
import './AboutMe.css'
import { translation } from '../../translation'

const AboutMe = ({ style, language }) => {
  return (
    <main className={`${style}Main`}>
      <img src='1671500901722.webp' alt='Foto personal' className='imgAboutMe' />

      <div className="boxInfo">
        <div className='boxName'>
          <h1 className={`${style}Name`}>Blas Casale</h1>

          <h2 className={`${style}Work`}><strong>{translation[language].aboutMe.role}</strong></h2>
        </div>

        <h3 className={`${style}AboutMe`}>{translation[language].aboutMe.title}</h3>

        <article>
          <p className={`${style}Text`}>{translation[language].aboutMe.firstParagraph}</p>
          <p className={`${style}Text`}>{translation[language].aboutMe.secondParagraph}<strong>{translation[language].aboutMe.strong}</strong>.</p>
        </article>
      </div>
    </main>
  )
}

export default AboutMe
