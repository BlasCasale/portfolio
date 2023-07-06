import React from 'react'
import ReactJs from './ReactJs'
import CodeAndDeploy from './CodeAndDeploy'
import JavaScript from './JavaScript'
import HtmlAndCss from './HtmlAndCss'
import './Proyects.css'

const Proyects = ({ style }) => {

  return (
    <section className={`${style}Proyects sectionProyects`}>

      <ul>

        <li className={`${style}Li mundoRjs`}>
          <p className={`${style}P`}>E-commerce hecho con React JS y utilizando base de datos de Firebase.</p>
          <div>
            <CodeAndDeploy code={"https://github.com/BlasCasale/proyecto-rjs"} deploy={"https://mundo-gamer-rjs-casale.netlify.app/"} />
          </div>
          <ReactJs />
        </li>

        <li className={`${style}Li warshipsApi`}>
          <p className={`${style}P`}>Fetching de datos, maquetación y navegación con recuperación de datos con React JS.</p>
          <div>
            <CodeAndDeploy code={"https://github.com/BlasCasale/warships-api"} deploy={"https://warships-api-casale.netlify.app/"} />
          </div>
          <ReactJs />
        </li>

        <li className={`${style}Li toDo`}>
          <p className={`${style}P`}>Clásico To Do hecho con React JS, utilizando el recurso de localStorage para que tus tareas se guarden.</p>
          <div>
            <CodeAndDeploy code={"https://github.com/BlasCasale/to-do-task"} deploy={"https://to-do-task-casale.netlify.app/"} />
          </div>
          <ReactJs />
        </li>

        <li className={`${style}Li quizzApp`}>
          <p className={`${style}P`}>Un Quizz App de preguntas de cultura general, hecho con React JS, utilizando la librería de confeti para agregar animación a ciertos puntaje obtenido.</p>
          <div>
            <CodeAndDeploy code={"https://github.com/BlasCasale/quiz-app"} deploy={"https://quizz-app-casale.netlify.app/"} />
          </div>
          <ReactJs />
        </li>

        <li className={`${style}Li simpsons`}>
          <p className={`${style}P`}>Fetching de datos a la Api de los simpsons, maquetación con React JS, se puede hacer doble busqueda tanto por nombre como por numero de simpsons.</p>
          <div>
            <CodeAndDeploy code={"https://github.com/BlasCasale/simpsons-api"} deploy={"https://simpsons-api-casale.netlify.app/"} />
          </div>
          <ReactJs />
        </li>

        <li className={`${style}Li mundoJs`}>
          <p className={`${style}P`}>E-commerce hecho con HTML5, CSS3 y JavaScript, utilizando localStorage para poder mantener el carrito guardado cuando se navega entre páginas.</p>
          <div>
            <CodeAndDeploy code={"https://github.com/BlasCasale/projectoJS"} deploy={"https://blascasale.github.io/projectoJS/"} />
          </div>
          <JavaScript />
        </li>

        <li className={`${style}Li slipknot`}>
          <p className={`${style}P`}>Primer proyecto personal y académico, hecho con HTML5 y CSS3.</p>
          <div>
            <CodeAndDeploy code={"https://github.com/BlasCasale/PreEntregaCasale"} deploy={"https://slipknotcodercasale.netlify.app/"}/>
          </div>
          <HtmlAndCss />
        </li>

      </ul>

    </section>
  )
}

export default Proyects