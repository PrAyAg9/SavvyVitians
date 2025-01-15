import React from 'react';

interface BackgroundDivProps {
  imageUrl: string;
  children: React.ReactNode;
}

const BackgroundDiv: React.FC<BackgroundDivProps> = ({ imageUrl, children }) => {
  const divStyle: React.CSSProperties = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '60vh', // Ensures a minimum height is applied
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return <div style={divStyle}>{children}</div>;
};

export default BackgroundDiv;
