import React from "react";

const Reviews = () => {
  return (
    <section className="reviews">
      <div className="container">
        <h3 className="reviews__title">Bitiruvchilarimizdan izohlar</h3>
        <p className="reviews__desc">
          Oʻquv kurslarimiz, ustozlar, qoʻlga kiritilgan bilim va koʻnikmalar,
          olingan natijalar haqida bitiruvchilarimizdan eshiting hamda ulardan
          kerakli tavsiyalar oling.
        </p>
        <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
          <div
            className="swiper-wrapper"
            style="transform: translate3d(0px, 0px, 0px);"
          >
            <div
              className="swiper-slide swiper-slide-active"
              style="width: 258.75px;"
            >
              <div className="reviews__item">
                <span className="reviews__item-view-video">
                  <button class="reviews__item-icon reviews__item-icon--pause"></button>
                  Videoni ko‘rish
                </span>
                <video
                  className=""
                  src="https://cdn.najottalim.uz/najottalim/short-videos/d7ccc165-8afc-4294-92ed-02d9f1a6f7a2.mp4"
                ></video>
                <div className="reviews__item-backdrop"></div>
                <div className="reviews__item-full-name">
                  <h4 className="reviews__item-date">25.01.2023</h4>
                  <h4 className="reviews__item-last-name">Frontend dasturchi</h4>
                  <h4 className="reviews__item-first-name">Salohiddin Dilmatov</h4>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-next"
              style="width: 258.75px;"
            >
              <div className="reviews__item">
                <span className="reviews__item-view-video">
                  <button className="reviews__item-icon reviews__item-icon--pause"></button>
                  Videoni ko‘rish
                </span>
                <video
                  className=""
                  src="https://cdn.najottalim.uz/najottalim/short-videos/60a6ad55-4ca3-4d0f-8007-470b9cc39a88.mp4"
                ></video>
                <div className="reviews__item-backdrop"></div>
                <div className="reviews__item-full-name">
                  <h4 className="reviews__item-date">25.01.2023</h4>
                  <h4 className="reviews__item-last-name">SMM-menejer</h4>
                  <h4 className="reviews__item-first-name">Abdumannof Tursunov</h4>
                </div>
              </div>
            </div>
            <div className="swiper-slide" style="width: 258.75px;">
              <div className="reviews__item">
                <span className="reviews__item-view-video">
                  <button className="reviews__item-icon reviews__item-icon--pause"></button>
                  Videoni ko‘rish
                </span>
                <video
                  className=""
                  src="https://cdn.najottalim.uz/najottalim/short-videos/6468a330-6e3e-4a85-a6fe-8c5a066ce6bc.mp4"
                ></video>
                <div className="reviews__item-backdrop"></div>
                <div className="reviews__item-full-name">
                  <h4 className="reviews__item-date">25.01.2023</h4>
                  <h4 className="reviews__item-last-name">Grafik dizayner</h4>
                  <h4 className="reviews__item-first-name">
                    Shahzoda Sunnatillayeva
                  </h4>
                </div>
              </div>
            </div>
            <div className="swiper-slide" style="width: 258.75px;">
              <div className="reviews__item">
                <span className="reviews__item-view-video">
                  <button className="reviews__item-icon reviews__item-icon--pause"></button>
                  Videoni ko‘rish
                </span>
                <video
                  className=""
                  src="https://cdn.najottalim.uz/najottalim/short-videos/3c5a9b58-5822-43aa-9603-87762de32bf9.mp4"
                ></video>
                <div className="reviews__item-backdrop"></div>
                <div className="reviews__item-full-name">
                  <h4 className="reviews__item-date">25.01.2023</h4>
                  <h4 className="reviews__item-last-name">Art-direktor</h4>
                  <h4 className="reviews__item-first-name">
                    Sayfulloh Asadullayev
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="swiper-pagination">1</span>
        <div className="reviews__more reviews__more--number">
          <button
            className="partners-btn partners-btn__next partners-btn--reviews swiper-button-disabled swiper-button-lock"
            disabled=""
          ></button>
          <button
            className="partners-btn partners-btn__preview partners-btn--reviews swiper-button-lock swiper-button-disabled"
            disabled=""
          ></button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
