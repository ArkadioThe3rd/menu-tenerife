import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages';

const RouteHandler = () => (
  <Routes>
    <Route path="*" element={<Home />} />
  </Routes>
);

export default RouteHandler;
