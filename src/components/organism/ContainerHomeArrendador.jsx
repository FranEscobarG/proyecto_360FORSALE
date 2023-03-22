import { useNavigate } from "react-router-dom";
import Title from "../atoms/Title";
import '../../assets/styles/homeArrendador.css'


function ContainerHomeArrendador() {
    const navigate = useNavigate();

    const redireccionarPublicar = ()=> {
        navigate('/publicarinmueble');
    }

    return ( 
        <>
            <div className="cover-home_arrendador">
                <Title>VENDER TU INMUEBLE CON NOSOTROS AHORA ES MÁS FACÍL</Title>
                <button className="btn_homeArrendador" onClick={redireccionarPublicar}>Comenzar a vender</button>
            </div>
            
            <div className="caption-home_arrendador">
                <h3>NOSOTROS NOS ENCARGAMOS DE ENCONTRAR A TU PROXIMO ARRENDATARIO</h3>
            </div>
        </>
        
     );
}

export default ContainerHomeArrendador;