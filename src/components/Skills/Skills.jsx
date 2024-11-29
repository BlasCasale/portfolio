import React from 'react'
import HTML from './HMTL/HTML'
import CSS from './CSS/CSS'
import JS from './JS/JS'
import Node from './Node/Node'
import ReactJs from './ReactJs/ReactJs'
import Redux from './Redux/Redux'
import SQL from './SQL/SQL'

const Skills = ({ style }) => {
  const skills = [
    { component: HTML, id: 'html' },
    { component: CSS, id: 'css' },
    { component: JS, id: 'js' },
    { component: Node, id: 'node' },
    { component: ReactJs, id: 'react' },
    { component: Redux, id: 'redux' },
    { component: SQL, id: 'sql' },
  ]

  return (
    <section>
      {skills.map(({ component: SkillComponent, id }) => (
        <SkillComponent key={id} style={style} />
      ))}
    </section>
  )
}

export default Skills