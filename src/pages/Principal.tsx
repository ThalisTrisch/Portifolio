import { useState } from 'react'
import Foto from "/Foto.png"

import {AiFillGithub,AiFillHtml5} from "react-icons/ai"
import {SiTailwindcss,SiJavascript,SiMongodb} from "react-icons/si"
import {FaCss3Alt,FaPython,FaJava,FaNodeJs,FaLaravel} from "react-icons/fa"
import {BsLinkedin} from "react-icons/bs"
import {TbApi} from "react-icons/tb"
import {GrReactjs,GrMysql} from "react-icons/gr"

import Cards from '../Components/Cards';
import Footer from '../Components/Footer'
import Skills from '../Components/Skills'

function Principal() {
  return (
    <div className=' bg-white/100'>
      <header className='fixed bg-white/100 p-2 shadow-xl w-screen'>
        <div className='float-left ml-2'>
          <p className='text-2xl p-3 space-x-0'>Thalis Trisch</p>
        </div>
        <div className='flex space-x justify-beetween float-right mr-2 gap-4'>
          <a href="#projetos"><button className='transition transform motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-zinc-100/60 rounded-md bg-white hover:shadow-md my-2 p-2'>Projetos</button></a>
          <a href="#conhecimentos"><button className='transition transform motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-zinc-100/60 rounded-md bg-white hover:shadow-md my-2 p-2 '>Conhecimentos</button></a>
          <a href="#resumo"><button className='transition transform motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-zinc-100/60 rounded-md bg-white hover:shadow-md my-2 p-2 hidden md:inline mr-4'>resumo</button></a>
        </div>
      </header>
      <div className='w-full h-fit flex items-center justify-evenly flex-row flex-wrap pt-40'>
        <div className='px-12 w-104 h-96 flex items-center rounded-tr-3xl border-r-2 border-t-2 border-gray-400 max-md:w-80 max-md:h-72'>
          <div className=''>
            <h2 className='text-3xl font-bold text-justify max-md:text-3xl'>Desenvolvedor Backend</h2>
            <p className='w-80 my-8 text-sm text-justify max-md:text-xs max-md:w-60'>Olá, seja muito bem vindo(a) ao meu portifólio! Aqui será descrito minha jornada, projetos e habilidades referentes à área de programação</p>
            <div className='flex flex-row gap-2'>
              <a href="https://github.com/ThalisTrisch" target="_blank"><AiFillGithub className='text-4xl'/></a>        
              <a href="https://www.linkedin.com/in/thalis-trisch-b2879a220/"  target="_blank"><BsLinkedin className='text-4xl'/></a>
            </div>
          </div>
        </div>
        <div className='w-104 h-96 flex items-end rounded-bl-3xl border-b-2 border-l-2 border-gray-400 max-md:h-72'>
          <img src={Foto} className='max-h-screen max-w-md pr-4 max-md:w-80'/>
        </div>
      </div>
      <div>
        <h2 className='text-3xl font-bold mt-20 mb-4' id="projetos">Projetos</h2>
        <div className='flex flex-wrap'>
          <Cards></Cards>
          <div className='flex justify-center w-full mt-8'>
            <a href="/projetos">
              <button className="bg-green-400 px-6 py-2 rounded-md text-lg text-white">Ver projetos</button>
            </a>
          </div>
        </div>
      </div>
      <h2 className='text-3xl font-bold mt-20 mb-4' id="conhecimentos">Conhecimentos</h2>
      <Skills></Skills>
      {/* <div className='flex justify-center w-full my-8 mb-20'>
        <a href="/conhecimentos">
          <button className="bg-green-400 px-6 py-2 rounded-md text-lg text-white">Mais detalhes</button>
        </a>
      </div> */}
      <h2 className='text-3xl font-bold mt-20 my-8' id="resumo">Sobre mim</h2>
      <div className='w-full flex  justify-center mb-12'>
        <div className='w-2/3 max-md:w-3/4'>
          <p className='text-justify text-sm'>&#160; &#160; &#160; &#160; &#160;Atualmente com 19 anos estou cursando análise e desenvolvimento de 
          sistemas no IFSUL câmpus Gravataí, na mesma instituição onde realizei o ensino médio por 4 anos e tive 
          contato com a área de TI por conta do ensino técnico de informática para internet. Ao longo do 
          meu aprendizado nessa área consegui me aperfeiçoar e adiquirir paixão e vontade de seguir na carreira de
          tecnologia almejando atuar futuramente como full stack.
          
          
          
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Principal;
