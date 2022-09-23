import React from 'react'
import Image from './User.png'

export default function User () {
  return (
    <img src={Image} alt='User Avatar' style={{ width: '45px', height: '45px', borderRadius: '50%' }} />
  )
}
