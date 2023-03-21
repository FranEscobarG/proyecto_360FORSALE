import SubTittleB from '../atoms/SubTittleB';
// import LabelEspecificacion from '../atoms/LabelEspecificacion';
import '../../assets/styles/divEspecificacion.css'

function DivEspecificacion( { msn, info } ) {
    return (  
        <>
            <div className='divEspecificacion'>
                <SubTittleB msn={msn} />
                <div className="info_especificacion">
                    {info}
                </div>
            </div>
        </>
    );
}

export default DivEspecificacion;