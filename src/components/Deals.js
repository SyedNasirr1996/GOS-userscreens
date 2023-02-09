import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Deals() {
  return (
    <div className='d-flex flex-column  align-items-center' >
      <p className='deals-text'>GOS</p>
      <p className='deals-flash'>Flash</p>
      <div className='d-flex'>
      {/* <i className="fas fa-bolt"></i> */}
      <FontAwesomeIcon icon={faBolt} />
      <p className="shake">
        Deals</p>
      </div>
      
    </div>
  )
}

export default Deals
