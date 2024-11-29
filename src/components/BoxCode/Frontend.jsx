import React from 'react'

const Frontend = ({ style, uri }) => {
  return (
    <a href={uri} target='_blank'>
      <svg xmlns="http://www.w3.org/2000/svg" className='icon' viewBox="0 0 24 24" fill="none" stroke={style == "dark" ? "#ccc" : "#090C08"} strokeLinecap="round" strokeLinejoin="round" width="44" height="44" strokeWidth="2">
        <path d="M4 4m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z"></path>
        <path d="M4 8l16 0"></path> <path d="M8 4l0 4"></path>
      </svg>
    </a>
  )
}

export default Frontend