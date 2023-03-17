import styled from "styled-components";
import Footer from "../components/molecules/Footer";
import Navbar from "../components/molecules/Navbar";
import IconUpload from '../assets/img/iconUpload.svg'
import PublishContainer from "../components/organism/PublishContainer";

function PublishProperty() {
    return ( 
        <>
            <Navbar/>
            <PublishContainer></PublishContainer>
            <Footer/>
            {/* <StyledDivFile>
                <input type="file" name="" id="file" accept="image/*" />
                <label className="labelFile" htmlFor="file"><img src={IconUpload} alt="Icono de Archivo" /></label>
            </StyledDivFile> */}
        </>
     );
}

// const StyledDivFile = styled.div`
//     height: 50vh;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     #file{
//         display: none;
//     }
//     .labelFile{
//         min-height: 150px;
//         min-width: 200px;
//         background-color: #d7ebff;
//         border-radius: 1rem;
//         position: absolute;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//     }
    
// `

export default PublishProperty;