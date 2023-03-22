import FormRegister from "../components/organism/FormRegister";
import '../assets/styles/formRegister.css'

function Register() {
    return ( 
        //Contenedor del formulario
        <div className="cover_container">
            <div className="contenedor_form">
                <FormRegister/>
            </div>
        </div>
        
        
     );
}

export default Register;