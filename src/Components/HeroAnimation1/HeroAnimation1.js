import s from './HeroAnimation1.module.scss';
import hero6 from '../../image/hero/hero6.png';

import React from 'react';

export default function HeroAnimation1() {
  return (
    <div
      className={s.hero_img}
      // style={{
      //   backgroundImage: `url(${hero1})`,
      // }}
    >
      <img src={hero6} alt="" />
    </div>
  );
}
