import React from "react";
import TopButton from "../../component/TopButton";
import Header from "../../component/Header";
import Footer from "../../component/Footer";

export default function SubPage3() {
  return (
    <>
      <TopButton />
      <Header />
      <section className="bg-surfaceMid pt-20">
        <div className="container  flex lg:gap-20 justify-center py-5 lg:flex-row flex-col">
          <img alt="" src="../../img/introduce3/ask.png" />
          <div className="py-10">
            <h3>
              무엇을
              <br />
              도와드릴까요?
            </h3>
            <div className="flex lg:gap-12 gap-4  mt-9">
              <a href="/Sub2_2" className="button_bg">
                견적 요청하기
                <span className="material-icons-round">chevron_right</span>
              </a>
              <a href="/Sub2" className="button_stroke">
                제품 둘러보기
                <span className="material-icons-round">chevron_right</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col lg:gap-14 justify-center container my-20">
        <div className="mb-9 w-full flex lg:block items-center gap-4 flex-col">
          <h3
            className="w-fit inline-block "
            style={{
              background:
                "url(../../img/after_stroke.svg)no-repeat 0 100%/contain",
            }}
          >
            자주묻는질문
          </h3>
          <span className="float-right flex rounded-md overflow-hidden border">
            <input
              className="outline-none p-3 w-[250px]"
              type="text"
              placeholder="검색어를 입력해 주세요."
            />
            <button className="material-icons-round bg-primary2 text-white p-3 focus:ring-0">
              search
            </button>
          </span>
        </div>
        <div
          id="accordionExample"
          className="font-['pretendard'] flex flex-col gap-8"
        >
          <div className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
            <h6 className="mb-0 font-['pretendard']" id="headingOne">
              <button
                className="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white py-4 px-5 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235) text-left"
                type="button"
                data-te-collapse-init=""
                data-te-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                암롤박스 사이즈는 어떻게 되나요?
                <span className="material-icons-round ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                  expand_more
                </span>
              </button>
            </h6>
            <div
              id="collapseOne"
              className="!visible"
              data-te-collapse-item=""
              data-te-collapse-show=""
              aria-labelledby="headingOne"
              data-te-parent="#accordionExample"
            >
              <div className="py-4 px-5">
                <strong>암롤박스 규격은 크게 2가지로 나눌 수 있습니다.</strong> <br />첫번째로는 적재함 내부 크기인 내경(Inside)규격이고, <br />두번째로는 적재함 외부크기인 외경(Outside)규격입니다. <br />보통 내경 사이즈로 견적을 알려 드립니다.
                <br />루베라는 단위는 부피단위로써 가로x세로x높이 각각 1길이 x 1폭 x 1높이 = 1m3 입니다.
              </div>
            </div>
          </div>
          {/* 아코디언 1 */}
          <div className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
            <h6 className="mb-0 font-['pretendard']" id="headingOne">
              <button
                className="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white py-4 px-5 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235) text-left"
                type="button"
                data-te-collapse-init=""
                data-te-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                암롤박스 배송비는 얼마인가요?
                <span className="material-icons-round ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                  expand_more
                </span>
              </button>
            </h6>
            <div
              id="collapseOne"
              className="!visible"
              data-te-collapse-item=""
              data-te-collapse-show=""
              aria-labelledby="headingOne"
              data-te-parent="#accordionExample"
            >
              <div className="py-4 px-5">
                <strong>배송비는 별도이며</strong> 지역별로 상이하므로 문의주시면 안내드리겠습니다.
              </div>
            </div>
          </div>
          {/* 아코디언 2 */}
          <div className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
            <h6 className="mb-0 font-['pretendard']" id="headingOne">
              <button
                className="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white py-4 px-5 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235) text-left"
                type="button"
                data-te-collapse-init=""
                data-te-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                암롤박스를 구매하려면 어떻게 해야 하나요?
                <span className="material-icons-round ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                  expand_more
                </span>
              </button>
            </h6>
            <div
              id="collapseOne"
              className="!visible"
              data-te-collapse-item=""
              data-te-collapse-show=""
              aria-labelledby="headingOne"
              data-te-parent="#accordionExample"
            >
              <div className="py-4 px-5">
                <strong>저희 암롤박스는 현재 공식 홈페이지</strong>에서 제품을 확인 후 전화 또는 문의하기 카테고리에서 견적 요청 후 구매 가능합니다. <br />원하시는 사양이 따로 있거나 특수 제작 경우도 위와 동일한 방법으로 진행되니 편하게 문의 해주세요
              </div>
            </div>
          </div>
          {/* 아코디언 3 */}
        </div>
      </section>
      {/* 1 */}
      <Footer />
    </>
  );
}
