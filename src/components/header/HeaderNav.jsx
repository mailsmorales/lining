import React from "react";
import "./BaseHeader.scss";

export const HeaderNav = () => {
  return (
    <div className="nav">
      <div className="nav_content">
        <div className="nav_item">
          <ul class="menu cf">
            <li>
              <a href="/">Главная</a>
            </li>
            <li>
              <a href="#">Мужское</a>
              <ul class="submenu">
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
              <ul class="submenu">
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
              <a href="#">Lining Wade</a>
            </li>
            <li>
              <a href="#">О Li-Ning</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
