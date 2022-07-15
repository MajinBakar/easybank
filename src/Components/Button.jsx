import React from 'react'

const Button = ({text}) => {
  return (
<div>
    <button className='font-public rounded-full bg-gradient-to-r from-green-400 to-teal-600 text-white  text-[0.9rem] font-bold px-8 py-2 hover:opacity-80'>{text}</button>
</div>
  )
}

export default Button