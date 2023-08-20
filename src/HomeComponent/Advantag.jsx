import "./Advantag.scss";
const Advantag = () => {
  return (
    <div className="our-advantages">
      <div className="container">
        <h2 className="our-advantages__title">Bizning afzalliklarimiz</h2>
        <div className="wrapper  animate-parent">
          <div className="advantage-wrapper">
            <div className="advantages-list__item">
            <img src="https://najottalim.uz/_next/static/media/online.60c3bc48.svg" alt="" />

              <div className="advantages-list__content">
                <h3 className="advantages-list__title">Onlayn akademiya</h3>
                <p className="advantages-list__desc">
                  «Najot Ta’lim» digital academy — bu zamonaviy kasblar
                  o‘qitiladigan onlayn akademiya. Qayerda bo‘lishingizdan qat’i
                  nazar: uydami yo mehmonda, daladami yo safarda — o‘zingizga
                  qulay tarzda va vaqtda bilim olishingiz mumkin, internet va
                  noutbuk bo‘lsa bas.
                </p>
              </div>
            </div>

            <div className="advantages-list__item">
              <img src="https://najottalim.uz/_next/static/media/icon-master-star.03e5bec5.svg" alt="" />
              <div className="advantages-list__content">
                <h3 className="advantages-list__title">O‘z ishining ustalari</h3>
                <p className="advantages-list__desc">
                  Darslar katta tajribaga ega malakali mutaxassislar tomonidan
                  tayyorlangan. O‘z ishining ustalaridan yanada ishonchli bilim
                  va tajribaga ega bo’lasiz
                </p>
              </div>
            </div>
          </div>

          <div className="advantage-wrapper">
            <div className="advantages-list__item">
              <img src="https://najottalim.uz/_next/static/media/pc1.e972278e.svg"alt="" />
              <div className="advantages-list__content">
                <h3 className="advantages-list__title">Shunchaki kurs emas</h3>
                <p className="advantages-list__desc">
                  Har bir o‘quv kursi shunday ishlab chiqilganki, ularni
                  muvaffaqiyatli yakunlab, siz zamonaviy kasb egasiga
                  aylanishingiz va shu sohada o‘z faoliyatingizni boshlashingiz
                  mumkin. Hammasi o‘z qo‘lingizda.
                </p>
              </div>
            </div>

            <div className="advantages-list__item">
              <img src="https://najottalim.uz/_next/static/media/icon-target.7a203beb.svg" alt="" />
              <div className="advantages-list__content">
                <h3 className="advantages-list__title">Interaktiv darslar</h3>
                <p className="advantages-list__desc">
                  Darslarni o‘zlashtirish davrida sizda savollar tug‘ilishi
                  tabiiy holat. Mentorlarga murojaat qilishingiz, o’zingizni
                  qiziqtirgan savollarizga javob olishingiz va tavsiyalar
                  olishingiz mumkin
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className="our-advantages__more-btn">Ko‘proq <img className="our-advantages__more-btn-iconbtn-icon" src="https://najottalim.uz/_next/static/media/icon-arrow-bottom.5d572cc9.svg" alt="" /></button>
      </div>
    </div>
  );
};

export default Advantag;
