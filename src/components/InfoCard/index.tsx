import React from 'react';

interface IInfoCard {
  color?: string;
  children: React.ReactNode;
}

const InfoCard = ({ color, children }: IInfoCard) => (
  <div className={`flex flex-col w-1/3 ${color} items-center`}>{children}</div>
);

InfoCard.defaultProps = {
  color: '',
};

export default InfoCard;
