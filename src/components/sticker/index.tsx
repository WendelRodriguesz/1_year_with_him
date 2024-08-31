import React from 'react';
import './sticker.css';

interface Props {
    type?: string | undefined
}

const Sticker: React.FC<Props>  = ({ type }: Props) => {
  return (
    <div className="sticker">
      <img src={`../../assets/photos/${type}.png`} alt={`Sticker ${type}`} className="sticker" />
    </div>
  
  );
};

export default Sticker;
