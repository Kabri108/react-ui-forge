import React from 'react'
import Navbar from '../Component/Navbar'
import { FaReact } from 'react-icons/fa'

function TemplatesScreen() {
  return (
    <>
    <Navbar/>
    <div className="flex items-center justify-center dark:bg-dark-gradient bg-light-gradient  h-screen py-20">
       <FaReact className='w-12 h-12 animate-spin-slow mx-4 text-rose-500'/>
       <h1 className='text-4xl sm:text-xl text-rose-500'>Comming Soon .....</h1> 
    </div>
    </>
  )
}

export default TemplatesScreen