import React from 'react'
import Frontend from './Frontend'
import Backend from './Backend'
import './BoxCode.css'
import { translation } from '../../translation'

const BoxCode = ({ style, back, front, uriBack, uriFront, language }) => {
  return (
    <div className='boxRepositories'>
      <p>{translation[language].projects.repositories}</p>
      <div className='boxUris'>
        {back && <Backend style={style} uri={uriBack} />}

        {front && <Frontend style={style} uri={uriFront} />}
      </div>
    </div>
  )
}

export default BoxCode