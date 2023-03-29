import Subtitle from '../atoms/Subtitle';
import WrapperEdit from '../molecules/WrapperEdit';
import Button from '../atoms/Button';

import '../../assets/styles/perfil.css'

function ContainerPerfil() {
    const users = [
        {
            id: 1,
            nombre: 'Luis Adrian',
            apellidos: 'Pozo Gomez',
            email: 'pozol@gmail.com',
            telefono: '961 693 7892',
            pais: 'Peru',
            ciudad: 'Lima',
            numCuenta: '2212 181 234',
            contraseña: 'pozolit0123'
        },
    ]


    return (
        <>
            <div className="cover-miperfil">
                <Subtitle>Mi perfil</Subtitle>
                <form className='form_perfil'>
                    <div className="container_nombre">
                        <div className='icon_perfil'>
                            {users[0].nombre.toString()[0] + users[0].apellidos.toString()[0]}
                        </div>
                        <WrapperEdit type={"input_name"} msn='Nombre:' info={users[0].nombre.toString() + ' ' + users[0].apellidos.toString()} name={'nombre'} />
                    </div>

                </form>
            </div>
            {/* LOS DOS FORMULARIOS IRA REFERENCIADOS AL MISMO ref */}
            <form className='formperfil_part2'>
                <div className="container_inputs">
                    <WrapperEdit type={"input_perfil"} msn='Correo:' info={ users[0].email.toString() } name={''} />
                    <WrapperEdit type={"input_perfil"} msn='Telefono:' info={ users[0].telefono.toString() } name={''} />
                    <WrapperEdit type={"input_perfil"} msn='Pais:' info={ users[0].pais.toString() } name={''} />
                    <WrapperEdit type={"input_perfil"} msn='Ciudad:' info={ users[0].ciudad.toString() } name={''} />
                    <WrapperEdit type={"input_perfil"} msn='Contraseña:' info={ users[0].contraseña.toString() } name={'password'} />
                    <WrapperEdit type={"input_perfil"} msn='Numero de cuenta:' info={ users[0].numCuenta.toString() } name={'numcuenta'} />
                    <Button type="button" value="Guardar cambios" pay={true} />
                </div>
            </form>
        </>
    );
}

export default ContainerPerfil;