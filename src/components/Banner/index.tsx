interface IBanner {
  img1: string;
  img2: string;
  img3: string;
  img4: string;
}

const Banner = ({ img1, img2, img3, img4 }: IBanner) => (
  <div className="w-full flex flex-row h-banner relative">
    <div className=" h-full absolute w-full">
      <div className="flex bg-gradient-to-r from-white to bg-transparent h-full absolute w-36 items-center">
        <span>Prev</span>
      </div>
      <div className="flex bg-gradient-to-l from-white to bg-transparent h-full w-36 absolute items-center top-0 right-0">
        <span>Next</span>
      </div>
    </div>
    <div className="w-1/4 bg-red-400">
      <img src={img1} alt="0" />
    </div>
    <div className="w-1/4 bg-yellow-400">
      <img src={img2} alt="0" />
    </div>
    <div className="w-1/4 bg-green-400">
      <img src={img3} alt="0" />
    </div>
    <div className="w-1/4 bg-blue-400">
      <img src={img4} alt="0" />
    </div>
  </div>
);

export default Banner;
