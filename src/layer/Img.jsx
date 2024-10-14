import React from 'react'

const Img = ({className, src}) => {
  return (
    <div className="inline-block">
        <img className={`block ${className}`} src={src} alt={src} />
    </div>
  )
}

export default Img