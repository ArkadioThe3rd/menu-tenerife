import React from 'react';

interface IInfoCardGroup {
  children: React.ReactNode;
}

const InfoCardGroup = ({ children }: IInfoCardGroup) => (
  <div className="flex flex-row w-full">{children}</div>
);

export default InfoCardGroup;
