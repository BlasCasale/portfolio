import React, { useCallback } from 'react'

const Redux = ({ style, addSkill = null, quiteSkill = null, itsSelected = null, id = null }) => {

  const handleClick = useCallback(() => {
    itsSelected ? quiteSkill(id) : addSkill(id)
  })

  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-brand-redux ${itsSelected ? style + "Selected" : ""}`} width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke={style == "dark" ? "#ccc" : "#090C08"} fill="none" strokeLinecap="round" strokeLinejoin="round" onClick={handleClick}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16.54 7c-.805 -2.365 -2.536 -4 -4.54 -4c-2.774 0 -5.023 2.632 -5.023 6.496c0 1.956 1.582 4.727 2.512 6" />
      <path d="M4.711 11.979c-1.656 1.877 -2.214 4.185 -1.211 5.911c1.387 2.39 5.138 2.831 8.501 .9c1.703 -.979 2.875 -3.362 3.516 -4.798" />
      <path d="M15.014 19.99c2.511 0 4.523 -.438 5.487 -2.1c1.387 -2.39 -.215 -5.893 -3.579 -7.824c-1.702 -.979 -4.357 -1.235 -5.927 -1.07" />
      <path d="M10.493 9.862c.48 .276 1.095 .112 1.372 -.366a1 1 0 0 0 -.367 -1.365a1.007 1.007 0 0 0 -1.373 .366a1 1 0 0 0 .368 1.365z" />
      <path d="M9.5 15.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M15.5 14m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </svg>
  )
}

export default Redux