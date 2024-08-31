import React from 'react';
import './polaroid.css';

interface Props {
    type?: string | undefined
}

const Polaroid: React.FC<Props>  = ({ type }: Props) => {
  return (
    <div className="polaroid">
      <img src={`../../assets/photos/${type}.jpg`} alt={`Polaroid ${type}`} className="polaroid" />
    </div>
  );
};

export default Polaroid;
