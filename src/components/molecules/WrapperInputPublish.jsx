import LabelPublish from "../atoms/LabelPublish";
import InputPublish from "../atoms/InputPublish";
import '../../assets/styles/PublishContainer.css'

function WrapperInputPublish({ small, msn, type, placeholder, name }) {
    return (
        <div className="wrapper_inputpublish">
            <LabelPublish msn={msn} ></LabelPublish>
            <InputPublish type={type} placeholder={placeholder} small={small} name={name} />
        </div>
    );
}

export default WrapperInputPublish;