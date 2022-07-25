interface IServiceComp {
  title: string;
  description: string;
  img: string;
}

const ServicesComp = ({ title, description, img }: IServiceComp) => (
  <div className="w-96 bg-yellow-100 rounded-4xl">
    <h2 className="text-6xl text-title mt-12">{title}</h2>
    <p className="text-xl mt-5">{description}</p>
    <img src={img} alt="0" />
  </div>
);

export default ServicesComp;
