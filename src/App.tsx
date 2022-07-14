import './styles/tailwindcss.scss';
import { BrowserRouter } from 'react-router-dom';
import RouteHandler from './routes';

const App = () => (
  <BrowserRouter>
    <RouteHandler />
  </BrowserRouter>
);

export default App;
