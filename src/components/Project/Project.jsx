import React from 'react'
import BoxCode from '../BoxCode/BoxCode'
import './Project.css'
import UsedTech from '../UsedTech/UsedTech'

const Project = ({ style, description, back, front, uriBack, uriFront, techs, title, img, alt }) => {
  return (
    <li className={`${style}Li liCardProject`}>
      <h3 className={`${style}H3 h3Project`}>{title}</h3>

      <div className='majorBox'>
        <img src={img} alt={alt} className='imgCardProject' />

        <div className='boxIcons'>
          <BoxCode back={back} front={front} uriBack={uriBack} uriFront={uriFront} style={style} />

          <UsedTech style={style} techs={techs} />
        </div>
      </div>



      <p className={`${style}P`}>{description}</p>
    </li>
  )
}

export default Project