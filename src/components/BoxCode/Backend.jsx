import React from 'react'

const Backend = ({ style, uri }) => {
  
  return (
    <a href={uri} target='_blank'>
      <svg xmlns="http://www.w3.org/2000/svg" className='icon' viewBox="0 0 24 24" fill="none" stroke={style == "dark" ? "#ccc" : "#090C08"} strokeLinecap="round" strokeLinejoin="round" width="44" height="44" strokeWidth="2"> <path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0"></path> <path d="M4 6v6a8 3 0 0 0 16 0v-6"></path> <path d="M4 12v6a8 3 0 0 0 16 0v-6"></path> </svg>
    </a>
  )
}

export default Backend