import React, { useCallback } from 'react'

const Node = ({ style, addSkill = null, quiteSkill = null, itsSelected = null, id = null }) => {

  const handleClick = useCallback(() => {
    itsSelected ? quiteSkill(id) : addSkill(id)
  })

  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-brand-nodejs ${itsSelected && style + "Selected"}`} width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke={style == "dark" ? "#ccc" : "#090C08"} fill="none" strokeLinecap="round" strokeLinejoin="round" onClick={handleClick}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0" />
      <path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5" />
    </svg>
  )
}

export default Node