import React from 'react';
import '../styles/BigButton.css';

interface BigButtonProps {
  onClick: () => void;
  backgroundImage?: string;
  backgroundColor?: string;
  children: React.ReactNode;
  width?: number | string;
  height?: number | string;
}

const BigButton: React.FC<BigButtonProps> = ({
  onClick,
  backgroundImage,
  backgroundColor,
  children,
  width,
  height
}) => {
  const buttonStyles: React.CSSProperties = {
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
    backgroundColor: backgroundColor ? backgroundColor : undefined,
    width: width ? width : '100%',
    height: height? height : '100%',
  };

  return (
    <button className="big-button" onClick={onClick} style={buttonStyles}>
      {children}
    </button>
  );
};

export default BigButton;