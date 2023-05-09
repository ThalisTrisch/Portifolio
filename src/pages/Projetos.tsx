// import Projects from ""
import TopBar from "../Components/TopBar"
import Projects from "../Components/Projects"
import Footer from "../Components/Footer";

function Projetos(){
    return(
        <>
            <TopBar></TopBar>
            <p className='text-3xl font-bold pt-40 mb-16'>Principais projetos</p>
            <Projects></Projects>
            <Footer></Footer>
        </>
    )
}

export default Projetos;