import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useScrollPosition from "../hooks/useScrollPosition";

export default function Header({ isMain = false }) {
  const [openHamMenu, setOpenHamMemu] = useState(false);
  const [scrollPosition] = useScrollPosition();
  const navigate = useNavigate(); // useNavigate 훅 사용

  const clickLog = () => {
    navigate("/"); // 메인 페이지로 이동
    window.location.reload();
  };

  const getMainHeader = () => (
    <nav className="lg:container flex items-center justify-between w-full h-full">
      <Link className="logo lg:px-[50px] h-[60px] px-4" onClick={clickLog}>
        <img
          src="/img/logo_d_e.svg"
          className="hidden h-full lg:block logo_d_e"
        />
        <img
          src="/img/logo_l_e.svg"
          className="block h-full lg:hidden logo_l_e"
        />
      </Link>
      <ol className="items-center self-stretch justify-center flex-grow gap-20 lg:flex menu">
        <li>
          <Link to="/Sub1">기업소개</Link>
        </li>
        <li>
          <Link to="/Sub2">제품소개</Link>
        </li>
        <li>
          <Link to="/Rental">렌탈/대여</Link>
        </li>
        <li>
          <Link to="/Sub3">문의하기</Link>
        </li>
      </ol>
      <Link to="/Sub2_2" className="button_bg lg:flex" style={{ width: '80%', marginLeft: '50px' }}>
        <div style={{fontSize: '80%'}}>
          견적 요청하기
        </div>
        <span className="material-icons-round">chevron_right</span>
      </Link>
      <button
        type="button"
        className="h-full w-[80px] btn_menu_btn flex items-center justify-center md:hidden"
      >
        <span className="menu_icon" />
      </button>
    </nav>
  );

  const getSubHeader = () => (
    <nav className="lg:container flex items-center justify-between w-full h-full">
      <Link to="/" className="logo lg:px-[50px] h-[60px] px-4" onClick={clickLog}>
        <img alt="" src="/img/logo_l_e.svg" className="block h-full logo_l_e" />
      </Link>
      <ol
        className={`items-center self-stretch justify-center flex-grow gap-20 lg:flex menu ${
          openHamMenu ? "on" : ""
        }`}
      >
        <li>
          <Link to="/Sub1">기업소개</Link>
        </li>
        <li>
          <Link to="/Sub2">제품소개</Link>
        </li>
        <li>
          <Link to="/Rental">렌탈/대여</Link>
        </li>
        <li>
          <Link to="/Sub3">문의하기</Link>
        </li>
      </ol>
      <a
        href="/Sub2_2"
        className=" button_bg lg:flex"
        style={{ width: '80%', marginLeft: '50px' }}
      >
        <div style={{fontSize: '80%'}}>
          견적 요청하기
        </div>
        <span className="material-icons-round">chevron_right</span>
      </a>
      <button
        type="button"
        className={`h-full w-[80px] btn_menu_btn flex items-center justify-center md:hidden ${
          openHamMenu ? "on" : ""
        }`}
        onClick={() => setOpenHamMemu(!openHamMenu)}
      >
        <span className="menu_icon" />
      </button>
    </nav>
  );

  return (
    <>
      <header
        className={`${isMain ? "header_main" : ""} ${
          scrollPosition > 80 ? "on" : ""
        }`}
        style={{ height: "80px" }}
      >
        {isMain ? getMainHeader() : getSubHeader()}
      </header>
      <div
        className="hidden menu_close"
        style={{ display: openHamMenu ? "block" : "none" }}
      ></div>
    </>
  );
}
