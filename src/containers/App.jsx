import {BrowserRouter, Routes, Route} from 'react-router-dom';
import EditPublication from '../pages/EditPublication';
import HomeArrendador from '../pages/HomeArrendador';
import HomerArrendatario from '../pages/HomerArrendatario';
import InformacionAdicional from '../pages/InformacionAdicional';
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import MisPublicacionesArrendador from '../pages/MisPublicacionesArrendador';
import NotFound from '../pages/NotFound';
import Register from "../pages/Register";

function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/homeArrendador" element={<HomeArrendador/>} />
                <Route path="/mispublicacionesArrendador" element={<MisPublicacionesArrendador/>} />
                <Route path="/masinfoarrendador" element={<InformacionAdicional/>} />
                <Route path="/editarpublicacion" element={<EditPublication/>} />


                <Route path="/homearrendatario" element={<HomerArrendatario/>} />

                <Route path="/*" element={<NotFound/>} /> 
            </Routes>
        </BrowserRouter>   
     );
}

export default App;