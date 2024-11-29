import React, { useCallback } from 'react'

const HTML = ({ style, addSkill = null, quiteSkill = null, itsSelected = null, id = null }) => {

  const handleClick = useCallback(() => {
    addSkill != null && itsSelected ? quiteSkill(id) : addSkill(id)
  })

  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-brand-html5 ${itsSelected ? style + "Selected" : ""}`} width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke={style == "dark" ? "#ccc" : "#090C08"} fill="none" strokeLinecap="round" strokeLinejoin="round" onClick={handleClick}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
      <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
    </svg>
  )
}

export default HTML