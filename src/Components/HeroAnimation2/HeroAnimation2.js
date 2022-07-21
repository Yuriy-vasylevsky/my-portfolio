import s from './HeroAnimation2.module.scss';
import hero5 from '../../image/hero/hero5.png';
import Lightning from '../../Components/Lightning/Lightning';
import LightningMini from '../../Components/LightningMini/LightningMini';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export default function HeroAnimation2() {
  const [stepAnimation1, setStepAnimation1] = useState(false);
  const [stepAnimation2, setStepAnimation2] = useState(false);
  const [changeTextcolor, setchangeTextcolor] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStepAnimation1(true);
    }, 1000);

    setTimeout(() => {
      setStepAnimation1(false);
      setStepAnimation2(true);
      setchangeTextcolor(true);
    }, 1500);

    setTimeout(() => {
      // setStepAnimation01(false);

      setStepAnimation2(false);
    }, 2000);
  }, []);

  return (
    <>
      <div
        className={s.hero_img2}
        // style={{
        //   backgroundImage: `url(${hero1})`,
        // }}
      >
        <img src={hero5} alt="" />
      </div>
      <div className={s.hero_text}>
        <p className={s.title}>VASYLEVSKY YURIY</p>
        {changeTextcolor ? (
          <p className={s.text_red}>JUNIOR FRONT END DEVELOPER</p>
        ) : (
          <p className={s.text}>JUNIOR FRONT END DEVELOPER</p>
        )}
      </div>
      {stepAnimation1 && <Lightning />}
      {stepAnimation2 && <LightningMini />}
    </>
  );
}
