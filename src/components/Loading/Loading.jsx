import React from 'react';
import loader from '../../assets/loading.gif';
import style from './Loading.module.scss';

export const Loading = () => {
  return (
    <div className={style.loading}>
      <img src={loader} />
    </div>
  );
};
