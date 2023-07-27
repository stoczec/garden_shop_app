import React from 'react';
import style from './getDiscount.module.scss';
import gnome from '../../assets/images/gnome.png';

const GetDiscount = () => {
  return (
    <section className={style.get_discount}>
      <div className={style.container}>
        <img src={gnome} alt="Gnome" />
        <article>
          <h2>
            <span>5% off </span>
            <p>on the first order</p>
          </h2>
          <form>
            <input type="tel" required pattern="\+49\d{10}" placeholder="+49" />
            <button>Get a discount</button>
          </form>
        </article>
      </div>
    </section>
  );
};

export default GetDiscount;
