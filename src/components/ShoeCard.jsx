import React from 'react'

const ShoeCard = ({imageURL,changeBigShoeImage,BigShoeImage}) => {

    const handleClick =() =>{
        if(BigShoeImage != imageURL.bigShoe)
        {
            changeBigShoeImage(imageURL.bigShoe)
        }
    }
  return (
    <div className={`border2
        rounded-xl
        ${BigShoeImage === imageURL ? 'border-coral-red ': 'border-transparent'}
        cursor-pointer max-sm:flex-1
    `}
    onClick = {handleClick}
    >
        <div

        className='
        flex justify-center items-center
        bg-cover bg-center bg-card sm:w-40 sm:h-40 max-sm:p-4
        '
        >
            <img src = {imageURL.thumbnail}
            alt='shoe collection'
            width ={127}
            height={103}
            className="object-contain"
            />

        </div>

    </div>
  )
}

export default ShoeCard