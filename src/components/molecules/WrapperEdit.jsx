import SubTittleB from '../atoms/SubTittleB';
import TextAreaEdit from '../atoms/TextAreaEdit';
import '../../assets/styles/formEditarPublicacion.css'

function WrapperEdit( { type, msn, info, name } ) {
    return ( 
        <div className={`wrapper_editar ${type}`}>
            <SubTittleB msn={msn} />
            <TextAreaEdit value={info} name={name} />
        </div>
    );
}

export default WrapperEdit;