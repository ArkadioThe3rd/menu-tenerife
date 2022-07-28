interface IThreeElements {
  display: string;
  para1: string;
  para2: string;
  para3: string;
}

const ThreeElements = ({ display, para1, para2, para3 }: IThreeElements) => (
  <div className="flex flex-row w-full">
    <div className="w-1/3">
      <h1 className={`${display}`}>
        Como realizar
        <br /> el pedido
      </h1>
      <ul>
        <li>{para1}</li>
        <li>{para2}</li>
        <li className={`${display}`}>{para3}</li>
      </ul>
    </div>
    <div className="w-1/3" />
    <div className="w-1/3"></div>
  </div>
);

export default ThreeElements;
