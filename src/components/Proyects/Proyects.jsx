import React from 'react'
import ReactJs from './Icons/ReactJs'
import CodeAndDeploy from './Icons/CodeAndDeploy'
import JavaScript from './Icons/JavaScript'
import HtmlAndCss from './Icons/HtmlAndCss'
import ReactRedux from './Icons/ReactRedux'
import NodeSQL from './Icons/NodeSQL'
import './Proyects.css'

const Proyects = ({ style }) => {
  return (
    <section className={`${style}Proyects`}>

      <h2 className={`${style}Title titleProyects`}>Mis proyectos</h2>

      <ul>
        <li className={`${style}Li pelisPedia`}>
          <p className={`${style}P`}>Backend de PelisPedia</p>
          <p className={`${style}P`}>Backend hecho con express, SQL, postgres, Sequelize y Node.js. Es una base de datos relacional.</p>
          <CodeAndDeploy code={'https://github.com/BlasCasale/pelisPedia'} style={style} deploy={'https://pelis-pedia.netlify.app/'} />
          <NodeSQL style={style} />
        </li>

        <li className={`${style}Li pelisPedia`}>
          <p className={`${style}P`}>Frontend de PelisPedia</p>
          <p className={`${style}P`}>PelisPedia es un proyecto donde podes buscar tus pelis favoritas, guardarlas en favoritos y consultar tus favoritos.</p>
          <CodeAndDeploy code={'https://github.com/BlasCasale/pelisPediaFront'} style={style} deploy={'https://pelis-pedia.netlify.app/'} />
          <ReactRedux style={style} />
        </li>

        <li className={`${style}Li mundoRjs`}>
          <p className={`${style}P`}>E-commerce hecho con React JS y utilizando base de datos de Firebase.</p>
          <CodeAndDeploy code={'https://github.com/BlasCasale/proyecto-rjs'} style={style} deploy={'https://mundo-gamer-rjs-casale.netlify.app/'} />
          <ReactJs style={style} />
        </li>

        <li className={`${style}Li warshipsApi`}>
          <p className={`${style}P`}>Fetching de datos, maquetación y navegación con recuperación de datos con React JS.</p>
          <CodeAndDeploy code={'https://github.com/BlasCasale/warships-api'} style={style} deploy={'https://warships-api-casale.netlify.app/'} />
          <ReactJs style={style} />
        </li>

        <li className={`${style}Li toDo`}>
          <p className={`${style}P`}>Clásico To Do hecho con React JS, utilizando el recurso de localStorage para que tus tareas se guarden.</p>
          <CodeAndDeploy code={'https://github.com/BlasCasale/to-do-task'} style={style} deploy={'https://to-do-task-casale.netlify.app/'} />
          <ReactJs style={style} />
        </li>

        <li className={`${style}Li quizzApp`}>
          <p className={`${style}P`}>Un Quizz App de preguntas de cultura general, hecho con React JS, utilizando la librería de confeti para agregar animación a ciertos puntaje obtenido.</p>
          <CodeAndDeploy code={'https://github.com/BlasCasale/quiz-app'} style={style} deploy={'https://quizz-app-casale.netlify.app/'} />
          <ReactJs />
        </li>

        <li className={`${style}Li simpsons`}>
          <p className={`${style}P`}>Fetching de datos a la Api de los simpsons, maquetación con React JS, se puede hacer doble busqueda tanto por nombre como por numero de simpsons.</p>
          <CodeAndDeploy code={'https://github.com/BlasCasale/simpsons-api'} style={style} deploy={'https://simpsons-api-casale.netlify.app/'} />
          <ReactJs style={style} />
        </li>

        <li className={`${style}Li mundoJs`}>
          <p className={`${style}P`}>E-commerce hecho con HTML5, CSS3 y JavaScript, utilizando localStorage para poder mantener el carrito guardado cuando se navega entre páginas.</p>
          <CodeAndDeploy code={'https://github.com/BlasCasale/projectoJS'} style={style} deploy={'https://blascasale.github.io/projectoJS/'} />
          <JavaScript style={style} />
        </li>

        <li className={`${style}Li slipknot`}>
          <p className={`${style}P`}>Primer proyecto personal y académico, hecho con HTML5 y CSS3.</p>
          <CodeAndDeploy code={'https://github.com/BlasCasale/PreEntregaCasale'} style={style} deploy={'https://slipknotcodercasale.netlify.app/'} />
          <HtmlAndCss style={style} />
        </li>
      </ul>
    </section>
  )
}

export default Proyects
