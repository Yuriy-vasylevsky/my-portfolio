import s from './HeroAnimation3.module.scss';
import hero5 from '../../image/hero/hero5.png';
import Lightning from '../Lightning/Lightning';
import LightningMini from '../LightningMini/LightningMini';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import contextNav from '../../context/contextNav';
import { useContext } from 'react';
// import Scroll from '../Scroll/Scroll';
export default function HeroAnimation3() {
  // const [stepAnimation1, setStepAnimation1] = useState(false);
  // const [stepAnimation2, setStepAnimation2] = useState(false);
  // const [changeTextcolor, setchangeTextcolor] = useState(false);
  const { setShowNav } = useContext(contextNav);

  useEffect(() => {
    setShowNav(true);
  }, [setShowNav]);

  return (
    <>
      <div className={s.hero_img2}>
        <img src={hero5} alt="" />
      </div>

      <div className={s.hero_text}>
        <p className={s.title}>VASYLEVSKY YURIY</p>

        <p className={s.text_red}>JUNIOR FRONT END DEVELOPER</p>
      </div>
    </>
  );
}
