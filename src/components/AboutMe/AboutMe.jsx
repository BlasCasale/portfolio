import React from 'react'
import './AboutMe.css'

const AboutMe = ({ style }) => {
  return (
    <main className={`${style}Main`}>

      <img src='1671500901722.webp' alt='Foto personal' />

      <div>
        <h1 className={`${style}Name`}>Blas Casale</h1>

        <h2 className={`${style}Work`}><strong>Fullstack Developer junior</strong></h2>
      </div>

      <h3 className={`${style}AboutMe`}>Sobre mi:</h3>

      <article>
        <p className={`${style}Text`}>Hola soy Blas Casale y aca les voy a dar unas palabras sobre mi. Trabajo actualmente como empleado de comercio, hace ya 8 años que trabajo en el rubro. A lo largo de toda mi vida he tenido interés en el mundo de la tecnología, el software y la programación, decidí comenzar mis estudios en CoderHouse en Octubre del 2022 con el desarrollo Front End con JavaScript y su librería React JS. Muchos de los conocimientos que he adquirido en el campo IT fueron como autodidacta, también sigo referentes del mundo IT para adquirir conocimientos, buenas prácticas, diferentes recursos para mejorar en lógica y en código limpio. Luego de terminar mi formación en CoderHouse con el frontend, decidí incursionar en el backend con NodeJS, express, postgres y Sequelize. Actualmente estoy cursando el primer año en la universidad de La Plata en la licenciatura de sistemas, ciudad donde nací.</p>
        <p className={`${style}Text`}>Como habilidades técnicas cuento con manejo de <strong>Git, GitHub, HTML5, CSS3, SASS, JavaScript, React JS, Node.js, express, jest, Sequelize, postgres, SQL, Java, Bootstrap y Balsamiq</strong>. En cuanto a habilidades blandas me caracterizo por la perseverancia, aprendizaje rápido, proactividad, buena comunicación, creatividad, buena capacidad para resolver problemas y buen trabajo en equipo.</p>
      </article>

    </main>
  )
}

export default AboutMe
