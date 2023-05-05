import {AiFillGithub,AiFillLinkedin} from "react-icons/ai"
import Carousel from 'react-bootstrap/Carousel';
import Criticando from "/criticandotransparente.png"

function Cards(){
    return(
            <div className="flex flex-row justify-center w-full flex-wrap gap-8">
                <div className="w-80 h-40 my-6">
                    <div className="bg-zinc-400 w-auto h-full rounded-tl-xl rounded-tr-xl flex items-center justify-center">
                    <img className="w-full md:w-48" src={Criticando} alt="project"/>
                    </div>
                    <div className="flex items-center justify-center bg-zinc-200 rounded-bl-xl rounded-br-xl">
                        <AiFillGithub className="text-3xl m-2"></AiFillGithub>
                    </div>
                </div>
                <div className="w-80 h-40 my-6">
                    <div className="bg-zinc-400 w-full h-full rounded-tl-xl rounded-tr-xl flex items-center justify-center">
                        <img className="w-full md:w-48" src={Criticando} alt="project"/>
                    </div>
                    <div className="flex items-center justify-center bg-zinc-200 rounded-bl-xl rounded-br-xl">
                        <AiFillGithub className="text-3xl m-2"></AiFillGithub>
                    </div>
                </div>
                <div className="w-80 h-40 my-6 mb-12">
                    <div className="bg-zinc-400 w-full h-full rounded-tl-xl rounded-tr-xl flex items-center justify-center">
                        <img className="w-full md:w-48" src={Criticando} alt="project"/>
                    </div>
                    <div className="flex items-center justify-center bg-zinc-200 rounded-bl-xl rounded-br-xl">
                        <AiFillGithub className="text-3xl m-2"></AiFillGithub>
                    </div>
                </div>
            </div>
    )
}

export default Cards;