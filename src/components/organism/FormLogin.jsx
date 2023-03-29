import { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { Link } from "react-router-dom";
import Button from "../atoms/Button";
import Title from "../atoms/Title";
import WrapperInput from "../molecules/WrapperInput";
import Logo from '../../assets/img/logoSinFondo.png'
import '../../assets/styles/formRegister.css'

function FormLogin({ typeUser }) {
    const navigate = useNavigate();
    const form = useRef();

    // const logged = useContext(UserContext);

    let endpoint = '';
    if (typeUser == 'arrendador') {
        endpoint = 'http://3.93.223.241/lessor/getAll';
    }
    else if (typeUser == 'arrendatario') {
        endpoint = 'http://3.93.223.241/tenant/getAll';
    }

    const handlerClick = () => {
        const newForm = new FormData(form.current);

        fetch(endpoint)
            .then((response) => response.json())
            .then((data) => {
                if (isValidate(data, newForm.get("correo"), newForm.get("contrasenia"))) {
                    // console.log('este es la data' +data)
                    // logged.setisLogged(true)
                    // console.log(logged.isLogged)
                    // console.log('este es el user del context:'+logged.user)
                    alert('Bienvenido!');
                    navigate(`/home${typeUser}`);
                } else {
                    alert('ERROR DE AUTENTIFICACION. Correo o contraseña no coinciden.');
                }

            });
    };
    function isValidate (users, correo, contrasenia){
        let validated = false;
        let userFound = users.filter(user => user.email === correo && user.password === contrasenia).map(user => user);
        if(userFound.length > 0){
            validated =  true;
        }
        console.log(JSON.stringify(userFound.id))
        setLocalStorage(userFound.id);
        return validated;
    }
    const setLocalStorage = value => {
        try {
            window.localStorage.setItem("useId", value)
        } catch (error) {
            console.error(error)
        }
    }
    // const item = window.localStorage.getItem("useId"); // Para obtener el valor del local storage

    return (

        <div className="form_register">
            <Title>Inicio de Sesión</Title>
            <img src={Logo} alt="Logo de la empresa" className="logo_register" />
            <form ref={form}>
                <WrapperInput msn="Correo" type="E-mail" placeholder="" name={'correo'} />
                <WrapperInput msn="Password" type="password" placeholder="" name={'contrasenia'} />

                <Button type="button" value="Iniciar Sesion" handlerClick={handlerClick} />
                <Link className="link" to="/inicio">Regístrarse</Link>
            </form>

        </div>

        // </div>

    );
}

export default FormLogin;