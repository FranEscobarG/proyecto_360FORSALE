import Subtitle from "../atoms/Subtitle";
import DivEspecificacion from "../molecules/DivEspecificacion";
import WrapperInputEspecificacion from "../molecules/WrapperInputEspecificacion";
import Img1Especificacion from '../../assets/img/imgCarrusel1.jpg'
import Img2Especificacion from '../../assets/img/imgCarrusel2.jpg'
import Img3Especificacion from '../../assets/img/imgCarrusel3.jpg'
import Img4Especificacion from '../../assets/img/imgCarrusel4.jpg'
import Img5Especificacion from '../../assets/img/imgCarrusel5.jpg'
import '../../assets/styles/containerEspecificacionArrendatario.css'
import { useNavigate } from "react-router-dom";

function ContainerEspecificacionArrendatario() {
    const navigate = useNavigate();

    const redirecRefPago = () => {
        navigate("/generacionpago")
    };

    return (
        <>
            <div className='container_especificacion'>
                <div className="grid">
                    <div>
                        <img className="ImgDemostrativa" src={Img5Especificacion} alt="imagen del inmoviliario interesado" />
                    </div>
                    <div className="grid_container">
                        <img className="ImgDemostrativa" src={Img1Especificacion} alt="imagen del inmoviliario interesado" />
                        <img className="ImgDemostrativa" src={Img2Especificacion} alt="imagen del inmoviliario interesado" />
                        <img className="ImgDemostrativa" src={Img3Especificacion} alt="imagen del inmoviliario interesado" />
                        <img className="ImgDemostrativa" src={Img4Especificacion} alt="imagen del inmoviliario interesado" />
                    </div>
                </div>

                <div className="grid2">
                    <div className="especificacion">
                        <Subtitle>Titulo del inmueble en venta o renta</Subtitle>
                        <DivEspecificacion msn='Especificacion y caracteristicas' info='Lorem ipsum dolor sit amet consectetur adipiscing, elit sollicitudin id integer leo cubilia, netus litora nisi molestie condimentum. Lorem ipsum dolor sit amet consectetur adipiscing, elit sollicitudin id integer leo cubilia, netus litora nisi molestie condimentum. Lorem ipsum dolor sit amet consectetur adipiscing, elit sollicitudin id integer leo cubilia, netus litora nisi molestie condimentum.' />
                        <div className="grid_container2">
                            <div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122259.72483106093!2d-93.21197144079207!3d16.745981201162806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd85611d06e8f%3A0xdd78bd7b4662216a!2sTuxtla%20Guti%C3%A9rrez%2C%20Chis.!5e0!3m2!1ses-419!2smx!4v1679025912970!5m2!1ses-419!2smx" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <div>
                                <DivEspecificacion msn='Detalles y ubicacion' info='Lorem ipsum dolor sit amet consectetur adipiscing, elit sollicitudin id integer leo cubilia, netus litora nisi molestie condimentum.Lorem ipsum dolor sit amet consectetur adipiscing, elit sollicitudin id integer leo cubilia, netus litora nisi molestie condimentum.Lorem ipsum dolor sit amet consectetur adipiscing, elit sollicitudin id integer leo cubilia, netus litora nisi molestie condimentum.' />
                            </div>
                        </div>
                    </div>
                    <div className="comunicacion">
                        <div className="grid_container3">
                            <input className="botones" type="button" value="Mensaje" />
                            <input className="botones" type="button" value="Vista virtual" />
                        </div>
                        <div className="titulo">
                            Contacta al venderdor acá
                        </div>
                        <div className="datos">
                            <form>
                                <WrapperInputEspecificacion msn="Telefono" type="number" placeholder="Escriba su numero" />
                                <WrapperInputEspecificacion msn="Nombre" type="text" placeholder="Escriba su nombre" />
                                <WrapperInputEspecificacion msn="Correo" type="E-mail" placeholder="Escriba su nombre correo" />
                                <WrapperInputEspecificacion msn="Mensaje" type="text" placeholder="Escriba su mensaje" />
                            </form>
                        </div>
                        <div className="botonf">
                            <button className="buttonEspecificacion">Enviar</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="container_Buttons">
                <input className="button" type="button" value="Comprar" onClick={redirecRefPago}></input>
            </div>
        </>
    );
}

export default ContainerEspecificacionArrendatario;