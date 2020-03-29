import React from "react";
import "./header.scss";
import { Icon } from "semantic-ui-react";

export const CloneHeader = ({ query, setQuery }) => {
  const makeQuery = (e) => {
    setQuery(e.target.value);
  };
  return (
    <header>
      <div className="firstRow headerRow">
        <div className="leftSide">
          <div className="logo">
            <img src="./logo.svg" alt="logo" />
          </div>
          <div className="search">
            <div className=" ui left icon input">
              <input
                placeholder="City"
                name="text"
                type="text"
                value={query || ""}
                onChange={makeQuery}
              />
              <i aria-hidden="true" className="search icon"></i>
            </div>
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
