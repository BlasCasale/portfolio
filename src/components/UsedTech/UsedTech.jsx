import React from 'react'
import HTML from '../Skills/HMTL/HTML'
import CSS from '../Skills/CSS/CSS'
import JS from '../Skills/JS/JS'
import ReactJs from '../Skills/ReactJs/ReactJs'
import Node from '../Skills/Node/Node'
import Redux from '../Skills/Redux/Redux'
import SQL from '../Skills/SQL/SQL'
import './UsedTech.css'

const UsedTech = ({ techs, style }) => {

  const skills = [
    { component: HTML, id: 'html' },
    { component: CSS, id: 'css' },
    { component: JS, id: 'js' },
    { component: Node, id: 'node' },
    { component: Redux, id: 'redux' },
    { component: ReactJs, id: 'react' },
    { component: SQL, id: 'sql' },
  ]

  return (
    <ul className='ulTechs'>
      {
        skills.filter(({ id }) => techs.includes(id))
          .map(({ component: SkillComponent, id }) => <SkillComponent style={style} key={id} />)
      }
    </ul>
  )
}

export default UsedTech