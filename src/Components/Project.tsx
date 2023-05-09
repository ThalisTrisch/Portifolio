import {AiFillGithub,AiFillLinkedin} from "react-icons/ai"
import Carousel from 'react-bootstrap/Carousel';
import Criticando from "/PrintCriticando_1.png"
import Pokedex from "/PrintPokedex_1.png"
import Chat from "/PrintChat_2.png"

function Skills(){
    return(
        <>
            <div className="flex justify-center w-full flex-wrap">
                <div className="flex flex-row w-full justify-center flex-wrap mb-12 gap-6 items-center">
                    <div className="w-80">
                        <img className="bg-zinc-100 rounded-xl border-zinc-800/50 border-2 w-80 h-40" src={Criticando} alt="project"/>
                        <a href="https://github.com/ThalisTrisch/FrontCriticando.git" target="_blanc"><button className="p-2 px-4 bg-zinc-200 my-4 rounded-xl border-zinc-800/50 border-2"><AiFillGithub className="text-3xl"/></button></a>
                    </div>
                    <div className='w-2/4 h-fit bg-zinc-200 max-md:w-80 rounded-xl px-6 py-6'>
                        <p className="text-2xl max-md:text-xl mb-2 text-justify pl-8"><strong>TCC - Criticando</strong></p>
                        <p className="text-md max-md:text-sm text-justify"> 
                        Esse projeto foi utilizado para a conclusão do meu ensino técnico onde eu deveria 
                        criar um software completo.
                            O Criticando consiste em uma plataforma web para exposição de críticas e teorias sobre obras de cinema, ajudando os usuários em uma escolha rápida de acordo com seu gosto pessoal.
                        </p>
                        <p className="text-md max-md:text-sm text-justify mt-2"> 
                            Principais tecnologias utilizadas: NodeJS, ReactJS, MySql, Firebase, API's: Google OAuth2.0 e The Movie Database
                        </p>
                    </div>
                </div>
                <div className="flex flex-row w-full justify-center flex-wrap-reverse mb-12 gap-6 items-center ">
                    <div className='w-2/4 h-fit bg-zinc-200 max-md:w-80 rounded-xl px-6 py-6'>
                        <p className="text-2xl max-md:text-xl mb-2 text-justify pl-8"><strong>Chat</strong></p>
                        <p className="text-md max-md:text-sm text-justify"> 
                            Esse projeto foi feito pois eu queria aprender a utilizar o MongoDB, que é um banco de dados não relacional. Então, para aprender a utilizá-lo, fiz um sistema de chat onde é utilizada a conta do google para o login.
                        </p>
                        <p className="text-md max-md:text-sm text-justify mt-2"> 
                            Principais tecnologias utilizadas: NodeJS, ReactJS, MongoDB, API's: Google OAuth2.0.
                        </p>
                    </div>
                    <div className="w-80">
                        <img className="bg-zinc-100 rounded-xl border-zinc-800/50 border-2 w-80 h-40" src={Chat} alt="project"/>
                        <a href="https://github.com/ThalisTrisch/FrontChat.git" target="_blanc"><button className="p-2 px-4 bg-zinc-200 my-4 rounded-xl border-zinc-800/50 border-2"><AiFillGithub className="text-3xl"/></button></a>
                    </div>
                </div>
                <div className="flex flex-row w-full justify-center flex-wrap mb-8 gap-6 items-center">
                    <div className="w-80">
                        <img className="bg-zinc-100 rounded-xl border-zinc-800/50 border-2 w-80 h-40" src={Pokedex} alt="project"/>
                        <div className="mt-4 flex items-center justify-center gap-4">
                            <a href="https://github.com/ThalisTrisch/PokedexProject.git" target="_blanc"><button className="p-2 px-4 bg-zinc-200 rounded-xl border-zinc-800/50 border-2"><AiFillGithub className="text-3xl"/></button></a>
                            <a href="https://pokedex-project-seven.vercel.app/" target="_blanc">
                                <button className=" text-xl text-white p-2 px-4 bg-green-400 rounded-xl border-green-400 border-2">acessar</button>
                            </a> 
                       </div>
                    </div>
                    <div className='w-2/4 h-fit bg-zinc-200 max-md:w-80 rounded-xl px-6 py-6'>
                        <p className="text-2xl max-md:text-xl mb-2 text-justify pl-8"><strong>Pokédex interativa</strong></p>
                        <p className="text-md max-md:text-sm text-justify"> 
                            Esse é um projeto clássico e muitas pessoas fazem para aprender a lidar com API, pois é possível trabalhar com os diversos dados que a api do PokéAPI fornece e construir o software da sua forma.
                            Utilizei typescript como base nesse projeto para praticar e aprender sobre essa tecnologia que me ajudou muito quando precisei tratar(tipar) os dados recebidos da API e então mostrá-los para o usuário. 
                        </p>
                        <p className="text-md max-md:text-sm text-justify mt-2"> 
                            Principais tecnologias utilizadas: NodeJS, ReactJS, typescript, API: PokéAPI.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills;