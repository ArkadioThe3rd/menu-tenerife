const Header = () => (
  <nav className="flex flex-row h-28 place-content-center items-center w-full bg-white text-secondary text-xl space-x-16 filter drop-shadow-md mb-2">
    <div className="hover:text-primary hover:underline">
      <a href="#home">Home</a>
    </div>
    <div className="rounded-full bg-secondary w-1 h-1" />
    <div className="hover:text-primary hover:underline">
      <a href="#hoymenu">Hoy Menu</a>
    </div>
    <div className="rounded-full bg-secondary w-1 h-1" />
    <div className="hover:text-primary hover:underline">
      <a href="#lacoleccion">La Coleccion</a>
    </div>
    <div className="rounded-full bg-secondary w-1 h-1" />
    <div className="hover:text-primary hover:underline">
      <a href="#miniyums">Miniyums</a>
    </div>
    <div className="rounded-full bg-secondary w-1 h-1" />
    <div className="hover:text-primary hover:underline">
      <a href="#panzis">Panzi</a>
    </div>
  </nav>
);

export default Header;
