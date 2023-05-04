import { useState } from 'react'
import './App.css'
import Foto from "/Foto.png"

import {AiFillGithub,AiFillLinkedin} from "react-icons/ai"
import {BsLinkedin} from "react-icons/bs"

import Card from './Components/Card';


function App() {

  return (
    <div className=' bg-white/100'>
      <header className='fixed bg-white/100 p-2 shadow-xl w-screen'>
        <div className='float-left ml-2'>
          <p className='text-2xl p-3 space-x-0'>Thalis Trisch</p>
        </div>
        <div className='flex space-x justify-beetween float-right mr-2 gap-4'>
          <a href="#"><button className='transition transform motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-zinc-100/60 rounded-md bg-white hover:shadow-md my-2 p-2 hidden md:inline'>Resumo</button></a>
          <a href="#"><button className='transition transform motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-zinc-100/60 rounded-md bg-white hover:shadow-md my-2 p-2'>Projetos</button></a>
          <a href="#"><button className='transition transform motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-zinc-100/60 rounded-md bg-white hover:shadow-md my-2 p-2 mr-4'>Habilidades</button></a>
        </div>
      </header>
      <div className='w-full h-fit flex items-center justify-evenly flex-row flex-wrap pt-40'>
        <div className='pb-0 p-12 w-104 h-96 flex items-center rounded-tr-3xl border-r-2 border-t-2 border-gray-400 max-md:w-80'>
          <div className=''>
            <h2 className='text-3xl font-bold max-md:text-2xl'>Desenvolvedor Backend</h2>
            <p className='w-80 my-8 text-sm text-justify max-md:text-xs max-md:w-60'>Olá, seja muito bem vindo(a) ao meu portifólio! Aqui será descrito minha jornada, projetos e habilidades referentes à área de programação</p>
            <div className='flex flex-row gap-2'>
              <AiFillGithub className='text-4xl'/>          
              <BsLinkedin className='text-4xl'/>  
            </div>
          </div>
        </div>
        <div className='w-104 h-96 flex items-end rounded-bl-3xl border-b-2 border-l-2 border-gray-400 max-md:h-72'>
          <img src={Foto} className='max-h-screen max-w-md pr-4 max-md:w-80'/>
        </div>
      </div>
      <div>
        <h2 className='text-3xl font-bold my-12'>Projetos</h2>
        <div className='flex flex-wrap'>
          <Card></Card>
        </div>
      </div>
    </div>
  )
}

export default App;
