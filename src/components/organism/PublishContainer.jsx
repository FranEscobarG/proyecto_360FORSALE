import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import Subtitle from "../atoms/Subtitle";
import ButtonRectangle from "../atoms/ButtonRectangle";
import WrapperInputPublish from "../molecules/WrapperInputPublish";
import LabelPublish from "../atoms/LabelPublish";
import IconUpload from '../../assets/img/iconUpload.svg'
import IconSendVideo from '../../assets/img/iconSendVideo.svg'
import '../../assets/styles/PublishContainer.css'


function PublishContainer() {
    const form = useRef();
    const navigate = useNavigate();

    const redireccionarHArrendador = () => {
        navigate('/homeArrendador');
    }


    return (
        <div className="PublishContainers">
            <Subtitle>Publicar nuevo Inmueble</Subtitle>
            <form ref={form}>
                <div className="ContainerCards">
                    <div className="PublishCard">
                        <div className="Publish">
                            <h5 className="publisht">¿Que quieres publicar?</h5>
                            <div className="ContainerButton">
                                <ButtonRectangle type="button" value="Venta" />
                                <ButtonRectangle type="button" value="Renta" />
                            </div>
                            <div className="TipoI">
                                <LabelPublish msn={"Tipo de inmueble:"} />
                                <select className="tipodeinmueble" id='tipoinmueble' name='tipoinmueble' required>
                                    <option className="inmuebleselect" value='Casa' >Casa</option>
                                    <option className="inmuebleselect" value='Departamento'>Departamento</option>
                                    <option className="inmuebleselect" value='Condominio'>Condominio</option>
                                    <option className="inmuebleselect" value='Local comercial'>Local Comercial</option>
                                    <option className="inmuebleselect" value='Mansion'>Mansión</option>
                                </select>
                            </div>
                            <WrapperInputPublish msn="Precio:" type="number" placeholder="$" name={'precio'} />
                            <div className="uplodavideo">
                                <label className="info_video" htmlFor="">Ubicación del inmueble</label>
                            </div>
                            <div className="input_small">
                                <WrapperInputPublish small={true} msn="Pais:" type="text" placeholder="Mexico" name={'pais'} />
                                <WrapperInputPublish small={true} msn="Ciudad:" type="text" placeholder="Tuxtla Gutierrez, Chiapas" name={'ciudad'} />
                            </div>
                            <WrapperInputPublish msn="Dirección:" type="text" placeholder="Colonia ..., calle ..., #123" name={'direccion'} />

                        </div>
                    </div>
                    <div className="PublishCard">
                        <div className="container_Upload">
                            <h5 className="publisht">Inserta imagenes del inmueble</h5>
                            <StyledDivFile>
                                <input type="file" name="imagenes" id="file" accept="image/*" />
                                <label className="labelFile" htmlFor="file"><img src={IconUpload} alt="Icono de Archivo" /></label>
                            </StyledDivFile>
                            <div className="container_description">
                                <LabelPublish msn={"Especificaciones"}></LabelPublish>
                                <textarea rows="5" cols="50" className="input_description" name="detalles"></textarea>
                            </div>
                            <div className="uplodavideo">
                                <label className="info_video" htmlFor="">Para tener mejores resultados le recomendamos que proporcione un recorrido virtual</label>
                                <StyledDivVideo>
                                    <input type="file" name="video" id="video" accept="video/*" />
                                    <label className="labelVideo" htmlFor="video">Cargar Video <img src={IconSendVideo} alt="Icono de Archivo" /></label>
                                </StyledDivVideo>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container_Buttons">
                    <input className="button" type="button" value="Salir" onClick={redireccionarHArrendador}></input>
                    <input className="button btn_publish" type="button" value="Publicar"></input>
                </div>
            </form>

        </div >
    );
}

const StyledDivFile = styled.div`
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    #file{
        display: none;
    }
    .labelFile{
        min-height: 150px;
        min-width: 200px;
        background-color: #d7ebff;
        border-radius: 1rem;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: opacity 0.5s ease;
    }
    .labelFile:hover{
        opacity: 0.8;
    }
`

const StyledDivVideo = styled.div`
    width: 60%;
    #video{
        display: none;
    }
    .labelVideo{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 10%;
        font-family: 'Harmattan';
        font-size: 1.5rem;
        font-weight: 800;
        color: #2E97FF;
        border: 2px solid #2E97FF;
        border-radius: 8px;
        gap: 15px;
        cursor: pointer;
        transition: opacity 0.5s ease;
    }
    .labelVideo:hover{
        opacity: 0.6;
    }
    /* DISEÑO SE ADAPTA PARA MOVIL */
    @media screen and (max-width:800px) {
        width: 100%;
    }
`

export default PublishContainer;