import {AiFillGithub} from "react-icons/ai"
import {SiVercel} from "react-icons/si"
import {FaWhatsapp} from "react-icons/fa"
import {BsLinkedin} from "react-icons/bs"
import {TfiEmail} from "react-icons/tfi"

function Footer(){
    return(
      <div className='bg-zinc-900 w-full h-fit-content py-2 mt-20'>
        <div className='w-full flex justify-around max-md:justify-center max-md:gap-10 pb-2'>
          <div className='text-zinc-300'>
            <p className='text-xl '>Contatos</p>
            <div className='flex flex-row items-center gap-4 my-2'><FaWhatsapp className='text-3xl text-gray-400 max-md:text-xl'></FaWhatsapp><p className='max-md:text-xs'>(51)995893826</p></div>
            <div className='flex flex-row items-center gap-4'><TfiEmail className='text-3xl text-gray-400 max-md:text-xl'></TfiEmail><p className='max-md:text-xs'>thalis.trisch2003@gmail.com</p></div>
          </div>
          <div className='text-zinc-300 max-md:hidden '>
            <p className='text-xl '>Redes sociais</p>
            <div className='flex flex-row items-center gap-4 my-2'>
              <a href="https://www.linkedin.com/in/thalis-trisch-b2879a220/">
                <BsLinkedin className='text-3xl text-gray-400'></BsLinkedin>
              </a>
              <p className='max-md:text-xs'>@ThalisTrisch</p>
            </div>
            <div className='text-zinc-300 flex flex-row items-center gap-4'>
              <a href="https://github.com/ThalisTrisch">
                <AiFillGithub className='text-3xl text-gray-400'></AiFillGithub>
              </a>
              <p className='max-md:text-xs'>@Thalis Trisch</p>
            </div>
          </div>
          <div className='text-zinc-300'>
            <p className='text-xl'>...</p>
            <div className='flex flex-column wrap items-center justify-center gap-2'>
              <p className='max-md:text-xs my-3'>Hosted at Vercel</p>
              <a href="https:\\vercel.com">
                <div className='bg-black rounded-full w-fit p-2'><SiVercel className='text-sm text-gray-400'></SiVercel></div>
              </a>
            </div>
            <div  className='flex flex-row items-center justify-center gap-4'>
              <p className='max-md:text-xs'>Copyright©ThalisTrisch</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Footer;