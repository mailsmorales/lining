import React from "react";
import "./BaseHeader.scss";

export const HeaderNav = () => {
  return (
    <div className="nav">
      <div className="nav_content">
        <ul>
          <li>
            <a href="#">Главная</a>
          </li>
          <li>
            <a href="#">Мужское</a>
            <ul>
              <li>
                <a href="#">Кросовки</a>
              </li>
              <li>
                <a href="#">Одежда</a>
              </li>
              <li>
                <a href="#">Аксессуары</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Женское</a>
            <ul>
              <li>
                <a href="#">Кросовки</a>
              </li>
              <li>
                <a href="#">Одежда</a>
              </li>
              <li>
                <a href="#">Аксессуары</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">lining wade</a>
          </li>
          <li>
            <a href="#">о li-ning</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
