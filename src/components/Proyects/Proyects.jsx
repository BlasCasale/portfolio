import React, { useCallback, useState } from 'react'
import Skills from '../Skills/Skills'
import HTML from '../Skills/HMTL/HTML'
import CSS from '../Skills/CSS/CSS'
import JS from '../Skills/JS/JS'
import Node from '../Skills/Node/Node'
import ReactJs from '../Skills/ReactJs/ReactJs'
import Redux from '../Skills/Redux/Redux'
import SQL from '../Skills/SQL/SQL'
import Project from '../Project/Project'
import { projects } from '../../projects'
import './Proyects.css'

const Proyects = ({ style }) => {

  const skills = [
    { component: HTML, id: 'html' },
    { component: CSS, id: 'css' },
    { component: JS, id: 'js' },
    { component: Node, id: 'node' },
    { component: Redux, id: 'redux' },
    { component: ReactJs, id: 'react' },
    { component: SQL, id: 'sql' },
  ]

  const [selected, setSelected] = useState([])

  const addSkill = useCallback((id) => {
    setSelected((prev) => [
      ...prev,
      id
    ])
  }, [selected])

  const quiteSkill = useCallback((id) => {
    const fillteredSkills = selected.filter((skill) => skill !== id)

    setSelected(fillteredSkills)
  }, [selected])

  const filteredProjects = !selected.length ? projects : projects.filter(({ techs }) => selected.every((tech) => techs.includes(tech)))

  return (
    <section className={`${style}Proyects sectionProjects`}>

      <Skills style={style} skills={skills} selected={selected} addSkill={addSkill} quiteSkill={quiteSkill} />

      <h2 className={`${style}Title titleProyects`}>Mis proyectos</h2>

      {
        filteredProjects.map((project) => <Project style={style} {...project} key={project.id} />)
      }
    </section>
  )
}

export default Proyects
