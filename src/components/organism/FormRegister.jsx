import { useNavigate } from "react-router-dom";
import { useRef } from "react";

import Button from "../atoms/Button";
import Title from "../atoms/Title";
import WrapperInput from "../molecules/WrapperInput";
import Logo from '../../assets/img/logoSinFondo.png'

import '../../assets/styles/formRegister.css'

function FormRegister({typeUser}) {
    const form = useRef()
    const navigate = useNavigate();

    let endpoint = '';
    if(typeUser=='arrendador'){
        endpoint = 'http://3.93.223.241/lessor/create';
    }
    else if(typeUser=='arrendatario'){
        endpoint = 'http://3.93.223.241/tenant/create';
    }
    
    const handlerClick = (e)=>{
        e.preventDefault();
        const newForm = new FormData(form.current)
        
        let options = {}
        if(typeUser=='arrendador'){
            options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: newForm.get('nombre'),
                    lastname: newForm.get('apellido'),
                    email: newForm.get('correo'),
                    phone: newForm.get('telefono'),
                    country: newForm.get('pais'),
                    city: newForm.get('ciudad'),
                    accountNum: newForm.get('numCuenta'),
                    password: newForm.get('contrasenia')
                })
            }
        }
        else if(typeUser=='arrendatario'){
            options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: newForm.get('nombre'),
                    lastname: newForm.get('apellido'),
                    email: newForm.get('correo'),
                    phone: newForm.get('telefono'),
                    country: newForm.get('pais'),
                    city: newForm.get('ciudad'),
                    password: newForm.get('contrasenia')
                })
            }
        }
        
        fetch(endpoint, options) 
        .then(response => response.json())
        .then(data => {
            alert("Usuario registrado exitosamente!");
            navigate(`/login/${typeUser}`);
        });
    }


    return (
        <div className="form_register">
            <Title>Registro</Title>
            <img src={Logo} alt="Logo de la empresa" className="logo_register" />
            <form ref={form}>
                <WrapperInput msn="Nombre(s)" type="text" placeholder="" name={'nombre'} />
                <WrapperInput msn="Apellido(s)" type="text" placeholder="" name={'apellido'} />
                <WrapperInput msn="Telefono" type="number" placeholder="" name={'telefono'} />
                <WrapperInput msn="Pais" type="text" placeholder="" name={'pais'} />
                <WrapperInput msn="Ciudad" type="text" placeholder="" name={'ciudad'} />
                <WrapperInput msn="Correo" type="E-mail" placeholder="" name={'correo'} />
                { (typeUser=="arrendador") ? <WrapperInput msn="Numero de cuenta" type="text" placeholder="" name={'numCuenta'} /> : ''}
                <WrapperInput msn="Password" type="password" placeholder="" name={'contrasenia'} />

                <Button type="button" value="Registrarse" handlerClick={handlerClick} />
            </form>

        </div>

    );
}

export default FormRegister;