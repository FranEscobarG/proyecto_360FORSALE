import FormLanding from "../components/organism/FormLanding";
import '../assets/styles/InfoLogin.css'

function Landing() {
    return ( 
        <div className="cover_container-landing">
            <div className="contenedor_formLanding">
                <FormLanding/>
            </div>
        </div>
        
    );
}

export default Landing;