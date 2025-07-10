import React from 'react'
import BoxCode from '../BoxCode/BoxCode'
import './Project.css'
import UsedTech from '../UsedTech/UsedTech'

const Project = ({ style, descriptionEs, descriptionEn, back, front, uriBack, uriFront, techs, title, img, alt, language }) => {
  return (
    <li className={`${style}Li liCardProject`}>
      <h3 className={`${style}H3 h3Project`}>{title}</h3>

      <div className='majorBox'>
        <img src={img} alt={alt} className='imgCardProject' />

        <div className='boxIcons'>
          <BoxCode language={language} back={back} front={front} uriBack={uriBack} uriFront={uriFront} style={style} />

          <UsedTech style={style} techs={techs} />
        </div>
      </div>



      <p className={`${style}P`}>{language === 'es' ? descriptionEs : descriptionEn}</p>
    </li>
  )
}

export default Project