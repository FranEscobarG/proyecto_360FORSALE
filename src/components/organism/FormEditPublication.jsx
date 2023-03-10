import Subtitle from "../atoms/Subtitle";
import WrapperEdit from "../molecules/WrapperEdit";
import ImgEditarPublicacion from '../../assets/img/casa.jpg'
import '../../assets/styles/formEditarPublicacion.css'

function FormEditPublication() {
    return ( 
        <>
            <div className='container_editarpublicacion'>
                <Subtitle>Editar publicacion</Subtitle>
                <div className="containerInfoEdit">
                    <div className='cuerpo_editar'>
                        <img className="ImgEditar" src={ImgEditarPublicacion} alt="imagen de su inmobiliario" />
                    </div>
                    <div className="cuerpo_editar">
                        <WrapperEdit type={"medium"} className='direccion' msn='Direccion:' info={"Colonia Teran, Tuxtla Gutiérrez, en Chiapas."}/>
                        <WrapperEdit type={"small"} msn='Precio:' info={"$100,000,000.00"}/>
                    </div>
                </div>
                <div className="containerInfoEdit">
                    <div className="cuerpo2_editar">
                        <WrapperEdit type={"description"} msn='Descripcion:' info={"Vendemos una casa. Tiene 6 habitaciones en el primer piso y 6 habitaciones en el segundo. Tiene garaje y sótano. Hay un jardín en frente. La casa tiene varias ventanas, es cómoda, espaciosa y fresca. Los baños, el techo, las paredes y todas las partes de la casa están en buen estado. La sala tiene una chimenea para que la casa se caliente durante el invierno. La casa luce antigua pero está muy bien cuidada. Hay suficiente espacio para construir aún más. Es bonita y está ubicada en un lugar seguro."}/>
                    </div>
                </div>
                <div className="containerInfoEdit">
                    <div className="cuerpo3_editar">
                        <button className="buttonEditar">Guardar cambios</button>
                    </div>
                </div>
            </div>
        </>
     );
}

export default FormEditPublication;