import { useState } from 'react'
import './App.css'
import Foto from "/Foto.png"

import {AiFillGithub,AiFillHtml5} from "react-icons/ai"
import {SiTailwindcss,SiJavascript} from "react-icons/si"
import {FaCss3Alt,FaPython,FaJava,FaNodeJs,FaLaravel,FaWhatsapp} from "react-icons/fa"
import {BsLinkedin} from "react-icons/bs"
import {TbApi} from "react-icons/tb"
import {GrReactjs} from "react-icons/gr"
import {TfiEmail} from "react-icons/tfi"

import Cards from './Components/Cards';


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
        <div className='px-12 w-104 h-96 flex items-center rounded-tr-3xl border-r-2 border-t-2 border-gray-400 max-md:w-80 max-md:h-72'>
          <div className=''>
            <h2 className='text-3xl font-bold text-justify max-md:text-3xl'>Desenvolvedor Backend</h2>
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
        <h2 className='text-3xl font-bold mt-16 mb-4'>Projetos</h2>
        <div className='flex flex-wrap'>
          <Cards></Cards>
          <div className='flex justify-center w-full mt-8'>
            <button className="bg-green-400 px-6 py-2 rounded-md text-lg text-white">Ver projetos</button>
          </div>
        </div>
      </div>
      <h2 className='text-3xl font-bold mt-16 mb-4'>Conhecimentos</h2>
      <div className='w-full flex justify-center mt-12'>
        <div className='w-2/3 flex justify-center flex-wrap gap-6 max-md:w-3/4'>
          <div className='flex flex-column wrap justify-center items-center gap-2'><AiFillHtml5 className='text-4xl'></AiFillHtml5><p>HTML</p></div>
          <div className='flex flex-column wrap justify-center items-center gap-2'><FaCss3Alt className='text-4xl'></FaCss3Alt><p>CSS</p></div>
          <div className='flex flex-column wrap justify-center items-center gap-2'><SiJavascript className='text-4xl'></SiJavascript><p>JavaScript</p></div>
          <div className='flex flex-column wrap justify-center items-center gap-2'><FaPython className='text-4xl'></FaPython><p>Python</p></div>
          <div className='flex flex-column wrap justify-center items-center gap-2'><FaJava className='text-4xl'></FaJava><p>Java</p></div>
          <div className='flex flex-column wrap justify-center items-center gap-2'><FaLaravel className='text-4xl'></FaLaravel><p>Laravel</p></div>
          <div className='flex flex-column wrap justify-center items-center gap-2'><FaNodeJs className='text-4xl'></FaNodeJs><p>NodeJS</p></div>
          <div className='flex flex-column wrap justify-center items-center gap-2'><GrReactjs className='text-4xl'></GrReactjs><p>ReactJS</p></div>
          <div className='flex flex-column wrap justify-center items-center gap-2'><TbApi className='text-4xl'></TbApi><p>API</p></div>
          <div className='flex flex-column wrap justify-center items-center gap-2'><SiTailwindcss className='text-4xl'></SiTailwindcss><p>TailwindCSS</p></div>
        </div>
      </div>
      <div className='flex justify-center w-full my-8'>
            <button className="bg-green-400 px-6 py-2 rounded-md text-lg text-white">Mais detalhes</button>
          </div>
      <div className='bg-zinc-900 w-full h-fit-content py-2 mt-20'>
        <div className='w-full flex max-md:flex-column '>
          <div className='w-1/3 max-md:w-full'>
            <p className='text-xl text-zinc-300'>Contatos</p>
            <div className='flex flex-row items-center gap-4'><FaWhatsapp className='text-3xl text-gray-400'></FaWhatsapp><p>(51)995893826</p></div>
            <div className='flex flex-row items-center gap-4'><TfiEmail className='text-3xl text-gray-400'></TfiEmail><p>thalis.trisch2003@gmail.com</p></div>
          </div>
          <div className='w-1/3  max-md:w-full'>
            <p className='text-xl text-zinc-300'>Redes sociais</p>
            <div className='flex flex-row items-center gap-4'>
              <a href="https://www.linkedin.com/in/thalis-trisch-b2879a220/">
                <BsLinkedin className='text-3xl text-gray-400'></BsLinkedin>
              </a>
              <p>@ThalisTrisch</p>
            </div>
            <div className='flex flex-row items-center gap-4'>
              <a href="https://github.com/ThalisTrisch">
                <AiFillGithub className='text-3xl text-gray-400'></AiFillGithub>
              </a>
              <p>@Thalis Trisch</p>
            </div>
          </div>
          <div className='w-1/3 max-md:w-full'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
