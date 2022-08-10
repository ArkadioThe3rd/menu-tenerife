import React from 'react';
import {
  Header,
  ImagenTexto,
  InfoCard,
  InfoCardGroup,
  Footer,
  BannerPattern,
} from '../../components';

const HoyMenu = () => {
  const image = {
    pattern:
      'https://imagenesmenutenerife.s3.amazonaws.com/Pattern+icono+whatsapp.svg',
    imagenTexto: 'https://imagenesmenutenerife.s3.amazonaws.com/Foto+Plato.png',
    cursor: 'https://imagenesmenutenerife.s3.amazonaws.com/Cursor.svg',
    ImgInfoCard: 'https://imagenesmenutenerife.s3.amazonaws.com/Foto+3.jpg',
  };

  return (
    <div className="w-full h-full overflow-y-auto">
      <Header logo="https://imagenesmenutenerife.s3.amazonaws.com/Hoy+Menu%CC%81+Tenerife_Logotipo.svg" />
      <BannerPattern backgroundColor="olivegreen" pattern={image.pattern} />
      <div className="flex flex-col my-28 px-80">
        <ImagenTexto
          title="Para navierasy empresas"
          para1="Pide un presupuesto"
          para2="Consulta la información nutricional"
          direction="flex-row"
          className="mb-24"
          margin="mr-14"
          image={image.imagenTexto}
          arrow={image.cursor}
          display="hidden"
        />
        <ImagenTexto
          title="Para particulares"
          para1="¿Qué hay para comer esta semana?"
          para2="Haz un pedido"
          direction="flex-row-reverse"
          margin="ml-14"
          image={image.imagenTexto}
          arrow={image.cursor}
          display="block"
          textdirection="text-right"
          justify="justify-end"
        />
      </div>
      <div className="w-full">
        <InfoCardGroup>
          <InfoCard color="bg-darkbrown">
            <div className="ml-32">
              <h2 className="font-ntwagner text-white text-3xl mb-5 mt-9">
                Comida casera hecha
                <br /> al dia a domicilio
              </h2>
              <h2 className="font-ntwagner text-white text-3xl">
                Toda la comida
                <br /> es blablab
              </h2>
            </div>
          </InfoCard>
          <InfoCard>
            <img src={image.ImgInfoCard} alt="2" />
          </InfoCard>
          <InfoCard color="bg-redsalmon">
            <div className="ml-32">
              <h2 className="text-white font-ntwagner text-4xl mt-9">
                Horarios para pedir
              </h2>
              <h2 className="text-white font-sans text-3xl">
                Hasta las 10:30h del
                <br /> mismo dia de la entrega
              </h2>
              <h2 className="text-white font-ntwagner text-4xl mt-9">
                Horarios de entrega
              </h2>
              <h2 className="text-white font-sans text-3xl">12:00h - 14:00h</h2>
            </div>
          </InfoCard>
        </InfoCardGroup>
      </div>
      <Footer />
    </div>
  );
};

export default HoyMenu;
