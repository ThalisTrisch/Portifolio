import {FunctionComponent, ReactNode} from 'react'

interface Cards{children?: ReactNode, name?:string}

const Teste: FunctionComponent<Cards> = (props) => {
    return(
        <div>
           <div>
                <p>olá {props.name}, </p>
                {props.children &&
                    props.children
                }
           </div>
        </div>
    )
}

export default Teste