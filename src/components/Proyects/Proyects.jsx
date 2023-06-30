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
          <div>
            <CodeAndDeploy code={"https://github.com/BlasCasale/proyecto-rjs"} deploy={"https://mundo-gamer-rjs-casale.netlify.app/"} />
          </div>
          <ReactJs />
        </li>

        <li className={`${style}Li warshipsApi`}>
          <div>
            <CodeAndDeploy code={"https://github.com/BlasCasale/warships-api"} deploy={"https://warships-api-casale.netlify.app/"} />
          </div>
          <ReactJs />
        </li>

        <li className={`${style}Li toDo`}>
          <div>
            <CodeAndDeploy code={"https://github.com/BlasCasale/to-do-task"} deploy={"https://to-do-task-casale.netlify.app/"} />
          </div>
          <ReactJs />
        </li>

        <li className={`${style}Li quizzApp`}>
          <div>
            <CodeAndDeploy code={"https://github.com/BlasCasale/quiz-app"} deploy={"https://quizz-app-casale.netlify.app/"} />
          </div>
          <ReactJs />
        </li>

        <li className={`${style}Li simpsons`}>
          <div>
            <CodeAndDeploy code={"https://github.com/BlasCasale/simpsons-api"} deploy={"https://simpsons-api-casale.netlify.app/"} />
          </div>
          <ReactJs />
        </li>

        <li className={`${style}Li mundoJs`}>
          <div>
            <CodeAndDeploy code={"https://github.com/BlasCasale/projectoJS"} deploy={"https://blascasale.github.io/projectoJS/"} />
          </div>
          <JavaScript />
        </li>

        <li className={`${style}Li slipknot`}>
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