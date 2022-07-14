const Header = () => (
  <nav className="flex flex-row h-12 place-content-center items-center w-full bg-gray-700 text-yellow-600 text-lg space-x-16">
    <div className="hover:text-white">
      <a href="#home">Home</a>
    </div>
    <div className="hover:text-white">
      <a href="#hoymenu">Hoy Menu</a>
    </div>
    <div className="hover:text-white">
      <a href="#lacoleccion">La Coleccion</a>
    </div>
    <div className="hover:text-white">
      <a href="#miniyums">Miniyums</a>
    </div>
    <div className="hover:text-white">
      <a href="#panzis">Panzi</a>
    </div>
  </nav>
);

export default Header;
