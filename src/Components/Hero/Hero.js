import React from 'react';
import Container from '../../Components/Container/Container';
import s from './Hero.module.scss';
import HeroAnimation1 from '../../Components/HeroAnimation1/HeroAnimation1';
import HeroAnimation2 from '../../Components/HeroAnimation2/HeroAnimation2';
import HeroAnimation3 from '../../Components/HeroAnimation3/HeroAnimation3';
import Scroll from '../../Components/Scroll/Scroll';
// import Lightning from '../../Components/Lightning/Lightning';
// import LightningMini from '../../Components/LightningMini/LightningMini';
import { useState } from 'react';
import { useEffect } from 'react';
export default function Hero() {
  const [stepAnimation01, setStepAnimation01] = useState(true);
  const [stepAnimation02, setStepAnimation02] = useState(false);
  const [stepAnimation03, setStepAnimation03] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStepAnimation01(false);
      setStepAnimation02(true);
    }, 500);

    setTimeout(() => {
      setStepAnimation02(false);
      setStepAnimation03(true);
    }, 2500);
  }, []);

  return (
    <section className={s.section_hero}>
      <Container className="container">
        {stepAnimation01 && <HeroAnimation1 />}
        {stepAnimation02 && <HeroAnimation2 />}
        {stepAnimation03 && <HeroAnimation3 />}
        <Scroll />
      </Container>
    </section>
  );
}
