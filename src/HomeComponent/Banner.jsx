import { useState } from "react";
import { Link } from "react-router-dom";
import "./Banner.scss";

const Banner = () => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission here
  };

  return (
    <div className="container">
      <div className="banner-nt">
        <div className="banner-nt__inner">
          <div className="flex">
            <div className="f-half f-half-bg"></div>
            <div className="f-half f-half-form">
              <form className="feedback-form" onSubmit={handleSubmit}>
                <div className="feedback-form__title mb-16">
                  <h1 className="feedback__title">Yordam kerakmi?</h1>
                  <Link className="green-text" to="/faq">
                    FAQ
                  </Link>{" "}
                  bolimi ham sizga yordam bera olishga yordam bera oladimi?
                  Telefon raqamingizni yozib qoldiring, biz sizga qongiroq qilamiz va birorta ham
                  savolingiz javobsiz qolmasligiga harakat qilamiz.
                </div>
                <div className="form-group">
                  <label className="form-label">
                    Ismingizni kiriting
                  </label>
                  <input
                    className="form-input mb-16"
                    id="studentName"
                    type="text"
                    required
                    minLength={3}
                    maxLength={255}
                    name="studentName"
                    placeholder="Ali"
                    value={title}
                    onChange={handleTitleChange}
                  />
                </div>
                <div className="from-group from-group__phone">
                  <label className="form-label">
                    Telefon raqamingizni kiriting
                  </label>
                  <input
                    id="phoneNumber"
                    placeholder="+998 90 125 45 44"
                    name="phoneNumber"
                    className="form-input form-input__num mb-32"
                    type="text"
                    value={value}
                    onChange={handleValueChange}
                  />
                </div>
                <div className="between">
                  <div className="feedback-offert">
                    Sorov yuborish tugmasini bosish orqali
                    <br />
                    <Link
                      className="feedback-offert__link"
                      target="_blank"
                      to="/oferta.pdf"
                    >
                      Platformadan foydalanish qoidalari
                    </Link>{" "}
                    ga rozilik bildirasiz.
                  </div>
                  <div>
                    <button
                      className="button button--light-green"
                      type="submit"
                      style={{ width: "100%" }}
                    >
                      <span className="button__inner">
                        <span className="button__text">Sorov yuborish</span>
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
  );
};

export default Banner;
