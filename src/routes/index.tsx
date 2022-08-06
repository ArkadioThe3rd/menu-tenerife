import { Route, Routes } from 'react-router-dom';
import { Home, HoyMenu, LaColeccion, Miniyums } from '../pages';

const RouteHandler = () => (
  <Routes>
    <Route path="/miniyums" element={<Miniyums />} />
    <Route path="/lacoleccion" element={<LaColeccion />} />
    <Route path="/hoymenu" element={<HoyMenu />} />
    <Route path="*" element={<Home />} />
  </Routes>
);

export default RouteHandler;
