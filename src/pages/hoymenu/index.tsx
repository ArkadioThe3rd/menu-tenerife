import React from 'react';
import {
  Header,
  ImagenTexto,
  InfoCard,
  InfoCardGroup,
  Footer,
} from '../../components';

const HoyMenu = () => (
  <div className="w-full h-full overflow-y-auto">
    <Header />
    <div className="bg-olivegreen w-full h-banner">
      <h1 className="font-ntwagner text-6xl text-title ml-28 mt-52 inline-block">
        Hoy Menú
      </h1>
    </div>
    <div className="flex flex-col my-28 px-80">
      <ImagenTexto
        title="Para navieras y empresas"
        para1="Pide un presupuesto"
        para2="Consulta la información nutricional"
        direction="flex-row"
        className="mb-24"
        margin="mr-14"
      />
      <ImagenTexto
        title="Para particulares"
        para1="¿Qué hay para comer esta semana?"
        para2="Haz un pedido"
        direction="flex-row-reverse"
        margin="ml-14"
      />
    </div>
    <div className="w-full">
      <InfoCardGroup>
        <InfoCard color="bg-darkbrown">
          <h2 className="font-ntwagner text-white text-3xl mb-5 mt-9">
            Comida casera
            <br /> hecha al dia
            <br /> a domicilio
          </h2>
          <h2 className="font-ntwagner text-white text-3xl">
            Toda la comida
            <br /> es blablab
          </h2>
        </InfoCard>
        <InfoCard>
          <img alt="2" />
        </InfoCard>
        <InfoCard color="bg-redsalmon">
          <h2 className="text-white font-sans text-xl mt-9">
            Horarios para pedir
          </h2>
          <h2 className="text-white font-ntwagner text-3xl">
            Hasta las 10:30h
            <br /> del mismo dia
            <br /> de la entrega
          </h2>
          <h2 className="text-white font-sans text-xl mt-9">
            Horarios de entrega
          </h2>
          <h2 className="text-white font-ntwagner text-3xl">12:00h - 14:00h</h2>
        </InfoCard>
      </InfoCardGroup>
    </div>
    <Footer />
  </div>
);

export default HoyMenu;
