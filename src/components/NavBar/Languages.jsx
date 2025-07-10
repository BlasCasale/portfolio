import React from 'react'

const Languages = ({ language, changeLanguage }) => {
  return (
    <>
      <button onClick={changeLanguage} className='btnLanguage'>
        {
          language === 'en' ?
            <img src="https://flagcdn.com/w40/ar.png" alt="Español" width="34" />
            :
            <img src="https://flagcdn.com/w40/us.png" alt="English" width="34" />
        }
      </button>
    </>
  )
}

export default Languages