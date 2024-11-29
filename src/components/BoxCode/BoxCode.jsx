import React from 'react'
import Frontend from './Frontend'
import Backend from './Backend'
import './BoxCode.css'

const BoxCode = ({ style, back, front, uriBack, uriFront }) => {
  return (
    <div className='boxRepositories'>
      <p>Repositorios:</p>
      <div className='boxUris'>
        {back && <Backend style={style} uri={uriBack} />}

        {front && <Frontend style={style} uri={uriFront} />}
      </div>
    </div>
  )
}

export default BoxCode