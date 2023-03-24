import Label from "../atoms/LabelEspecificacion2";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import '../../assets/styles/Pay.css'

import Img1Especificacion from '../../assets/img/imgCarrusel1.jpg'
import Img2Especificacion from '../../assets/img/imgCarrusel2.jpg'
import Img3Especificacion from '../../assets/img/imgCarrusel3.jpg'
import Img4Especificacion from '../../assets/img/imgCarrusel4.jpg'
import Img5Especificacion from '../../assets/img/imgCarrusel5.jpg'

function FormPay({ msn, type, placeholder }) {
    return (
        <>

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

            <section className="container_formpay">
                <Label msn={"Generacion de referencia de pago"}></Label>
                <form className="formpay">
                    <div className="pay">
                        <Label msn={"Folio"}></Label>
                        <Input type={'text'} placeholder={'#'} />

                        <Label msn={"Nombre de arrendador"}></Label>
                        <Input type={'text'} placeholder={''} />

                        <Label msn={"Monto"}></Label>
                        <Input type={'text'} placeholder={'$'} />
                    </div>
                    <div className="pay">
                        <Label msn={"Numero de tarjeta"}></Label>
                        <Input type={'text'} placeholder={'- - -  - - -  - - - -'} />

                        <Label msn={"Fecha"}></Label>
                        <Input type={'date'} placeholder={''} />
                        <div className="container_btn">
                            <Button type="button" value="Generar referencia de pago" pay={true} />
                        </div>
                        
                    </div>
                </form>
            </section>

        </>
    );
}

export default FormPay;