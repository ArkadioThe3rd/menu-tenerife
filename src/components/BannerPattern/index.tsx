interface IBannerPattern {
  backgroundColor: string;
  pattern: string;
}

const BannerPattern = ({ backgroundColor, pattern }: IBannerPattern) => {
  const style = {
    backgroundImage: `url('${pattern}')`,
    width: '5%',
    height: '5%',
  };
  return (
    <div
      className={`bg-olivegreen w-full h-banner ${backgroundColor} relative`}
    >
      <div
        className="bg-repeat bg-auto bg-opacity-60 w-full h-full absolute"
        style={style}
      />
      <h1 className="font-ntwagner text-6xl text-title ml-28 mt-52 inline-block">
        Hoy Menú
      </h1>
    </div>
  );
};

export default BannerPattern;
