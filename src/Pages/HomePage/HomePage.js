import React from 'react';
import Hero from '../../Components/Hero/Hero';
import bg from '../../image/hero/bg.png';
import s from './HomePage.module.scss';
export default function HomePage() {
  return (
    <>
      <main className={s.main}>
        <Hero />
        <div className={s.bg_image}>
          <img src={bg} alt="bg" />
        </div>
        {/* <p style={{ paddingBottom: '1300px' }}>work</p> */}
      </main>
    </>
  );
}

// style={{ backgroundImage: `url(${bg})` }}
