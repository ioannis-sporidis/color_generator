import { useState, useEffect } from 'react';
import rgbToHex from '../utils/utils';

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  const hexValue = `#${hexColor}`;
  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}>
      <p className='percent-value'>{weight}%</p>
      {/* <p className='color-value'>{rgbToHex(...rgb)}</p> */}
      <p className='color-value'>{hexValue}</p>
    </article>
  );
};

export default SingleColor;
