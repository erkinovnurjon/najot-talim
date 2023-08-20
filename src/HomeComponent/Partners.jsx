import React from "react";
import "./Partners.scss";
const Partners = () => {
  return (
    <section className="partners">
      <div className="partners__inner container">

      <div className="partners__info">
          <h2 className="partners__title">
            Bitiruvchilarimizning ish joylari:
          </h2>
          <p className="partners__desc">
            Eng yaxshi bitiruvchilarimiz nufuzli tashkilot va kompaniyalarda
            faoliyat yuritadi. Zamonaviy kasb egalariga doim va har yerda talab
            yuqori bo‘ladi.
          </p>
        </div>

       <div className="partners  partners__section-mobile">

       <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
    

    <div className="swiper-wrapper"
      >
        <div className="swiper-slide swiper-slide-active"
        >
               <ul className="partners__list-mobile">
            <li className="partners__item">
            <div class="partners__item-img partners__item-img--epam"></div>
            </li>
            <li className="partners__item">
            <div class="partners__item-img partners__item-img--itechart"></div>
            </li>
            <li className="partners__item">
            <div class="partners__item-img partners__item-img--humo"></div>
            </li>
            <li className="partners__item">
            <div class="partners__item-img partners__item-img--agro"></div>
            </li>
            <li className="partners__item">
            <div class="partners__item-img partners__item-img--davr"></div>
            </li>
            <li className="partners__item">
            <div class="partners__item-img partners__item-img--texnomart"></div>
            </li>
          </ul>
        </div>
    
    

        <div className="swiper-slide swiper-slide-next" >
          <div className="partners__list-mobile">
            <li className="partners__item">
              <div className="partners__item-img partners__item-img--soliq"></div>
            </li>
            <li className="partners__item">
              <div className="partners__item-img partners__item-img--uzcard"></div>
            </li>
            <li className="partners__item">
              <div className="partners__item-img partners__item-img--mytaxi"></div>
            </li>
            <li className="partners__item">
              <div className="partners__item-img partners__item-img--mfaktor"></div>
            </li>
            <li className="partners__item">
              <div className="partners__item-img partners__item-img--jafton"></div>
            </li>
            <li className="partners__item">
              <div className="partners__item-img partners__item-img--fido"></div>
            </li>
          </div>
        </div>
        

        <div className="swiper-slide" >
          <ul className="partners__list-mobile">
            <li className="partners__item">
              <div className="partners__item-img partners__item-img--ob"></div>
            </li>
            <li className="partners__item">
              <div className="partners__item-img partners__item-img--islomuz"></div>
            </li>
            <li className="partners__item">
              <div className="partners__item-img partners__item-img--cambridge"></div>
            </li>
            <li className="partners__item">
              <div className="partners__item-img partners__item-img--kunuz"></div>
            </li>
            <li className="partners__item">
              <div className="partners__item-img partners__item-img--yoshlar"></div>
            </li>
            <li className="partners__item">
              <div class="partners__item-img partners__item-img--pcg"></div>
            </li>
          </ul>
        </div>




      </div>















      {/* <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
        <span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
        <span className="swiper-pagination-bullet"></span>
        <span className="swiper-pagination-bullet"></span>
      </div>
      <div className="reviews__more">
        <button className="partners-btn partners-btn__next">
          <img src="https://najottalim.uz/_next/static/media/icon-arrow-left-disabled.ffba6ce5.svg" alt="" />
        </button>
        <span>.</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
        <button className="partners-btn partners-btn__preview">
          <img src="https://najottalim.uz/_next/static/media/icon-arrow-right.9288e8ca.svg" alt="" />
        </button>
      </div> */}
    </div>
       </div>
      </div>
    </section>
  );
};

export default Partners;
