import { Header, ImagenTexto } from '../../components';

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
  </div>
);

export default HoyMenu;
