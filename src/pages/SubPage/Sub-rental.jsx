import React from "react";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import TopButton from "../../component/TopButton";

export default function SubRental() {
  return (
    <>
      <div
        className="overflow-x-hidden"
        style={{ background: "url(/img/rental/bg.jpg)0 0 /cover fixed" }}
      >
        <TopButton />
        <Header />
        {/* <img class="lg:hidden block py-4" src="/img/main/Container.png"> */}
        {/* 1 */}
        <section
          className="mt-20 py-20"
          style={{ background: "linear-gradient(0deg, white 60%,transparent)" }}
        >
          <div>
            <div className="container flex justify-center lg:flex-row lg:px-0 flex-col">
              <div
                className="lg:col-6 after:block after:clear-both after:content-['']"
                style={{}}
              >
                <img
                  alt=""
                  id="Ci"
                  src="/img/rental/1.jpg"
                  className="m-auto lg:mb-[50px] mb-[-50px] lg:ml-[120px] lg:px-0 px-[25px]"
                  style={{}}
                />
              </div>
              <div
                className="flex flex-col lg:gap-10  gap-[2.5vw] lg:py-10 lg:p-8 p-6 bg-white/80 shadow-default-button rounded-md lg:col-6 col-12 lg:mt-[50px]"
                style={{}}
              >
                <h3 className="pb-[4.2vw]">
                  <span className="w-fit" style={{}}>
                    C&amp;G테크 암롤박스 무료 렌탈 서비스
                  </span>
                </h3>
                <h4 className=" font-medium">
                  암롤박스 주문/제작 중 대기시간이 길어질 경우
                  <br />
                  무료 렌탈 서비스를 제공하고 있습니다.
                </h4>
                <ul className="text-lg flex flex-col gap-4">
                  <li>
                    📌 무료 렌탈은 신규 제작 암롤박스 금액 전부 입금 후 렌탈
                    가능합니다.
                  </li>
                  <li>
                    📌 제작 완료후 신제품 수거를 안할 경우 해당 날짜 부터 렌탈
                    제품 일별 금액 청구
                  </li>
                  <li>📌 여유 제품이 있을 경우에만 렌탈이 가능합니다.</li>
                  <li>📌 유료 렌탈은 제품 크기에 따라 금액이 상이합니다.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* 2 */}
        <section
          className="py-20"
          style={{ background: "linear-gradient(0deg, white 60%,transparent)" }}
        >
          <div>
            <div className="container flex justify-center lg:flex-row lg:px-0 flex-col">
              <div
                className="flex flex-col lg:gap-10  gap-[2.5vw] lg:py-10 lg:p-8 p-6 bg-white/80 shadow-default-button rounded-md lg:col-6 col-12 lg:mt-[50px]"
                style={{}}
              >
                <h3 className="pb-[4.2vw]">
                  <span className="w-fit" style={{}}>
                    C&amp;G테크 암롤박스 유료 렌탈 서비스
                  </span>
                </h3>
                <h4 className=" font-medium">
                  일별 렌탈료를 납부하여 중고제품에 대하여
                  <br />
                  유료 렌탈이 가능합니다.
                </h4>
                <ul className="text-lg flex flex-col gap-4">
                  <li>📌 유료 렌탈은 제품 크기에 따라 금액이 상이합니다 </li>
                  <li>📌 렌탈료는 일별로 납부됩니다.</li>
                  <li>📌 파손 및 분실 금액 별도 청구됩니다.</li>
                </ul>
              </div>
              <div
                className="lg:col-6 after:block after:clear-both after:content-['']"
                style={{}}
              >
                <img
                  alt=""
                  id="Ci"
                  src="/img/rental/1.jpg"
                  className="lg:mb-[50px] lg:mt-0 mt-[-50px] lg:ml-[-120px] lg:px-0 px-[25px]"
                  style={{}}
                />
              </div>
            </div>
          </div>
        </section>
        {/* 3 */}
        <section className="py-20">
          <main className="container relative flex flex-col justify-center gap-20 overflow-hidden">
            <h2 className="">주의사항</h2>
            <ol className="flex self-stretch flex-grow gap-20 flex-wrap font-medium">
              <li className="flex self-stretch gap-4 flex-col h4 flex-grow">
                <img alt="" src="/img/rental/notice.png" className="w-fit" />
                01.<i>암롤박스 전용 렌탈</i>
              </li>
              <li className="flex self-stretch gap-4 flex-col h4 flex-grow">
                <img alt="" src="/img/rental/notice.png" className="w-fit" />
                02.<i>기간 외 사용시 렌탈료 일별 금액 청구</i>
              </li>
              <li className="flex self-stretch gap-4 flex-col h4 flex-grow">
                <img alt="" src="/img/rental/notice.png" className="w-fit" />
                03.<i>직접 공장에 와서 수거 및 반납</i>
              </li>
              <li className="flex self-stretch gap-4 flex-col h4 flex-grow">
                <img alt="" src="/img/rental/notice.png" className="w-fit" />
                04.<i>운송업 이용시 운송비 별도</i>
              </li>
              <li className="flex self-stretch gap-4 flex-col h4 flex-grow">
                <img alt="" src="/img/rental/notice.png" className="w-fit" />
                05.<i>파손 및 분실 금액 별도 청구</i>
              </li>
            </ol>
          </main>
        </section>
        {/* 4 */}
        <Footer />
      </div>
    </>
  );
}
