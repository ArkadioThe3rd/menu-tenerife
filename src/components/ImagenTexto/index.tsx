/* eslint-disable jsx-a11y/anchor-is-valid */
interface IImagenTexto {
  title: string;
  para1: string;
  para2: string;
  direction: string;
  className?: string;
  margin: string;
  image: string;
  arrow: string;
  display: string;
  textdirection?: string;
  justify?: string;
}

const ImagenTexto = ({
  title,
  para1,
  para2,
  direction,
  className,
  margin,
  image,
  arrow,
  display,
  textdirection,
  justify,
}: IImagenTexto) => (
  <div className={`flex ${direction} ${className}`}>
    <div className={`w-2/5 h-96 ${margin}`}>
      <img src={image} alt="imagen de comida" />
    </div>
    <div className="flex">
      <ul className={`font-ntwagner text-title ${textdirection}`}>
        <li>
          <h1 className="underline underline-color text-4xl">{title}</h1>
        </li>
        <li>
          <p className="text-2xl mt-7">{para1}</p>
        </li>
        <li className="mb-6">
          <div className={`flex ${justify}`}>
            <div className="flex flex-row w-40 h-11 bg-secondary rounded-full items-center">
              <img src={arrow} alt="flecha" className="w-8 h-8 mx-2" />
              <a href="#" className="text-white font-sans">
                647 922 548
              </a>
            </div>
          </div>
        </li>
        <li>
          <p className="text-2xl">{para2}</p>
        </li>
        <li>
          <div className={`flex ${justify}`}>
            <div className="flex flex-row w-40 h-11 bg-secondary rounded-full items-center">
              <img src={arrow} alt="flecha" className="w-8 h-8 mx-2" />
              <a href="#" className="text-white font-sans">
                Pincha aquí
              </a>
            </div>
          </div>
        </li>
        <li className={`${display}`}>
          <h3 className="font-sans text-title text-lg">Precios</h3>
          <h4 className="font-ntwagner text-title text-xl">4€/menú</h4>
        </li>
      </ul>
    </div>
  </div>
);

ImagenTexto.defaultProps = {
  className: '',
  textdirection: '',
  justify: '',
};

export default ImagenTexto;
