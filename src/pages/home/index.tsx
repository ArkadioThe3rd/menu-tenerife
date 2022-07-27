import { Header, Banner, ServicesComp } from '../../components';

const Home = () => (
  <div className="w-full h-full overflow-y-auto scroll-behavior">
    <Header />
    <div className="mx-28">
      <Banner />
      <h1 className="underline underline-color text-4xl text-title mt-11 ml-56 font-ntwagner">
        Venta al por mayor de catering y postres para <br /> hostelería,
        navierasy empresas.
      </h1>
      <hr className="h-0.5 bg-gray-500 mt-16" />
      <div>
        <h1 className="text-6xl my-20 ml-56 font-ntwagner text-primary">
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
        <div className="mt-14 inline-block float-right">
          <p className="text-4xl">
            Lorem ipraesent luptatum zzril delenit
            <br /> augue duis dolore te feugait nulla faci
            <br />
            lisicing elit, sed diam nonummy.
          </p>
          <div className="flex flex-row">
            <div className="mt-10 mr-5">
              <hr className="h-1 bg-yellow-700 rounded-sm" />
              <p className="text-2xl mt-11">
                Lorem ipsum dolor sit amet, con
                <br />
                sectetuer adipiscing elitLorem
                <br /> ipsum dolor sit amet.
              </p>
            </div>
            <div className="mt-10">
              <hr className="h-1 bg-yellow-700 rounded-sm" />
              <p className="text-2xl mt-11">
                Lorem ipsum dolor sit amet, con
                <br />
                sectetuer adipiscing elitLorem
                <br /> ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
