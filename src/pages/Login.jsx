import { useParams } from "react-router-dom";
import FormLogin from "../components/organism/FormLogin";
// import '../assets/styles/FormLogin.css'

function Login() {
    const params = useParams();
    console.log(params.typeUser)

    return ( 
        <div className="cover_containerLogin">
            <div className="contenedor_form">
                <FormLogin typeUser={params.typeUser} />
            </div>
        </div>
        
     );
}

export default Login;