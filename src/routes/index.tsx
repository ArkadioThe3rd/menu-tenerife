import { Route, Routes } from 'react-router-dom';
import { Home, HoyMenu } from '../pages';

const RouteHandler = () => (
  <Routes>
    <Route path="/hoymenu" element={<HoyMenu />} />
    <Route path="*" element={<Home />} />
  </Routes>
);

export default RouteHandler;
