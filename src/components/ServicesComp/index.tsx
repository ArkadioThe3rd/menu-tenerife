interface IServiceComp {
  title: string;
  description: string;
  className?: string;
}

const ServicesComp = ({ title, description, className }: IServiceComp) => (
  <div className={`w-96 h-serviceComp bg-yellow-100 rounded-4xl ${className}`}>
    <h2 className="text-6xl text-title mt-12 text-center font-ntwagner">
      {title}
    </h2>
    <p className="text-xl mt-5 text-center">{description}</p>
  </div>
);

ServicesComp.defaultProps = {
  className: '',
};

export default ServicesComp;
