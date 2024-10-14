import React from 'react'

const Title = ({className , titleName , h1className}) => {
  return (
    <div className={`${className}`}>
        <h1 className={` md:text-[64px] font-bold font-sub text-black ${h1className}`}>{titleName}</h1>
    </div>
  )
}

export default Title