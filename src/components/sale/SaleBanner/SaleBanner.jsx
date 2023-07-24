import React from 'react';
import style from './saleBanner.module.scss';
import { Link } from 'react-router-dom';
import sale_banner from '../../../assets/images/sale_banner.png';

const SaleBanner = () => {
  return (
    <section className={style.sale_banner}>
      <div className={style.container}>
        <article>
          <h1>Sale</h1>
          <h2>New season</h2>
          <Link to="/sales">Sale</Link>
        </article>
        <img src={sale_banner} alt="Sale banner" />
      </div>
    </section>
  );
};
export default SaleBanner;
