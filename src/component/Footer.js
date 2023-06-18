import React, { useState } from "react";

export default function Footer() {
  const [openFamilySite, setOpenFamilySite] = useState(false);

  const toggleOpenFamilySite = () => {
    setOpenFamilySite(!openFamilySite);
  };
  return (
    <footer className="w-full lg:py-[150px] py-12 border-t-[3px] border-primary border-solid bg-white ">
      <div className="container flex justify-between lg:flex-row flex-col gap-10">
        <div className="cn">
        <a className="logo lg:h-[60px] h-14">
          <img alt="" src="/img/logo_l_e.svg" className="h-full" />
        </a>
        <li>
          <ul className="">
          <li className="">
            <br /><br /><h5>입금은행</h5><br />
            <ol className="flex flex-col gap-4 text-xl font-medium pt-6 text-text2">
              <li className="flex lg:flex-col gap-2">
                <strong className="min-w-[100px] inline-block">신한은행</strong>
                <br />140-012-671367 <br />㈜씨앤지테크 박찬기
                  </li>

            </ol>
          </li>
          </ul>
          </li>
          </div>
        <ul className="flex justify-between lg:col-8 gap-4 flex-col lg:flex-row">
          <li className="">
            <h5>CONTACT</h5>
            <ol className="flex flex-col gap-4 text-xl font-medium pt-6 text-text2">
              <li className="flex lg:flex-col gap-2">
                <strong className="min-w-[100px] inline-block">Adress</strong>
                경기도 평택시 서탄면 서탄2로 226
              </li>
              <li className="flex lg:flex-col gap-2">
                <strong className="min-w-[100px] inline-block">Tel, Fax</strong>
                031-668-8386, 031-668-8387
              </li>
              <li className="flex lg:flex-col gap-2">
                <strong className="min-w-[100px] inline-block">Mob</strong>
                010-5403-7768
              </li>
              <li className="flex lg:flex-col gap-2">
                <strong className="min-w-[100px] inline-block">Email</strong>
                cgtech8386@naver.com
              </li>
            </ol>
          </li>
          <li className="lg:block hidden">
            <h5>About</h5>
            <ol className="flex flex-col gap-6 text-xl font-medium pt-6  text-text2">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/Sub1">기업소개</a>
              </li>
              <li>
                <a href="/Sub2">제품소개</a>
              </li>
              <li>
                <a href="/Rental">렌탈/대여</a>
              </li>
              <li>
                <a href="/Sub3">견적문의</a>
              </li>
            </ol>
          </li>
          <li className="flex flex-col gap-4 text-xl font-medium">
            <h5>Family Site</h5>
            <div
              className="relative p-4 border border-text2 w-[180px]"
              style={{ cursor: "pointer" }}
              onClick={toggleOpenFamilySite}
            >
              <a
                className={`flex justify-between h-full dropdown-toggle ${
                  openFamilySite ? "on" : ""
                }`}
              >
                Family Site
                <span className="transition-all material-icons-round">
                  expand_more
                </span>
              </a>
              <ul
                className="p-4 border border-text2 dropdown absolute hidden w-[180px] -left-px top-full"
                style={{ display: openFamilySite ? "block" : "none" }}
              >
                <li>
                  <a href="/">크라샤 </a>
                </li>
              </ul>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n          .dropdown-toggle.on span{ transform: rotate(180deg) ;}\n        ",
              }}
            />
          </li>
        </ul>
      </div>
      <div className="container pt-[60px]">
        <ul className="flex border-b border-solid pb-9">
          <li>
            <a href="">개인정보처리방침 | </a>
          </li>
          <li>
            <a href=""> &nbsp;개인정보처리방침</a>
          </li>
          <li>
            <p> &emsp;&emsp;사업자등록번호 : 409-81-01513 &nbsp;&nbsp; 대표:박찬기 &nbsp;&nbsp; 통신판매업신고번호: 제2021-경기송탄-0380호</p>
          </li>
        </ul>
        <div className="flex justify-between pt-9 lg:flex-row flex-col gap-4">
          <p>Copyright © 2022 ㈜C&amp;G tech. All Rights Reserved.</p>
          <ul className="flex gap-4">
            <li>
              <a href="https://instagram.com/cgt0706?igshid=NTc4MTIwNjQ2YQ==">
                <img alt="" src="/img/icon/Instagtam.svg" />
              </a>
            </li>
            <li>
              <a href="https://youtube.com/@user-kv2gh1yi2k">
                <img alt="" src="/img/icon/Youtube.svg" />
              </a>
            </li>
            <li>
              <a href="https://m.blog.naver.com/PostList.naver?blogId=cgtech8386">
                <img alt="" src="/img/icon/Naver.svg" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/cgtech8386?mibextid=LQQJ4d">
                <img alt="" src="/img/icon/Facebook.svg" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
