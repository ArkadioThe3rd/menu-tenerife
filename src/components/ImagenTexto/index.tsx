interface IImagenTexto {
  title: string;
  para1: string;
  para2: string;
  direction: string;
  className?: string;
  margin: string;
}

const ImagenTexto = ({
  title,
  para1,
  para2,
  direction,
  className,
  margin,
}: IImagenTexto) => (
  <div className={`flex ${direction} ${className}`}>
    <div className={`w-2/5 h-96 bg-primary ${margin}`} />
    <div>
      <ul className="font-ntwagner text-title">
        <li>
          <h1 className="underline underline-color text-4xl">{title}</h1>
        </li>
        <li>
          <p className="text-base">{para1}</p>
        </li>
        <li className="mb-20">
          <div className="w-40 h-11 bg-secondary" />
        </li>
        <li>
          <p className="text-base">{para2}</p>
        </li>
        <li>
          <div className="w-40 h-11 bg-secondary" />
        </li>
      </ul>
    </div>
  </div>
);

ImagenTexto.defaultProps = {
  className: '',
};

export default ImagenTexto;
