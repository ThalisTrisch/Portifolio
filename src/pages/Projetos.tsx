// import Projects from ""
import TopBar from "../Components/TopBar"
import Projects from "../Components/Projects"
import Footer from "../Components/Footer";

function Projetos(){
    return(
        <>
            <TopBar></TopBar>
            <h2 className='text-3xl font-bold pt-40 mb-16' id="projetos">Principais projetos</h2>
            <Projects></Projects>
            <Footer></Footer>
        </>
    )
}

export default Projetos;