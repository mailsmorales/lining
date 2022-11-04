import React from 'react'
import { Header } from '../components/header/Header'
import HeroImg from '../assets/img/wade.jpg'

export const TheHomePage = () => {
  return (
    <>
    <div className='pt-8'>
    <Header />
      <img src={HeroImg} alt="" />
    </div>
    </>
  )
}
