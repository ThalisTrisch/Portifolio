import { useState } from 'react'
import './App.css'
import Foto from "/Foto.png"
import BigCard from './Components/BigCard';
import Card from './Components/Card';
function App() {

  return (
    <div className=' bg-white/100'>
      <header className='fixed bg-white/100 p-5 shadow-xl w-screen'>
        <div className='float-left ml-2'>
          <p className='text-2xl p-2'>Thalis Trisch</p>
        </div>
        <div className='flex space-x justify-beetween float-right mr-2 gap-4'>
          <a href="#"><button className='transition transform motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-zinc-100/60 rounded-md bg-white hover:shadow-md p-2'>Resumo</button></a>
          <a href="#"><button className='transition transform motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-zinc-100/60 rounded-md bg-white hover:shadow-md p-2'>Projetos</button></a>
          <a href="#"><button className='transition transform motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-zinc-100/60 rounded-md bg-white hover:shadow-md p-2'>Habilidades</button></a>
        </div>
      </header>
      <div className='w-full h-fit flex items-center justify-evenly flex-row flex-wrap pt-40'>
        <div className='pb-0 p-12 w-104 h-96 flex items-center rounded-tr-3xl border-r-2 border-t-2 border-gray-400'>
          <div className=''>
            <h2 className='text-3xl font-bold'>Desenvolvedor Full-Stack</h2>
            <p className='my-8 text-sm text-justify'>Olá, seja muito bem vindo(a) ao meu portifólio!<br/> Aqui será descrito minha jornada, projetos e <br/>habilidades referentes à área de programação</p>
          </div>
        </div>
        <div className='w-104 h-96 flex items-end rounded-bl-3xl border-b-2 border-l-2 border-gray-400 '>
          <img src={Foto} className='max-h-screen max-w-md pr-4'/>
        </div>
      </div>
      <div>
        <h2 className='text-3xl font-bold mt-12'>Projetos</h2>
        <div>
          <BigCard></BigCard>
          <Card></Card>
        </div>
      </div>
    </div>
  )
}

export default App;
