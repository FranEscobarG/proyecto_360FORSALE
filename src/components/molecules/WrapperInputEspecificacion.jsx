import Input from "../atoms/Input";
import Label from "../atoms/LabelEspecificacion2";
import '../../assets/styles/wrapperInput.css';

function WrapperInputEspecificacion( {msn, type, placeholder} ) {
    return ( 
        <div className="wrapper_input">
            <Label msn={msn} ></Label>
            <Input type={type} placeholder={placeholder} />
        </div>
     );
}

export default WrapperInputEspecificacion;