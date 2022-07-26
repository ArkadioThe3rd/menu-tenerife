import { Header, Banner, ServicesComp } from '../../components';

const Home = () => (
  <div className="w-full h-full overflow-y-auto scroll-behavior">
    <Header />
    <div className="mx-28">
      <Banner />
      <h1 className="text-4xl text-title mt-11 ml-56">
        Venta al por mayor de catering y postres para <br /> hostelería,
        navierasy empresas.
      </h1>
      <hr className="h-0.5 bg-gray-500 mt-16" />
      <div>
        <h1 className="text-title text-6xl mt-28 mb-20">
          Servicios que ofrecemos
        </h1>
        <div className="flex flex-row w-full place-content-center">
          <ServicesComp
            title="Hoy Menú"
            description={`Un menú fresco del día al puesto ${(
              <br />
            )}de trabajo y al domicilio`}
            className="mr-5"
          />
          <ServicesComp
            title="La colección"
            description={`Un menú fresco del día al puesto${(
              <br />
            )}de trabajo y al domicilio`}
            className="mr-5"
          />
          <ServicesComp
            title="Miniyums"
            description={`Un menú fresco del día al puesto${(
              <br />
            )}de trabajo y al domicilio`}
            className="mr-5"
          />
          <ServicesComp
            title="Panzi"
            description={`Un menú fresco del día al puesto${(
              <br />
            )}de trabajo y al domicilio`}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Home;
