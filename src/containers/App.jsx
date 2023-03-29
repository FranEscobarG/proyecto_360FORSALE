import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
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
import EspecificacionArrendatario from '../pages/EspecificacionArrendatario';
import Pay from '../pages/Pay';
import MyProfile from '../pages/MyProfile';
import MyProfileTwo from '../pages/MyProfileTwo';
import NotFound from '../pages/NotFound';
import Iniciar from '../pages/Iniciar';
import UserContextProvider, { UserContext } from '../context/UserContext';
import RouteProtected from './RouteProtected';

function App() {
    const logged = useContext(UserContext);
    return (
        <BrowserRouter>
            <UserContextProvider>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/login/:typeUser" element={<Login />} />
                    <Route path="/inicio" element={<Iniciar />} />
                    <Route path="/register/:typeUser" element={<Register />} />


                    <Route path="/homearrendador" element={<HomeArrendador />} />
                    <Route path="/mispublicacionesArrendador" element={<MisPublicacionesArrendador />} />
                    <Route path="/masinfoarrendador" element={<InformacionAdicional />} />
                    <Route path="/editarpublicacion" element={<EditPublication />} />
                    <Route path="/publicarinmueble" element={<PublishProperty />} />
                    <Route path="/perfilarrendador" element={<MyProfile />} />


                    <Route path="/homearrendatario" element={<HomerArrendatario />} />
                    <Route path="/masinfoarrendatario" element={<InformacionAdicionalTwo />} />
                    <Route path="/misinmueblesarrendatario" element={<MisInmueblesArrendatario />} />
                    <Route path="/perfilarrendatario" element={<MyProfileTwo />} />
                    <Route path="/catalogofiltrado" element={<CatalogFiltered />} />
                    <Route path="/especificacioninmueble" element={<EspecificacionArrendatario />} />
                    <Route path="/generacionpago" element={<Pay />} />

                    <Route element={<RouteProtected session={logged.isLogged} />}></Route>


                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </UserContextProvider>
        </BrowserRouter>
    );
}

export default App;