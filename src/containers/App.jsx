import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CatalogFiltered from '../pages/CatalogFiltered';
import EditPublication from '../pages/EditPublication';
import HomeArrendador from '../pages/HomeArrendador';
import HomerArrendatario from '../pages/HomerArrendatario';
import InformacionAdicional from '../pages/InformacionAdicional';
import InformacionAdicionalTwo from '../pages/InformacionAdicionalTwo';
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import MisInmueblesArrendatario from '../pages/MisInmueblesArrendatario.jsx';
import MisPublicacionesArrendador from '../pages/MisPublicacionesArrendador';
import PublishProperty from '../pages/PublishProperty';
import Register from "../pages/Register";
import NotFound from '../pages/NotFound';
import EspecificacionArrendatario from '../pages/EspecificacionArrendatario';

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
                <Route path="/publicarinmueble" element={<PublishProperty/>} />


                <Route path="/homearrendatario" element={<HomerArrendatario/>} />
                <Route path="/masinfoarrendatario" element={<InformacionAdicionalTwo/>} />
                <Route path="/misinmueblesarrendatario" element={<MisInmueblesArrendatario/>} />
                <Route path="/catalogofiltrado" element={<CatalogFiltered/>} />
                <Route path="/especificacionarrendatario" element={<EspecificacionArrendatario/>} />

                <Route path="/*" element={<NotFound/>} /> 
            </Routes>
        </BrowserRouter>   
     );
}

export default App;