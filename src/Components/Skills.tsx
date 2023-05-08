import {AiFillHtml5} from "react-icons/ai"
import {SiTailwindcss,SiJavascript,SiMongodb} from "react-icons/si"
import {FaCss3Alt,FaPython,FaJava,FaNodeJs,FaLaravel} from "react-icons/fa"
import {TbApi} from "react-icons/tb"
import {GrReactjs,GrMysql} from "react-icons/gr"

function Skills(){
    return(
        <>
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
                    <div className='flex flex-column wrap justify-center items-center gap-2'><GrMysql className='text-4xl'></GrMysql><p>MySql</p></div>
                    <div className='flex flex-column wrap justify-center items-center gap-2'><SiMongodb className='text-4xl'></SiMongodb><p>MongoDB</p></div>
                </div>
            </div>
        </>
    )
}

export default Skills;
