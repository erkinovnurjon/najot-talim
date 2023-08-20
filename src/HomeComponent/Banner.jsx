<<<<<<< HEAD
import React from "react";

const Banner = () => {
=======
/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import "./Banner.scss"
import { useState } from "react";
const Banner = () => {
  const [value , setVaule] = useState("")
  const [title , settitle] = useState("")
>>>>>>> about
  return (
    <>
      <div className="container">
        <div className="banner-nt">
          <div className="banner-nt__inner">
            <div className="flex">
              <div className="f-half f-half-bg"></div>
              <div className="f-half f-half-form">
<<<<<<< HEAD
                <form className="feedback-form">
                  <div className="feedback-form__title mb-16">
                    <h1 className="feedback__title">Yordam kerakmi?</h1>
                    <a className="green-text" href="">
                      {" "}
                      FAQ
                    </a>{" "}
                 boʻlimi ham sizga yordam bera olmadimi? Telefon raqamingizni
=======
                <form action="https://echo.htmlacademy.ru" className="feedback-form">
                  <div className="feedback-form__title mb-16">
                    <h1 className="feedback__title">Yordam kerakmi?</h1>
                    <Link className="green-text">FAQ</Link>
                    boʻlimi ham sizga yordam bera olmadimi? Telefon raqamingizni
>>>>>>> about
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
<<<<<<< HEAD
                      minlength="3"
                      maxlength="255"
                      name="studentName"
                      placeholder="Ali"
                      value=""
                    />
                  </div>
                  <div className="from-group from-group__phone">
                    <label class="form-label">
=======
                      name="studentName"
                      placeholder="Ali"
                      value={title}
                      onChange={(e)=> settitle(e.target.value)}
                    />
                  </div>
                  <div className="from-group from-group__phone">
                    <label className="form-label">
>>>>>>> about
                      Telefon raqamingizni kiriting
                      <span className="form-error__message">
                        <span className="form-tooltip"></span>
                      </span>
                    </label>
                    <input
                      id="phoneNumber"
<<<<<<< HEAD
                      placeholder="00 000 00 00"
                      name="phoneNumber"
                      className="form-input form-input__num mb-32 "
                      type="text"
                      value=""
                      inputmode="numeric"
=======
                      placeholder="+998 90 125 45 44"
                      name="phoneNumber"
                      className="form-input form-input__num mb-32 "
                      type="text"
                      value={value}
                      onChange={(e) => setVaule(e.target.value)}
>>>>>>> about
                    />
                  </div>
                  <div className="between">
                    <div className="feedback-offert">
                      "So‘rov yuborish" tugmasini bosish orqali
                      <br />
<<<<<<< HEAD
                      <a
                        class="feedback-offert__link"
=======
                      <Link
                        className="feedback-offert__link"
>>>>>>> about
                        target="_blank"
                        href="/oferta.pdf"
                      >
                        Platformadan foydalanish qoidalari
<<<<<<< HEAD
                      </a>{" "}
=======
                      </Link>
>>>>>>> about
                      ga rozilik bildirasiz.
                    </div>
                    <div>
                      <button
                        className="button button--light-green"
                        type="submit"
<<<<<<< HEAD
                        style="width: 100%;"
                      >
                        <span class="button__inner">
=======
                      >
                        <span className="button__inner">
>>>>>>> about
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
