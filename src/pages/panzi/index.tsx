import { BannerPattern, Header, Footer } from '../../components';

const Panzi = () => {
  const image = {
    pattern:
      'https://imagenesmenutenerife.s3.amazonaws.com/Pattern+icono+whatsapp.svg',
  };
  return (
    <div className="w-full h-full overflow-y-auto">
      <Header logo="https://imagenesmenutenerife.s3.amazonaws.com/Hoy+Menu%CC%81+Tenerife_Logotipo.svg" />
      <BannerPattern
        backgroundColor="bg-primary"
        pattern={image.pattern}
        title="Panzi"
      />
      <div className="px-28 w-full">
        <div className="w-full mt-32">
          <h1 className="font-ntwagner text-title text-6xl text-center">
            Loren Ipsum
          </h1>
          <div className="flex flex-row w-full mt-32">
            <div className="w-1/2">
              <p className="font-sans text-darkbrown text-xl font-bold text-center">
                Lorem ipsum dolor sit amet, consectetuer
                <br /> adipiscing elitLorem ipsum dolor sit amet,
                <br /> Lorem ipsum dolor sit amet, consectetuer
                <br /> adiLorem ipsum dolor sit amet, consecte
              </p>
            </div>
            <div className="w-1/2">
              <p className="font-sans text-darkbrown text-xl font-bold text-center">
                Lorem ipsum dolor sit amet, consectetuer
                <br /> adipiscing elitLorem ipsum dolor sit amet,
                <br /> Lorem ipsum dolor sit amet, consectetuer
                <br /> adiLorem ipsum dolor sit amet, consecte
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full justify-between space-x-16 mt-28">
          <div className="w-1/3 h-banner bg-darkbrown">
            <img alt="panzi1" />
          </div>
          <div className="w-1/3 h-banner bg-darkbrown">
            <img alt="panzi1" />
          </div>
          <div className="w-1/3 h-banner bg-darkbrown">
            <img alt="panzi1" />
          </div>
        </div>
      </div>
      <div className="w-full bg-olivegreen h-serviceComp mt-32">Video</div>
      <div className="flex flex-row my-28 justify-center">
        <p className="font-ntwagner text-title text-4xl mr-20">
          Lorem ipraesent luptatum zzril delenit
          <br /> augue duis dolore te feugait nulla facili-
          <br />
          sicing elit, sed my.
        </p>
        <p className="font-sans text-darkbrown text-2xl">
          Lorem ipsum dolor sit amet, con-
          <br />
          sectetuer adipiscing elitLorem
          <br /> ipsum dolor sit amet, Lorem
          <br /> ipsum dolor sit amet, Lorem{' '}
        </p>
      </div>
      <div className="w-full h-96 bg-darkbrown">Banner Footer</div>
      <Footer />
    </div>
  );
};

export default Panzi;
