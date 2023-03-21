import SubTittleB from '../atoms/SubTittleB';
import TextAreaEdit from '../atoms/TextAreaEdit';
import '../../assets/styles/formEditarPublicacion.css'

function WrapperEdit( { type, msn, info} ) {
    return ( 
        <div className={`wrapper_editar ${type}`}>
            <SubTittleB msn={msn} />
            <TextAreaEdit value={info} />
        </div>
    );
}

export default WrapperEdit;