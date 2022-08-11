interface IBannerPattern {
  backgroundColor: string;
  pattern: string;
  title: string;
  subtitle: string;
}

const BannerPattern = ({
  backgroundColor,
  pattern,
  title,
  subtitle,
}: IBannerPattern) => {
  const style = {
    backgroundImage: `url('${pattern}')`,
    width: '5%',
    height: '5%',
  };
  return (
    <div className={`w-full h-banner ${backgroundColor} relative`}>
      <div
        className="bg-repeat bg-auto bg-opacity-60 w-full h-full absolute"
        style={style}
      />
      <h1 className="font-ntwagner text-6xl text-title ml-28 mt-52 inline-block">
        {title}
      </h1>
      <h2 className="font-ntwagner text-4xl text-white ml-28">{subtitle}</h2>
    </div>
  );
};

export default BannerPattern;
