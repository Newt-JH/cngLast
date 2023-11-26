import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import TopButton from "../component/TopButton";
import axios from 'axios';

export default function Main() {

  const [productStatus, setProductStatus] = useState({
    releaseCount: 3,
    usedCount: 0,
    rentalCount: 0
  })

  const fetchData = async () => {
    try {
      const response = await axios.get('https://worldwide-gabriellia-cngtech.koyeb.app/productstatus');
      console.log(response);
      setProductStatus(response.data[0]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  },[])
  return (
    <>
      <TopButton />
      <div className="relative swiper mySwiper main">
        <ul className="swiper-wrapper full">
          <li
            className="w-full swiper-slide"
            style={{
              background:
                "url(/img/main/main_banner_bg.png)no-repeat 0 0 /cover",
            }}
          >
            <div className="flex items-center self-stretch lg:h-[915px] h-[50vh] overflow-hidden container">
              <div className="flex flex-col w-full gap-6">
                <p className=" lg:text-7xl text-[7.8vw] font-bold text-white lg:text-left text-center">
                ㈜C&amp;G Technology
                  <br />
                  새로운 가치의 창조
                </p>
                <h4 className="font-medium text-center text-white lg:text-left lg:h4 h6">
                  특화된 기술력으로 고객가치를
                  <br />
                  실현하는 ㈜C&amp;G TECH
                </h4>
              </div>
            </div>
          </li>
          <li
            className="w-full swiper-slide"
            style={{
              background:
                "url(/img/main/main_banner_bg2.png)no-repeat 0 0 /cover",
            }}
          >
            <div className="flex items-center self-stretch lg:h-[915px] h-[50vh] overflow-hidden container">
              <div className="flex flex-col w-full gap-6">
                <p className=" lg:text-7xl text-[7.8vw] font-bold text-white lg:text-left text-center">
                ㈜C&amp;G Technology
                  <br />
                  새로운 가치의 창조
                </p>
                <h4 className="font-medium text-center text-white lg:text-left lg:h4 h6">
                  특화된 기술력으로 고객가치를
                  <br />
                  실현하는 ㈜C&amp;G TECH
                </h4>
              </div>
            </div>
          </li>
          <li
            className="w-full swiper-slide"
            style={{
              background:
                "url(/img/main/main_banner_bg3.png)no-repeat 0 0 /cover",
            }}
          >
            <div className="flex items-center self-stretch lg:h-[915px] h-[50vh] overflow-hidden container">
              <div className="flex flex-col w-full gap-6">
                <p className=" lg:text-7xl text-[7.8vw] font-bold text-white lg:text-left text-center">
                ㈜C&amp;G Technology
                  <br />
                  새로운 가치의 창조
                </p>
                <h4 className="font-medium text-center text-white lg:text-left lg:h4 h6">
                  특화된 기술력으로 고객가치를
                  <br />
                  실현하는 ㈜C&amp;G TECH
                </h4>
              </div>
            </div>
          </li>
        </ul>
        <div className="swiper-pagination lg:!bottom-[20%] !bottom-[10%]" />
      </div>
      {/* 메인 베너  */}
      <div className="bg-white lg:bg-transparent lg:h-auto md:pt-0 overflow-hidden  lg:rounded-t-0 rounded-t-[30px] lg:overflow-visible relative z-10  lg:!mt-[-100px] mt-[-35px]">
        <section className="lg:m-auto rounded-t-[30px] lg:mb-14">
          <Header isMain />
          <div className="hidden menu_close" />
          <div className="flex flex-col justify-center items-center lg:h-[400px] max-w-[1300px]  gap-2.5 lg:p-9 rounded-lg bg-white shadow-3 self-stretch relative z-10 px-4 pt-[170px] lg:pt-9 mx-auto pb-[60px]">
            <div className="flex flex-col items-center justify-center gap-6">
              <p className="sm:text-[40px] text-[24px] font-bold text-center gradient1 text_clip">
                특화된 기술력으로 고객가치를
                <br />
                실현하는 ㈜C&amp;G TECH
              </p>
              <img alt="" src="/img/main/smile.png" />
              <p className="font-medium text-center lg:text-xl ">
                암롤박스의 특화된 기술력으로 깨끗하고 쾌적한 환경을 만들기 위해
                <br /> 그 어떤 종류의 폐기물도 처리가능한 ㈜C&amp;G TEC 만의 제작
                기술력을 제공합니다.
              </p>
            </div>
          </div>
        </section>
        {/* 1 */}
        <section
          className="lg:py-20 py-[5.2vw] overflow-hidden"
          style={{
            background:
              "url(/img/main/business_area_bg.png)no-repeat 0 0 /contain",
          }}
        >
          <div className="flex flex-col lg:flex-row 2xl:gap-[200px] lg:gap-[12.5vw] gap-9 justify-center container 2xl:px-20 ">
            <h3 className="">
              A COLLECTION OF
              <br />
              <strong
                className="text-primary"
                style={{
                  background:
                    "url(/img/after_stroke.svg)no-repeat 0 100%/contain",
                }}
              >
                ECO-FRIENDLY
              </strong>
              <br />
              TECHNOLOGIES
            </h3>
            <div className="flex flex-col gap-[18px]">
              <p className="flex flex-col gap-3 text-xl font-bold text-primary">
                Business
                <br />
                Area
                <span className="w-[100px] h-[5px] bg-primary" />
              </p>
              <p className="text-lg font-medium text-paragraph">
                국내 암롤박스 업계 최고의 기술력과 축적된 경험을 바탕으로
                <br />
                더욱 간편하고 깨끗한 환경 조성과 함께 고객가치 실현
              </p>
              <a href="/Sub1" className="btn_circle">
                <div className="">More View</div>
              </a>
            </div>
          </div>
          <ul className="container flex flex-col flex-grow gap-[4.2vw] py-[5vw] 2xl:px-20 ">
            <li>
              <a
                href="/Sub2"
                className="flex flex-col lg:flex-row items-center relative group lg:h-[400px] justify-end"
              >
                <img
                  alt =""
                  src="/img/main/product2.png"
                  className="lg:absolute top-0 right-[calc(50%+80px)]"
                />
                <div className="flex flex-col justify-end  self-stretch flex-grow gap-9 lg:px-[25px] lg:col-6 lg:py-0  py-[25px]">
                  <div className="flex flex-col gap-3.5">
                    <h3 className="flex flex-col gap-2.5">
                      <div className="flex items-center  gap-2.5">
                        <i className="tag bg-point1">Hot</i>
                        <i className="tag">New</i>
                      </div>
                      암롤박스
                    </h3>
                    <p className="text-lg font-medium text-paragraph">
                      다양한 종류의 폐기물 운반용 암롤박스 맞춤 제작
                    </p>
                  </div>
                  <button className="button_stroke">
                    More View
                    <span className="material-icons-round">chevron_right</span>
                  </button>
                </div>
              </a>
            </li>
            <li>
              <a
                href="/Sub2"
                className="flex flex-col-reverse lg:flex-row items-center relative group lg:h-[400px]"
              >
                <div className="flex flex-col justify-end  self-stretch flex-grow gap-9 lg:px-[25px] lg:col-6 lg:py-0  py-[25px]">
                  <div className="flex flex-col gap-3.5">
                    <h3 className="flex flex-col gap-2.5">
                      <div className="flex items-center  gap-2.5">
                        <i className="tag bg-point1">Hot</i>
                        <i className="tag">New</i>
                      </div>
                      고철박스 / 스크랩박스 / 방통
                    </h3>
                    <p className="text-lg font-medium text-paragraph">
                    차량 운반용이 아닌 집게차 등 장비를 사용하여 < br/> 내용물을 수집 할 수 있는 폐기물 박스 맞춤 제작
                    </p>
                  </div>
                  <button className="button_stroke">
                    More View
                    <span className="material-icons-round">chevron_right</span>
                  </button>
                </div>
                <img
                  alt =""
                  src="/img/main/scrabnox.png"
                  className="lg:absolute top-0 right-[calc(-50%+80px)]"
                  style={{ right: "calc(-50% + 80px)" }}
                />
              </a>
            </li>
            <li>
              <a
                href="/Sub2"
                className="flex flex-col lg:flex-row items-center relative group lg:h-[400px] justify-end"
              >
                <img
                  alt=""
                  src="/img/main/product13.png"
                  className="lg:absolute top-0 right-[calc(50%+80px)]"
                />
                <div className="flex flex-col justify-end  self-stretch flex-grow gap-9 lg:px-[25px] lg:col-6 lg:py-0  py-[25px]">
                  <div className="flex flex-col gap-3.5">
                    <h3 className="flex flex-col gap-2.5">
                      <div className="flex items-center  gap-2.5">
                        <i className="tag bg-point1">Hot</i>
                        <i className="tag bg-point3">Trending</i>
                      </div>
                      중고 암롤박스
                    </h3>
                    <p className="text-lg font-medium text-paragraph">
                    보다 저렴한 가격의 폐기물 처리 박스
                    </p>
                  </div>
                  <button className="button_stroke">
                    More View
                    <span className="material-icons-round">chevron_right</span>
                  </button>
                </div>
              </a>
            </li>
            <li>
              <a
                href="/Sub2"
                className="flex flex-col-reverse lg:flex-row items-center relative group lg:h-[400px]"
              >
                <div className="flex flex-col justify-end  self-stretch flex-grow gap-9 lg:px-[25px] lg:col-6 lg:py-0  py-[25px]">
                  <div className="flex flex-col gap-3.5">
                    <h3 className="flex flex-col gap-2.5">
                      <div className="flex items-center  gap-2.5">
                        <i className="tag bg-point1">Hot</i>
                        <i className="tag">New</i>
                      </div>
                      박스수리
                    </h3>
                    <p className="text-lg font-medium text-paragraph">
                    고장/파손된 제품 수리
                    </p>
                  </div>
                  <button className="button_stroke">
                    More View
                    <span className="material-icons-round">chevron_right</span>
                  </button>
                </div>
                <img
                  alt=""
                  src="/img/main/product4.png"
                  className="lg:absolute top-0 right-[calc(-50%+80px)]"
                />
              </a>
            </li>
          </ul>
        </section>
        {/* 2 */}
        <section className=" lg:bg-white bg-surfaceMid relative">
          <div className="w-[1350px] h-[460px] rounded-tl-full rounded-bl-full bg-surfaceMid absolute right-0 top-0" />
          <div
            className="absolute top-0 right-0 w-full h-full aboutUs_bg"
            style={{
              background: "url(/img/main/about_us_bg.png)no-repeat 50% -20%",
              backgroundBlendMode: "multiply",
              mixBlendMode: "multiply",
            }}
          />
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n      @media (max-width: 960px) {\n          .aboutUs_bg {\n            background: url(/img/main/about_us_bg.png)no-repeat 50% 12% !important;\n          }\n\n        }\n    ",
            }}
          />
          <main className="lg:py-[60px] py-10" style={{}}>
            <div className="container relative flex self-stretch justify-end gap-20">
              <img
                alt=""
                src="/img/main/product2.png"
                className="lg:absolute top-0 right-[calc(50%+80px)] lg:block hidden"
              />
              <div className="flex flex-col lg:flex-row  flex-grow gap-[30px] lg:col-6">
                <ul className="flex flex-col items-center self-stretch justify-center py-10 text-center lg:items-start gap-9 lg:text-left">
                  <li className="flex flex-col gap-3">
                    <p className="text-xl font-bold text-primary">About Us</p>
                    <span className="w-[100px] h-[5px] bg-primary" />
                  </li>
                  <li className="flex flex-col gap-3">
                    <h3>실시간 제품현황</h3>
                    <span className="text-lg font-medium text-paragraph">
                      즉시 출고를 위한
                      <br />
                      실시간 제품 현황을 안내하여
                      <br />
                      긴급 상황에 유연하게 대처 가능합니다.
                    </span>
                  </li>
                </ul>
                <ol className="flex flex-col justify-center  self-stretch flex-grow lg:gap-[15px] gap-12">
                  <li className="flex flex-col items-center self-stretch gap-4 lg:flex-row">
                    <p className="rounded-full sm:text-[40px] text-[30px] font-bold w-24 h-24 flex items-center  justify-center bg-white shadow-1">
                      <i className="gradient2 text_clip">{productStatus.releaseCount }</i>
                    </p>
                    <div className="flex items-center justify-center flex-grow gap-2 lg:flex-col">
                      <img alt="" src="/img/main/about_us_checkbox.png" />
                      <p className="text-lg font-medium ">즉시 출고 가능</p>
                    </div>
                  </li>
                  <li className="flex flex-col items-center self-stretch gap-4 lg:flex-row">
                    <p className="rounded-full sm:text-[40px] text-[30px] font-bold w-24 h-24 flex items-center  justify-center bg-white shadow-1">
                      <i className="gradient2 text_clip">{ productStatus.rentalCount }</i>
                    </p>
                    <div className="flex items-center justify-center flex-grow gap-2 lg:flex-col">
                      <img alt="" src="/img/main/about_us_checkbox.png" />
                      <p className="text-lg font-medium ">렌탈 가능</p>
                    </div>
                  </li>
                  <li className="flex flex-col items-center self-stretch gap-4 lg:flex-row">
                    <p className="rounded-full sm:text-[40px] text-[30px] font-bold w-24 h-24 flex items-center  justify-center bg-white shadow-1">
                      <i className="gradient2 text_clip">{ productStatus.usedCount }</i>
                    </p>
                    <div className="flex items-center justify-center flex-grow gap-2 lg:flex-col">
                      <img alt="" src="/img/main/about_us_checkbox.png" />
                      <p className="text-lg font-medium ">즉시 중고 가능</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </main>
          {/* <div class="absolute right-0 w-16 h-16 rounded-full bg-surfaceLow top-1/2 mix-blend-multiply"></div> */}
        </section>
        {/* 3 */}
        <section className="lg:py-20 py-[5.2vw]">
          <main className="container relative">
            <div className="absolute right-0 h-1/2 bottom-0 lg:w-[300px] w-9 bg-gradient-to-r from-transparent to-white z-10" />
            <div className="absolute left-0 h-1/2 bottom-0 lg:w-[300px] w-9 bg-gradient-to-l from-transparent to-white z-10" />
            <div className="flex flex-col items-center justify-center gap-3 py-10 pb-8">
              <p className="flex flex-col gap-3 text-xl font-bold text-center text-primary">
                Partner
                <span className="w-[100px] h-[5px] bg-primary" />
              </p>
              <h2
                className="flex flex-col gap-4 text-center"
                style={{
                  background:
                    "url(/img/after_stroke.svg)no-repeat 0 25%/contain",
                }}
              >
                Our Partner
                <span className="text-lg font-medium text-paragraph">
                  100여개의 다양한 기업들의 선택으로 제품에 대한 <br />
                  기술력과 신뢰도를 보여줍니다.
                </span>
              </h2>
            </div>
            <ol className="flex flex-col self-stretch justify-center flex-grow py-10 overflow-hidden gap-9 partner">
              <li className="flex items-center self-stretch gap-12 animate-[moveforeverL_30s_linear_infinite]">
                <img alt="" src="/img/main/partner/1.png" />
                <img alt="" src="/img/main/partner/2.png" />
                <img alt="" src="/img/main/partner/3.png" />
                <img alt="" src="/img/main/partner/4.png" />
                <img alt="" src="/img/main/partner/5.png" />
                <img alt="" src="/img/main/partner/6.png" />
                <img alt="" src="/img/main/partner/7.png" />
                <img alt="" src="/img/main/partner/8.png" />
                <img alt="" src="/img/main/partner/9.png" />
                <img alt="" src="/img/main/partner/10.png" />
                <img alt="" src="/img/main/partner/11.png" />
                <img alt="" src="/img/main/partner/12.png" />
                <img alt="" src="/img/main/partner/13.png" />
                <img alt="" src="/img/main/partner/1.png" />
                <img alt="" src="/img/main/partner/2.png" />
                <img alt="" src="/img/main/partner/3.png" />
                <img alt="" src="/img/main/partner/4.png" />
                <img alt="" src="/img/main/partner/5.png" />
                <img alt="" src="/img/main/partner/6.png" />
                <img alt="" src="/img/main/partner/7.png" />
                <img alt="" src="/img/main/partner/8.png" />
                <img alt="" src="/img/main/partner/9.png" />
                <img alt="" src="/img/main/partner/10.png" />
                <img alt="" src="/img/main/partner/11.png" />
                <img alt="" src="/img/main/partner/12.png" />
                <img alt="" src="/img/main/partner/13.png" />
              </li>
              <li className="flex justify-end self-stretch gap-12  animate-[moveforeverR_30s_linear_infinite]">
                <img alt="" src="/img/main/partner/14.png" />
                <img alt="" src="/img/main/partner/15.png" />
                <img alt="" src="/img/main/partner/16.png" />
                <img alt="" src="/img/main/partner/17.png" />
                <img alt="" src="/img/main/partner/18.png" />
                <img alt="" src="/img/main/partner/19.png" />
                <img alt="" src="/img/main/partner/20.png" />
                <img alt="" src="/img/main/partner/21.png" />
                <img alt="" src="/img/main/partner/22.png" />
                <img alt="" src="/img/main/partner/23.png" />
                <img alt="" src="/img/main/partner/24.png" />
                <img alt="" src="/img/main/partner/25.png" />
                <img alt="" src="/img/main/partner/26.png" />
                <img alt="" src="/img/main/partner/27.png" />
                <img alt="" src="/img/main/partner/28.png" />
                <img alt="" src="/img/main/partner/29.png" />
                <img alt="" src="/img/main/partner/14.png" />
                <img alt="" src="/img/main/partner/15.png" />
                <img alt="" src="/img/main/partner/16.png" />
                <img alt="" src="/img/main/partner/17.png" />
                <img alt="" src="/img/main/partner/18.png" />
                <img alt="" src="/img/main/partner/19.png" />
                <img alt="" src="/img/main/partner/20.png" />
                <img alt="" src="/img/main/partner/21.png" />
                <img alt="" src="/img/main/partner/22.png" />
                <img alt="" src="/img/main/partner/23.png" />
                <img alt="" src="/img/main/partner/24.png" />
                <img alt="" src="/img/main/partner/25.png" />
                <img alt="" src="/img/main/partner/26.png" />
                <img alt="" src="/img/main/partner/27.png" />
                <img alt="" src="/img/main/partner/28.png" />
                <img alt="" src="/img/main/partner/29.png" />
              </li>
            </ol>
          </main>
          {/* <div class="absolute right-0 w-16 h-16 rounded-full bg-surfaceLow top-1/2 mix-blend-multiply"></div> */}{" "}
        </section>
        {/* 4 */}
        <div
          className="block py-[60px] shadow-3 text-white mt-[100px] "
          style={{
            background: "url(/img/main/ask_bg.png)no-repeat 0% 35% /cover",
          }}
        >
          <div className="container flex flex-col gap-20">
            <div className="flex flex-col gap-8">
              <p className=" text-[55px] font-bold">견적 문의하기</p>
              <p className="text-2xl !font-light ">
                문의사항을 남겨주시면 빠르고 상세하게 답변 드리겠습니다.
              </p>
            </div>
            <div className="flex flex-col gap-16 w-[360px]">
              <h5 className="">Call: 010-5403-7768</h5>
              <Link
                to="/Sub3"
                className="flex items-center justify-between pb-5 text-xl font-medium border-b border-solid group"
              >
                문의하기
                <span className="text-3xl text-right material-icons-round  group-hover:rotate-[360deg] transition-all">
                  add
                </span>
              </Link>
            </div>
          </div>
        </div>
        {/* 5 */}
      </div>
      <Footer />
    </>
  );
}
