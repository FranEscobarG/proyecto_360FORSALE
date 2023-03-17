import SubTittleA from "../atoms/SubTittleA";
import Redirector from "../atoms/Redirector";
import Img1 from '../../assets/img/Info1.svg'
import Img2 from '../../assets/img/Info2.svg'
import Img3 from '../../assets/img/Info3.svg'
import Img4 from '../../assets/img/Info4.svg'
import Img5 from '../../assets/img/Info5.svg'
import Img6 from '../../assets/img/Info6.svg'
import Img7 from '../../assets/img/Info7.svg'
import Img8 from '../../assets/img/Info8.svg'
import Img9 from '../../assets/img/Info9.svg'
import '../../assets/styles/wrapperInfo.css'
import Subtitle from "../atoms/Subtitle";

function WrapperInfo() {
    return (
        <div className="container_masInfo">
            <Subtitle>Mis Inmuebles Adquiridos</Subtitle>
            <div className="caption">
                <SubTittleA>Ultimas Noticias</SubTittleA>
            </div>
            <div className="section">
                <div className="cuerpo-tarjeta">
                    <img className="ImgInfo" src={Img1} alt="imagen informativa" />
                    <div className="descripcion">
                        <Redirector>Todo lo que debes saber antes de poner en venta un inmueble</Redirector>
                    </div>
                </div>
                <div className="cuerpo-tarjeta">
                <img className="ImgInfo" src={Img2} alt="imagen informativa" />
                    <div className="descripcion">
                        <Redirector>¿Que impuestos debo pagar al comprar o vender un inmueble?</Redirector>
                    </div>
                </div>
                <div className="cuerpo-tarjeta">
                    <div className="foto">
                        <img className="ImgInfo" src={Img3} alt="imagen informativa" />
                    </div>
                    <div className="descripcion">
                        <Redirector>Consejos de profecionales para decorar tu nuevo hogar</Redirector>
                    </div>
                </div>
            </div>

            <div className="caption2">
                <SubTittleA>Mercado Inmobiliario</SubTittleA>
            </div>
            <div className="section">
                <div className="cuerpo-tarjeta">
                    <div className="foto">
                        <img className="ImgInfo" src={Img4} alt="imagen informativa" />
                    </div>
                    <div className="descripcion">
                        <Redirector>Mercado inmoviliario en Mexico lejos de alcanzar la estabilidad</Redirector>
                    </div>
                </div>
                <div className="cuerpo-tarjeta">
                    <div className="foto">
                        <img className="ImgInfo" src={Img5} alt="imagen informativa" />
                    </div>
                    <div className="descripcion">
                        <Redirector>IA ayuda a encontrar la vivienda adeacuada</Redirector>
                    </div>
                </div>
                <div className="cuerpo-tarjeta">
                    <div className="foto">
                        <img className="ImgInfo" src={Img6} alt="imagen informativa" />
                    </div>
                    <div className="descripcion">
                        <Redirector>Antes de mudarte planealo bien para tener exito</Redirector>
                    </div>
                </div>
            </div>

            <div className="caption">
                <SubTittleA>Ultimas Noticias</SubTittleA>
            </div>
            <div className="section">
                <div className="cuerpo-tarjeta">
                    <div className="foto">
                        <img className="ImgInfo" src={Img7} alt="imagen informativa" />
                    </div>
                    <div className="descripcion">
                        <Redirector>Como pagar mi credito Hipotecario antes de tiempo</Redirector>
                    </div>
                </div>
                <div className="cuerpo-tarjeta">
                    <div className="foto">
                        <img className="ImgInfo" src={Img8} alt="imagen informativa" />
                    </div>
                    <div className="descripcion">
                        <Redirector>¿Cómo funciona la tasa de intereces en un credito?</Redirector>
                    </div>
                </div>
                <div className="cuerpo-tarjeta">
                    <div className="foto">
                        <img className="ImgInfo" src={Img9} alt="imagen informativa" />
                    </div>
                    <div className="descripcion">
                        <Redirector>¿Cuales son los plazos para pagar un credito hipotecario?</Redirector>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WrapperInfo;