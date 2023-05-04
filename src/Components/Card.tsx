import {AiFillGithub,AiFillLinkedin} from "react-icons/ai"

function Card(){
    return(
            <div className="">
                <div className="w-60 h-40">
                    <div className="w-full h-full rounded-bl-tl rounded-tr-xl">
                        <img className="w-full object-cover md:w-48" src={''} alt="project"/>
                    </div>
                    <div className="flex items-center justify-center gap-6 bg-zinc-200 rounded-bl-xl rounded-br-xl">
                        <AiFillGithub className="text-3xl m-2"></AiFillGithub>
                        <button className="bg-green-400 px-4 rounded-md text-lg text-white">ver</button>
                    </div>
                </div>
                <div>
                    <h2>Projeto de TCC - Criticando</h2>
                </div>
            </div>
    )
}

export default Card;