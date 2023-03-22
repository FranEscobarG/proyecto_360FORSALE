import Button from "../atoms/Button";
import Title from "../atoms/Title";
import WrapperInput from "../molecules/WrapperInput";
import Logo from '../../assets/img/logoSinFondo.png'

import '../../assets/styles/formRegister.css'

function FormRegister() {
    return ( 
        // <div className="contenedor_form">
            <div className="form_register">
                <Title>Registro</Title>
                <img src={Logo} alt="Logo de la empresa" className="logo_register" />
                <form>
                    <WrapperInput msn="Nombre(s)" type="text" placeholder="" />
                    <WrapperInput msn="Apellido(s)" type="text" placeholder="" />
                    <WrapperInput msn="Telefono" type="number" placeholder="" />
                    <WrapperInput msn="Direccion" type="text" placeholder="" />
                    <WrapperInput msn="Correo" type="E-mail" placeholder="" />
                    <WrapperInput msn="Password" type="password" placeholder="" />

                    <Button type="button" value="Registrarse"/>
                </form>
                
            </div>
            
        // </div>
        
     );
}

export default FormRegister;