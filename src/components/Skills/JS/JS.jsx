import React, { useCallback } from 'react'

const JS = ({ style, addSkill = null, quiteSkill = null, itsSelected = null, id = null }) => {

  const handleClick = useCallback(() => {
    itsSelected ? quiteSkill(id) : addSkill(id)
  })

  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-brand-javascript ${itsSelected ? style + "Selected" : ""}`} width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke={style == "dark" ? "#ccc" : "#090C08"} fill="none" strokeLinecap="round" strokeLinejoin="round" onClick={handleClick}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
      <path d="M7.5 8h3v8l-2 -1" />
      <path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" />
    </svg>
  )
}

export default JS