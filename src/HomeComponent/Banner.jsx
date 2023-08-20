/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import "./Banner.scss"
import { useState } from "react";
const Banner = () => {
  const [value , setVaule] = useState("")
  const [title , settitle] = useState("")
  return (
    <>
      <div className="container">
        <div className="banner-nt">
          <div className="banner-nt__inner">
            <div className="flex">
              <div className="f-half f-half-bg"></div>
              <div className="f-half f-half-form">
                <form action="https://echo.htmlacademy.ru" className="feedback-form">
                  <div className="feedback-form__title mb-16">
                    <h1 className="feedback__title">Yordam kerakmi?</h1>
                    <Link className="green-text">FAQ</Link>
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
                      name="studentName"
                      placeholder="Ali"
                      value={title}
                      onChange={(e)=> settitle(e.target.value)}
                    />
                  </div>
                  <div className="from-group from-group__phone">
                    <label className="form-label">
                      Telefon raqamingizni kiriting
                      <span className="form-error__message">
                        <span className="form-tooltip"></span>
                      </span>
                    </label>
                    <input
                      id="phoneNumber"
                      placeholder="+998 90 125 45 44"
                      name="phoneNumber"
                      className="form-input form-input__num mb-32 "
                      type="text"
                      value={value}
                      onChange={(e) => setVaule(e.target.value)}
                    />
                  </div>
                  <div className="between">
                    <div className="feedback-offert">
                      "So‘rov yuborish" tugmasini bosish orqali
                      <br />
                      <Link
                        className="feedback-offert__link"
                        target="_blank"
                        href="/oferta.pdf"
                      >
                        Platformadan foydalanish qoidalari
                      </Link>
                      ga rozilik bildirasiz.
                    </div>
                    <div>
                      <button
                        className="button button--light-green"
                        type="submit"
                      >
                        <span className="button__inner">
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
