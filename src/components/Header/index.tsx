interface IHeader {
  logo: string;
}

const Header = ({ logo }: IHeader) => (
  <nav className="flex flex-row h-28 place-content-center items-center w-full bg-white text-secondary text-xl space-x-8 filter drop-shadow-md mb-8">
    <div className="flex flex-row">
      <div className="flex flex-col justify-end">
        <div className="text-title text-lg font-ntwagner">
          Haz tu pedido por whatsapp
        </div>
        <div className="flex justify-end">
          <div
            className="bg-primary font-medium text-white text-base px-4 py-1
           rounded-full mb-2"
          >
            Servicio de Catering
          </div>
        </div>
      </div>
      <div className="ml-4">
        <img src={logo} alt="hoy menu tenerifee" className="w-56 h-20" />
      </div>
    </div>
    <div className="hover:text-primary hover:underline">
      <a href="/">Home</a>
    </div>
    <div className="rounded-full bg-secondary w-1.5 h-1.5" />
    <div className="hover:text-primary hover:underline">
      <a href="/hoymenu">Hoy Menu</a>
    </div>
    <div className="rounded-full bg-secondary w-1.5 h-1.5" />
    <div className="hover:text-primary hover:underline">
      <a href="/lacoleccion">La Coleccion</a>
    </div>
    <div className="rounded-full bg-secondary w-1.5 h-1.5" />
    <div className="hover:text-primary hover:underline">
      <a href="/miniyums">Miniyums</a>
    </div>
    <div className="rounded-full bg-secondary w-1.5 h-1.5" />
    <div className="hover:text-primary hover:underline">
      <a href="/panzi">Panzi</a>
    </div>
  </nav>
);

export default Header;
