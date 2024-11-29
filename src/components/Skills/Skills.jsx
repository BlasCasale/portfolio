import React from 'react'
import './Skills.css'

const Skills = ({ style, skills, selected, addSkill, quiteSkill }) => {

  return (
    <ul className='sectionSkills'>

      {skills.map(({ component: SkillComponent, id }) => {
        const itsSelected = selected.includes(id)
        return (
          <li
            className={`liSkills ${itsSelected ? style == "dark" ? "liDarkSelected" : "liClearSelected" : ""}`}
            key={id}
          >
            <SkillComponent
              key={id}
              style={style}
              addSkill={addSkill}
              quiteSkill={quiteSkill}
              itsSelected={itsSelected}
              id={id}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default Skills