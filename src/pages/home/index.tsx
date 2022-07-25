import { Header, Banner } from '../../components';

const Home = () => (
  <div className="w-full h-full overflow-y-auto scroll-behavior">
    <Header />
    <div className="mx-28">
      <Banner />
      <h1 className="text-4xl text-title mt-11 ml-56">
        Venta al por mayor de catering y postres para <br /> hosteleria,
        navierasy empresas.
      </h1>
      <hr className="h-0.5 bg-gray-500 mt-16" />
      <div>
        <h1 className="text-title text-4xl mt-28">Servicios que ofrecemos</h1>
      </div>
    </div>
  </div>
);

export default Home;
