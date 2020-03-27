import React from "react";
import { Social } from "../social/social";
import "./footer.scss";

export const CloneFooter = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="firstRow footerRow">
          <div className="footerLinksBlock">
            <h3 className="linkBlockTitle">AirBnb</h3>
            <ul className="footerLinks">
              <li>
                <a href="" className="footerLink">
                  Карьера
                </a>
              </li>
              <li>
                <a href="" className="footerLink">
                  Новости
                </a>
              </li>
              <li>
                <a href="" className="footerLink">
                  Правила
                </a>
              </li>
              <li>
                <a href="" className="footerLink">
                  Принадлежность, этнокультурные и другие различия
                </a>
              </li>
              <li>
                <a href="" className="footerLink">
                  Доступность
                </a>
              </li>
            </ul>
          </div>
          <div className="footerLinksBlock">
            <h3 className="linkBlockTitle">Подробнее о нас</h3>
            <ul className="footerLinks">
              <li>
                <a href="" className="footerLink">
                  Доверие и безопасность
                </a>
              </li>
              <li>
                <a href="" className="footerLink">
                  Бонус на путешествие
                </a>
              </li>
              <li>
                <a href="" className="footerLink">
                  Airbnb Citizen
                </a>
              </li>
              <li>
                <a href="" className="footerLink">
                  Деловые поездки
                </a>
              </li>
              <li>
                <a href="" className="footerLink">
                  Чем заняться
                </a>
              </li>
              <li>
                <a href="" className="footerLink">
                  Airbnbmag
                </a>
              </li>
            </ul>
          </div>
          <div className="footerLinksBlock">
            <h3 className="linkBlockTitle">Прием гостей</h3>
            <ul className="footerLinks">
              <li>
                <a href="" className="footerLink">
                  Почему стоит принимать гостей
                </a>
              </li>
              <li>
                <a href="" className="footerLink">
                  Гостеприимство
                </a>
              </li>
              <li>
                <a href="" className="footerLink">
                  Как стать ответственным хозяином
                </a>
              </li>
              <li>
                <a href="" className="footerLink">
                  Организация Впечатлений
                </a>
              </li>
              <li>
                <a href="" className="footerLink">
                  Open Homes
                </a>
              </li>
            </ul>
          </div>
          <div className="footerLinksBlock">
            <h3 className="linkBlockTitle">Поддержка</h3>
            <ul className="footerLinks">
              <li>
                <a href="" className="footerLink">
                  Поддержка
                </a>
              </li>
              <li>
                <a href="" className="footerLink">
                  Поддержка соседей
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="secondRow footerRow">
          <div className="copyrights">
            <div className="footerLogo">
              <img src="./logo.svg" alt="logo" />
            </div>
            <div className="copyrightText">
              <p>© 2020 Airbnb, Inc. All rights reserved.</p>
            </div>
            <ul className="copyrightLinks">
              <li>
                <a href="">Уcловия</a>
              </li>
              <li>
                <a href="">Конфиденциальность </a>
              </li>
              <li>
                <a href="">Карта сайта</a>
              </li>
            </ul>
          </div>
          <Social />
        </div>
      </div>
    </footer>
  );
};
