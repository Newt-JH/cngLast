import React, { useState } from "react";
import TopButton from "../../component/TopButton";
import Header from "../../component/Header";
import Footer from "../../component/Footer";

export default function SubPage21() {
  const [openDetailSelect1, setOpenDetailSelect1] = useState(false);
  const [openDetailSelect2, setOpenDetailSelect2] = useState(false);

  return (
    <>
      <TopButton />
      <Header />
      <div className="hidden menu_close" />
      <div className="flex  max-w-[1300px] gap-[50px] container pt-12 mt-20 product">
        <div className="flex flex-col  flex-grow pb-[30px] col-6">
          <div className="flex  self-stretch  overflow-hidden pb-[30px] swiper mySwiper2 w-full">
            <ul className=" swiper-wrapper ">
              <li className="relative overflow-hidden bg-black/50 swiper-slide group transition-all">
                <img src="/img/introduce2/product.png" className="h-full" />
                <a className="absolute left-[212px] top-[270px] gap-3 px-[30px] py-4 rounded-md border border-white group-hover:flex hidden text-[22px] font-bold  text-white transition">
                  More View
                  <i className=" text-lg text-center text-white material-icons-round">
                    chevron_right
                  </i>
                </a>
              </li>
              <li className="relative overflow-hidden bg-black/50 swiper-slide ">
                <div className=" w-[592px] h-[293px]" />
                <a className="flex  items-center  absolute left-[212px] top-[270px] gap-3 px-[30px] py-4 rounded-md border border-white">
                  <p className=" text-[22px] font-bold  text-white">
                    More View
                  </p>
                  <i className=" text-lg text-center text-white material-icons-round">
                    chevron_right
                  </i>
                </a>
              </li>
              <li className="flex flex-col  flex-grow relative overflow-hidden gap-2.5 px-1 py-[154px] bg-black/50 swiper-slide">
                <div className=" w-[592px] h-[293px]" />
                <a className="flex  items-center  absolute left-[212px] top-[270px] gap-3 px-[30px] py-4 rounded-md border border-white">
                  <p className=" text-[22px] font-bold  text-white">
                    More View
                  </p>
                  <i className=" text-lg text-center text-white material-icons-round">
                    chevron_right
                  </i>
                </a>
              </li>
              <li className="flex flex-col  flex-grow relative overflow-hidden gap-2.5 px-1 py-[154px] bg-black/50 swiper-slide">
                <div className=" w-[592px] h-[293px]" />
                <a className="flex  items-center  absolute left-[212px] top-[270px] gap-3 px-[30px] py-4 rounded-md border border-white">
                  <p className=" text-[22px] font-bold  text-white">
                    More View
                  </p>
                  <i className=" text-lg text-center text-white material-icons-round">
                    chevron_right
                  </i>
                </a>
              </li>
            </ul>
          </div>
          <div thumbsslider="" className="swiper mySwiper w-full">
            <ul className="swiper-wrapper">
              <li className="flex bg-[url('a.png')] !w-[100px] h-[100px] border border-[#5e635f] swiper-slide overflow-hidden">
                <img src="/img/introduce2/product.png" className="w-full" />
              </li>
              <li className="flex bg-[url('a.png')] !w-[100px] h-[100px] border border-[#5e635f] swiper-slide">
                <img className="  " src="80.png" />
              </li>
              <li className="flex bg-[url('a.png')] !w-[100px] h-[100px] border border-[#5e635f] swiper-slide">
                <img className="  " src="80.png" />
              </li>
              <li className="flex bg-[url('a.png')] !w-[100px] h-[100px] border border-[#5e635f] swiper-slide">
                <img className="  " src="80.png" />
              </li>
            </ul>
          </div>
        </div>
        {/* swiper end*/}
        <div className="flex flex-col  flex-grow gap-[30px] py-0.5">
          <div className="flex flex-col  self-stretch  gap-7">
            <div className="flex  self-stretch  gap-4 pb-2.5  border-r-0 border-b border-l-0 border-[#a9abaa]">
              <div
                className="flex  items-center  relative overflow-hidden px-3 rounded-[3px] bg-[#00bf96]"
                style={{
                  boxShadow:
                    "0px 2px 6px 0 rgba(19,26,21,0.15), 0px 1px 2px 0 rgba(5,185,117,0.3)",
                }}
              >
                <p className=" text-xs text-center text-white">New</p>
              </div>
              <div className="flex  items-center  relative gap-2">
                <div className=" w-px h-3 bg-[#a9abaa]" />
                <div className="flex  items-center  relative overflow-hidden gap-[3px]">
                  <a
                    href="/"
                    className=" text-lg text-center text-[#a9abaa] material-icons-round"
                  >
                    home
                  </a>
                  <p className=" text-sm  text-[#131a15]">제품소개</p>
                </div>
                <a
                  href=""
                  className="p-[3px] rounded-full border text-xs text-center material-icons-round w-5 h-5 !leading-none"
                >
                  chevron_right
                </a>
              </div>
            </div>
            <div className="flex flex-col  self-stretch  relative gap-[19px]">
              <div className=" w-[480px] h-9 relative overflow-hidden">
                <p className="absolute left-0 top-0 text-[26px] font-medium  text-[#131a15]">
                  25루베 슬러지 오니 암롤박스
                </p>
              </div>
              <div className="flex  self-stretch  relative gap-2.5 pb-1.5  border-r-0 border-b border-l-0 border-[#a9abaa]">
                <p className=" text-base  text-[#616161]">규격</p>
              </div>
              <div className="flex flex-col  self-stretch  overflow-hidden bg-white border border-[#a9abaa]">
                <div className="flex  items-center self-stretch  overflow-hidden  border-r-0 border-b border-l-0 border-[#a9abaa]">
                  <div className="flex justify-center items-center flex-grow relative p-2.5 bg-white  border-r  border-[#a9abaa]">
                    <p className=" text-lg font-medium  text-[#131a15]">
                      규격(L*W*H)
                    </p>
                  </div>
                  <div className="flex justify-center items-center self-stretch flex-grow relative gap-2.5 p-2.5  border-r  border-[#a9abaa]">
                    <p className=" text-sm font-medium  text-[#a9abaa]">5800</p>
                  </div>
                  <div className="flex justify-center items-center self-stretch flex-grow relative gap-2.5 p-2.5  border-r  border-[#a9abaa]">
                    <p className=" text-sm font-medium  text-[#a9abaa]">5800</p>
                  </div>
                  <div className="flex justify-center items-center self-stretch flex-grow relative gap-2.5 p-2.5">
                    <p className=" text-sm font-medium  text-[#a9abaa]">5800</p>
                  </div>
                </div>
                <div className="flex  items-center self-stretch ">
                  <div className="flex justify-center items-center  w-[138.5px] relative p-2.5 bg-white  border-r  border-[#a9abaa]">
                    <p className=" text-lg font-medium  text-[#131a15]">
                      철판 두께
                    </p>
                  </div>
                  <div className="flex justify-center items-center flex-grow relative gap-2.5 p-2.5">
                    <p className=" text-sm font-medium  text-[#a9abaa]">5800</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col  self-stretch  gap-[60px]">
            <div className="flex flex-col  self-stretch  gap-5">
              <div className="flex flex-col   pt-px border-t  border-l-0 border-[#f4f4f4]">
                <div className="flex  items-center self-stretch  pr-5 py-3  border-r-0 border-b border-l-0 border-[#f2f2f2]">
                  <div className="flex  flex-grow gap-2">
                    <div className="flex  items-center  gap-2">
                      <div className="flex flex-col   relative overflow-hidden gap-2.5 p-0.5">
                        <i className="text-xl text-center text-[#5e635f] material-icons-round !leading-none">
                          local_shipping
                        </i>
                      </div>
                      <div className="flex  items-center  relative gap-20">
                        <p className=" text-sm  text-[#00bacc]">
                          제작 및 배송기간 문의필요
                        </p>
                        <a
                          href="#!"
                          className="material-icons-round !leading-none text-xs text-center text-[#a9abaa]"
                        >
                          help
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex   pt-3 pb-[11px]  border-r-0 border-b border-l-0 border-[#f2f2f2]">
                  <div className="flex  items-center  relative gap-2 pr-[301px]">
                    <div className="flex flex-col   relative overflow-hidden gap-2.5 p-0.5">
                      <i className="material-icons-round !leading-none text-xl text-center text-[#5e635f]">
                        language
                      </i>
                    </div>
                    <p className=" text-base  text-[#5e635f]">
                      본 상품은 국내제작만 가능합니다.
                    </p>
                  </div>
                </div>
                <div className="flex  self-stretch  pt-3 pb-[11px]  border-r-0 border-b border-l-0 border-[#f2f2f2]">
                  <div className="flex   gap-6">
                    <div className="flex  items-center  relative gap-2">
                      <div className="flex flex-col   relative overflow-hidden gap-2.5 p-0.5">
                        <i className="material-icons-round !leading-none text-xl text-center text-[#5e635f]">
                          manage_search
                        </i>
                      </div>
                      <p className=" text-base  text-[#5e635f]">제작장소</p>
                    </div>
                    <div className="flex  items-center  relative gap-2.5">
                      <div className=" w-px h-3.5 bg-[#a9abaa]" />
                      <p className=" text-base  text-[#5e635f]">
                        경기도 평택시 서탄면 서탄2로 226
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex  self-stretch  h-[84px] overflow-hidden">
                <div className="flex  flex-grow h-[84px]">
                  <div className="flex justify-center items-center self-stretch  relative overflow-hidden gap-4 px-4 bg-[#f4f4f4]">
                    <img src="/img/introduce2/detail/truck.png" />
                    <p className=" text-base  text-[#131a15]">
                      <span className=" text-base  text-[#131a15]">
                        큰 가격이 부담 스러우신가요?
                      </span>
                      <br />
                      <span className=" text-base font-bold  text-[#131a15]">
                        횟수ㆍ기간 제한없이 대여 가능!
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-end items-center self-stretch flex-grow relative overflow-hidden px-4 bg-[#f4f4f4]">
                    <a
                      href=""
                      className=" w-[78px] h-[38px] rounded-md bg-white border border-[#c7d9d2] text-[15px] text-center py-2"
                    >
                      렌탈문의
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col  self-stretch  gap-[89px] pt-5">
              <div className="flex flex-col  self-stretch  relative gap-3">
                <p className=" text-base font-bold  text-[#1e2732]">기본설명</p>
                <div
                  className={`dropdown-toggle ${openDetailSelect1 ? "on" : ""}`}
                >
                  <a
                    className={`flex w-full overflow-hidden gap-2.5 px-[15px] py-3 bg-white dropdown-toggle flex items-center self-stretch relative px-[15px] rounded-[3px] border border-[#d6d7d8] ${
                      openDetailSelect1 ? "on" : ""
                    }`}
                    onClick={() => setOpenDetailSelect1(!openDetailSelect1)}
                  >
                    <div className=" w-[490px] h-[22px] relative overflow-hidden">
                      <p className="absolute left-0 top-0 text-base  text-[#233549]">
                        자세히보기
                      </p>
                    </div>
                    <i className="w-5 h-5 material-icons-round !leading-none text-xl text-center text-[#5e635f]">
                      expand_more
                    </i>
                  </a>
                  <ul
                    className="p-4 border-[#d6d7d8] border dropdown hidden w-full -mt-px"
                    style={{ display: openDetailSelect1 ? "block" : "none" }}
                  >
                    <li>
                      <a href="#!">크리샤 </a>
                    </li>
                  </ul>
                </div>
              </div>
              <a
                href="#!"
                className="flex justify-center items-center self-stretch  relative px-[43px] py-[13px] rounded-sm bg-primary shadow"
              >
                <p className=" text-2xl font-bold text-center text-white">
                  견적문의
                </p>
                <img
                  src="/img/introduce2/tag.png"
                  className="absolute left-[205.5px] top-[-22.5px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* 1 */}
      <section className="pb-[140px] mt-[100px] flex flex-col  items-center  max-w-[1300px] container">
        <div className="flex self-stretch ">
          <div className="flex flex-col  flex-grow pt-10 border-r  border-[#a9abaa]">
            <div className="flex flex-col justify-center items-center self-stretch  gap-8 px-8">
              <div className="flex justify-center items-center self-stretch  px-4 py-6 bg-[#fff5f5] border border-[#ffbfbf]">
                <div className="flex  items-center  relative gap-[31px]">
                  <img className="" src="/img/introduce2/icon1.png" />
                  <p className=" text-center">
                    사진의 이미지는
                    <span className="  text-[#ef2b2a]">
                      실제 측정된 사이즈 및 구성과{" "}
                    </span>
                    다를 수 있습니다.
                  </p>
                </div>
              </div>
              {/* 여기 세부 상품이미지 첨부 
      <img class="" src="20221218g2.png.png"/> */}
            </div>
          </div>
          <div className="flex flex-col p-4 col-3 product_bar top-[10vh] right-0 bg-white z-10 transition-all ">
            <div className="flex flex-col self-stretch relative gap-3 py-10">
              <p className=" text-base font-bold  text-[#1e2732]">기본설명</p>
              <div
                className={`dropdown-toggle ${openDetailSelect2 ? "on" : ""}`}
              >
                <a
                  className={`flex w-full overflow-hidden gap-2.5 px-[15px] py-3 bg-white dropdown-toggle flex items-center self-stretch relative px-[15px] rounded-[3px] border border-[#d6d7d8] ${
                    openDetailSelect2 ? "on" : ""
                  }`}
                  onClick={() => setOpenDetailSelect2(!openDetailSelect2)}
                >
                  <div className=" w-[490px] h-[22px] relative overflow-hidden">
                    <p className="absolute left-0 top-0 text-base  text-[#233549]">
                      자세히보기
                    </p>
                  </div>
                  <i className="w-5 h-5 material-icons-round !leading-none text-xl text-center text-[#5e635f]">
                    expand_more
                  </i>
                </a>
                <ul
                  className="p-4 border-[#d6d7d8] border dropdown hidden w-full -mt-px"
                  style={{ display: openDetailSelect2 ? "block" : "none" }}
                >
                  <li>
                    <a href="#!">크리샤 </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex  pt-[66px] border-t border-[#f4f4f4]">
              <a
                href="#!"
                className=" w-[270px] h-[62px] hover:shadow-default-button rounded-sm bg-primary text-2xl font-bold text-center text-white p-4"
              >
                견적문의
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* 2 */}
      <Footer />
    </>
  );
}
