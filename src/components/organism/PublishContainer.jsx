import Subtitle from "../atoms/Subtitle";
import ButtonRectangle from "../atoms/ButtonRectangle";
import WrapperInputPublish from "../molecules/WrapperInputPublish";
import LabelPublish from "../atoms/LabelPublish";
import '../../assets/styles/PublishContainer.css'


function PublishContainer() {
    return ( 
        <div className="PublishContainers">
            <Subtitle>Publicar nuevo Inmueble</Subtitle>
            <div className="ContainerCards">
                <div className="PublishCard">
                    <div className="Publish">
                        <h5 className="publisht">¿Que quieres publicar?</h5>
                        <div className="ContainerButton">
                            <ButtonRectangle type="button" value="VENTA" />
                            <ButtonRectangle type="button" value="RENTA"/>
                        </div>
                        <form>
                            <div className="TipoI">
                                <LabelPublish msn = {"Tipo de inmueble:"} />
                                <select className="tipodeinmueble" id='Tipo de Inmueble' name='tipo' required>
                                    <option className="inmuebleselect" value='Casa' >Casa</option>
                                    <option className="inmuebleselect" value='Departamento'>Departamento</option>
                                    <option className="inmuebleselect" value='Departamento'>Mansion de Playa</option>
                                </select>
                            </div>
                            <WrapperInputPublish msn="Lugar de Inmoviliario" type="text" placeholder="" />
                            <WrapperInputPublish msn="Precio" type="text" placeholder="" />
                        </form>
                    </div>
                </div>
                <div className="PublishCard">
                    <div className="Container_Upload">
                        <div className="uploadimagen">
                            <h5 className="publisht">Inserta imagenes del inmoviliario</h5>
                            <div className="file_u">
                                <input className="upload_file" type="file"></input>
                            </div>
                            <div className="money">
                                <LabelPublish className="cantidad_dinero" msn = {"Cantidad de dinero"}></LabelPublish>
                                <input className="Number_in" type="number"></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container_Buttons">
                <div className="Buttons_box">
                    <input className="Button_1" type="button" value="Salir"></input>
                    <input className="Button_2" type="button" value="Publicar"></input>
                </div>

            </div>
        </div>
    );
}

export default PublishContainer;