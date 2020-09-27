import React from 'react'
import './Logo.css'

export default ({ isFooter }) => {
  const footerClass = isFooter ? 'logo-footer' : ''

  return (
    <div className={`Logo ${footerClass}`}>
      <img src="images/logo.gif" alt="" />
    </div>
  )
}
