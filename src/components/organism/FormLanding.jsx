import { Link, useNavigate } from "react-router-dom";
import Button from "../atoms/Button";
import Label from "../atoms/Label";
import Title from "../atoms/Title";
import Logo from '../../assets/img/logoSinFondo.png'

import '../../assets/styles/InfoLogin.css'


function FormLanding() {
    const navigate = useNavigate();

    const handlerClick = (e)=> {
        e.preventDefault();
        navigate("/login/arrendador");
    }


    return ( 
        <div className="info_landing">
            <Title>360° FOR SALE</Title>
            <img src={Logo} alt="Logo de la empresa" className="logo_register" />
            <Label msn={"UNA PERSPECTIVA UNICA PARA TU PROXIMO HOGAR"} ></Label>
            <form>
                <Label msn="Unete a nosotros como"></Label>
                <Button type="button" value="Arrendador" handlerClick={handlerClick} />

                <Link className="link" to="/login/arrendatario">Arrendatario</Link>
            </form>
        </div>
     );
}

export default FormLanding;