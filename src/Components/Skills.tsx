import {AiFillHtml5} from "react-icons/ai"
import {SiTailwindcss,SiJavascript,SiMongodb,SiTypescript} from "react-icons/si"
import {FaCss3Alt,FaPython,FaJava,FaNodeJs,FaLaravel} from "react-icons/fa"
import {TbApi} from "react-icons/tb"
import {GrReactjs,GrMysql} from "react-icons/gr"

import { useState } from "react"

function Skills(){

    const [skills, setSkills] = useState([
        {name: 'HTML',icon:<AiFillHtml5/>},
        {name: 'CSS',icon:<FaCss3Alt/>},
        {name: 'JavaScript',icon:<SiJavascript/>},
        {name: 'Python',icon:<FaPython/>},
        {name: 'Java',icon:<FaJava/>},
        {name: 'Laravel',icon:<FaLaravel/>},
        {name: 'NodeJS',icon:<FaNodeJs/>},
        {name: 'ReactJS',icon:<GrReactjs/>},
        {name: 'API',icon:<TbApi/>},
        {name: 'TailwindCSS',icon:<SiTailwindcss/>},
        {name: 'MySql',icon:<GrMysql/>},
        {name: 'MongoDB',icon:<SiMongodb/>},
        {name: 'TypeScript',icon:<SiTypescript/>}
    ])

    return(
        <>
            <div className='w-full flex justify-center mt-12'>
                <div className='w-2/3 flex justify-center flex-wrap gap-6 max-md:w-3/4'>
                    {skills.map((skill)=>{
                        return(
                            <div className='flex flex-column wrap justify-center items-center gap-2'><p className='text-4xl'>{skill.icon}</p><p>{skill.name}</p></div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Skills;
