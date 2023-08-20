import React from "react";

const Banner = () => {
  return (
    <>
      <div className="container">
        <div className="banner-nt">
          <div className="banner-nt__inner">
            <div className="flex">
              <div className="f-half f-half-bg"></div>
              <div className="f-half f-half-form">
                <form className="feedback-form">
                  <div className="feedback-form__title mb-16">
                    <h1 className="feedback__title">Yordam kerakmi?</h1>
                    <a className="green-text" href="">
                      {" "}
                      FAQ
                    </a>{" "}
                 boʻlimi ham sizga yordam bera olmadimi? Telefon raqamingizni
                    yozib qoldiring, biz sizga qoʻngʻiroq qilamiz va birorta ham
                    savolingiz javobsiz qolmasligiga harakat qilamiz.
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      Ismingizni kiriting
                      <span className="form-error__message">
                        <span className="form-tooltip"></span>
                      </span>
                    </label>
                    <input
                      className="form-input mb-16 "
                      id="studentName"
                      type="text"
                      required=""
                      minlength="3"
                      maxlength="255"
                      name="studentName"
                      placeholder="Ali"
                      value=""
                    />
                  </div>
                  <div className="from-group from-group__phone">
                    <label class="form-label">
                      Telefon raqamingizni kiriting
                      <span className="form-error__message">
                        <span className="form-tooltip"></span>
                      </span>
                    </label>
                    <input
                      id="phoneNumber"
                      placeholder="00 000 00 00"
                      name="phoneNumber"
                      className="form-input form-input__num mb-32 "
                      type="text"
                      value=""
                      inputmode="numeric"
                    />
                  </div>
                  <div className="between">
                    <div className="feedback-offert">
                      "So‘rov yuborish" tugmasini bosish orqali
                      <br />
                      <a
                        class="feedback-offert__link"
                        target="_blank"
                        href="/oferta.pdf"
                      >
                        Platformadan foydalanish qoidalari
                      </a>{" "}
                      ga rozilik bildirasiz.
                    </div>
                    <div>
                      <button
                        className="button button--light-green"
                        type="submit"
                        style="width: 100%;"
                      >
                        <span class="button__inner">
                          <span className="button__text">So‘rov yuborish</span>
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
