function TopBar(){
    return(
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
    )
}

export default TopBar;