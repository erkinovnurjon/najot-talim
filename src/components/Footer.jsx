import { Link } from "react-router-dom"
import { Facebook, Instagram, Linkedin, Telegram, Youtube } from "../assets/Icon"

const Footer = () => {
  return (
    <>
     <div className="footer">
      <div className="container">
            
            <div className="footer-top">
                  <div className="top-one">
                        <img className="footer-logo" src="https://najottalim.uz/_next/static/media/logo-img.2935c262.svg" alt="" />
                        <p>Onlayn platformaga tegishli barcha materiallar NAJOT TALIM MARKAZI MCHJning mulki hisoblanadi. Ushbu materiallardan onlayn ta‘lim olishdan tashqari nusxa ko‘chirish, tarqatish va boshqa maqsadlarda foydalanish qonunan man etiladi.</p>
                  </div>
                  <div className=" footer-center">

                  <div className="top-three">
                        <h3>Malumotlar</h3>
                        <ul>
                              <li>FAQ</li>
                              <li>Blog</li>
                              <li>Oferta</li>
                        </ul>
                  </div>
                  <div className="top-three">
                        <h3>Ommabop kurslar</h3>
                        <ul>
                              <li>SMM onlayn</li>
                              <li>Social Media Design</li>
                              <li>Dasturlash Foundation</li>
                              <li>Adobe Illustratorlar</li>
                        </ul>
                  </div>
                  <div className="top-three">
                        <h3>Bizning Loyihalar</h3>
                        <ul>
                              <li>Osmondagi Bolalar</li>
                              <li>0 dan 1gacha</li>
                              <li>AbuTech</li>
                              <li>Alohida mavzu</li>
                        </ul>
                  </div>
                  
                  </div>
                 
                  
                 
            </div>
            <hr />
            
            
            <div className="footer-bottom">
                  <div>
                        <div>
                              <p>© Najot Talim, 2023 <br />
                                Barcha huquqlar himoyalangan.</p>
                        </div>
                       
                  </div>
                  <div className="bottom-three">
                        <div>
                              <h3>Toshkent shahri, Chilonzor-9, Qatortol kochasi</h3>
                              <p>Moljal: Rayhon milliy taomlari qarshi tomoni, 1- va 2-uylar orqa tomoni.</p>
                        </div>
                        <div>
                              <h3>Tarmoqlar :</h3>
                              <span style={{display:"flex", alignItems:"center", gap:"10px"}}>
                                    <Link to={'/telegram.com'} >
                                       <Telegram />
                                       
                                    </Link>
                                    <Link to={'/facebook.com'} >
                                       <Facebook />
                                    </Link>
                                    <Link to={'/youtube.com'} >
                                     <Youtube />
                                    </Link>
                                    <Link to={'/instagram.com'} >
                                      <Instagram />
                                    </Link>
                                    <Link to={'/linkedin.com'} >
                                      
                                    <Linkedin />
                                    </Link>
                                   
                                   
                                  
                                    
                              </span>
                        </div>
                       <div className="footer-input">
                             <h3>Telefon raqami :</h3>
                             <input type="tel" name="tel" placeholder="+998 (78) 888 9 888" />
                       </div>

                  </div>

            </div>
         
      </div>
     </div>
    </>
  )
}

export default Footer