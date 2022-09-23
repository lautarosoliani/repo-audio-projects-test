import React from 'react'
import ButtonCollapsible from './ButtonCollapsible'
import ImagePNG from './User.png'

export default function User () {
  return (
    <>
      <img src={ImagePNG} alt='User Avatar' style={{ width: '45px', height: '45px', borderRadius: '50%' }} />
      <ButtonCollapsible />
    </>
  )
}
