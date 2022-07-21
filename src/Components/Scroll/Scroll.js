import s from './Scroll.module.scss';
import { FaArrowDown } from 'react-icons/fa';
import React from 'react';

export default function Scroll() {
  return (
    <div className={s.down}>
      <FaArrowDown color={'ffffff'} size={'24px'} />
      <p className={s.text}>Scroll down</p>
    </div>
  );
}
