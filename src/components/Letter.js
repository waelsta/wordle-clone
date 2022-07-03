import React from 'react'

function Letter(props) {
    console.log(props?.value)
  return (
    <div className='letter'>
        {
        props?.value ?? ""
        }
    </div>
  )
}

export default Letter