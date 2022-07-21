import s from './Social.module.scss';

import React from 'react';

export default function Social() {
  return (
    <div className={s.social}>
      <a href="/">
        <button className={s.social_btn}>Instagram</button>
      </a>
      <a href="/">
        <button className={s.social_btn}>Facebook</button>
      </a>
      <a href="/">
        <button className={s.social_btn}>GitHab</button>
      </a>
    </div>
  );
}
