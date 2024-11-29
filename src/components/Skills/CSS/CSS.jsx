import React, { useCallback } from 'react'

const CSS = ({ style, addSkill, quiteSkill, itsSelected, id }) => {

  const handleClick = useCallback(() => {
    itsSelected ? quiteSkill(id) : addSkill(id)
  })

  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-brand-css3 ${itsSelected ? style + "Selected" : ""}`} width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke={style == "dark" ? "#ccc" : "#090C08"} fill="none" strokeLinecap="round" strokeLinejoin="round" onClick={handleClick}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
      <path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
    </svg>
  )
}

export default CSS