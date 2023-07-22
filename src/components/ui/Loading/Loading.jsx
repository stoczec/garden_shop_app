import React from 'react';
import loader from '../../../assets/images/loading.gif';
import style from './loading.module.scss';

export default function Loading() {
  return (
    <div className={style.loading}>
      <img src={loader} alt="Loader" />
    </div>
  );
}
