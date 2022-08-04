import { Route, Routes } from 'react-router-dom';
import { Home, HoyMenu, LaColeccion } from '../pages';

const RouteHandler = () => (
  <Routes>
    <Route path="/lacoleccion" element={<LaColeccion />} />
    <Route path="/hoymenu" element={<HoyMenu />} />
    <Route path="*" element={<Home />} />
  </Routes>
);

export default RouteHandler;
