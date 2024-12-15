import React from 'react'
import Navbar from '../Component/Navbar'
import { FaReact } from 'react-icons/fa'

function TemplatesScreen() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen dark:bg-dark-gradient flex justify-center items-center">
      <h1 className='text-rose-500 flex gap-2 text-4xl '>
        <FaReact className='animate-spin-slow'/> Comming soon...
      </h1>
    </div>
    </>
  )
}

export default TemplatesScreen