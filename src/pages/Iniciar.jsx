import FormIniciar from "../components/organism/FormIniciar";
import '../assets/styles/InfoLogin.css'

function Iniciar() {
    return ( 
        <div className="cover_container-landing">
            <div className="contenedor_formLanding">
                <FormIniciar/>
            </div>
        </div>
        
    );
}

export default Iniciar;