import React from 'react'

const Button = ({label,iconURL}) => {
  return (
    <button className='
    flex justify-center 
    items-center gap-1
    px-7 py-4
    bg-coral-red
    rounded-full
    text-lg text-white border
    border-coral-red
    leading-none font-montserrat
    '>
        {label}
        <img 
        src ={iconURL}
        alt = "arrow right icon"

        className='ml-4 rounded-full h-5 w-5'

        
    />
    


    </button>

  )
}

export default Button