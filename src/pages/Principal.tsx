import Foto from "/Foto.png"

import {AiFillGithub} from "react-icons/ai"
import {BsLinkedin} from "react-icons/bs"

import TopBar from '../Components/TopBar'
import Project from '../Components/Project'
import Skills from '../Components/Skills'
import Footer from '../Components/Footer'

function Principal() {
  return (
    <div className=' bg-white/100'>
      <TopBar/>
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
        <h2 className='text-3xl font-bold mt-20 mb-20' id="projetos">Projetos</h2>
        <div className='flex flex-wrap'>
          <Project/>
        </div>
      </div>
      <h2 className='text-3xl font-bold mt-20 mb-4' id="conhecimentos">Conhecimentos</h2>
      <Skills/>
      <h2 className='text-3xl font-bold mt-20 my-8' id="resumo">Sobre mim</h2>
      <div className='w-full flex  justify-center mb-12'>
        <div className='w-2/3 max-md:w-3/4'>
          <p className='text-justify text-sm'>&#160; &#160; &#160; &#160; &#160;Atualmente com 21 anos estou cursando análise e desenvolvimento de 
          sistemas no IFSUL câmpus Gravataí, mesma instituição onde realizei o ensino médio por 4 anos e tive 
          contato com a área de TI por conta do ensino técnico de informática para internet. Ao longo do 
          meu aprendizado nessa área consegui me aperfeiçoar e adiquirir paixão e vontade de seguir na carreira de
          tecnologia almejando atuar futuramente como full stack em desenvolvimento web. Curso atualmente ADS no ifsul para continuar aprendendo novas habilidades e competências para atuar no mercado de trabalho como analista de dados ou desenvolvedor, que são minhas áreas de maior interesse.
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Principal;
