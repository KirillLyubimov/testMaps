import React from "react";
import "./header.scss";
import { Input } from "semantic-ui-react";
import { Icon } from "semantic-ui-react";

const MyInput = () => (
  <Input icon="search" iconPosition="left" placeholder="Search..." />
);

export const CloneHeader = () => {
  return (
    <header>
      <div className="firstRow headerRow">
        <div className="leftSide">
          <div className="logo">
            <img src="./logo.svg" alt="logo" />
          </div>
          <div className="search">
            <MyInput />.
          </div>
        </div>
        <div className="rightSide">
          <nav>
            <ul className="navMenu">
              <li className="navBTN">
                <button>
                  <Icon name="globe" size="small" /> Lang
                </button>
              </li>
              <li className="navBTN">
                <button>
                  <Icon name="dollar sign" size="small" /> Currency
                </button>
              </li>
              <li className="navBTN">
                <button>Принимайте гостей</button>
              </li>
              <li className="navBTN">
                <button>Поддержка</button>
              </li>
              <li className="navBTN">
                <button>Зарегистрироваться</button>
              </li>
              <li className="navBTN">
                <button>Войти</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
