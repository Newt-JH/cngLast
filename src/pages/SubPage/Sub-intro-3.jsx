import React, { useEffect, useState } from "react";
import TopButton from "../../component/TopButton";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import axios from "axios";

export default function SubPage3() {
  const [faq, setFaq] = useState([{
    question: '암롤박스의 용도는 무엇인가요?',
    answer: '주로 건설 폐기물, 산업 폐기물 등을 수거하고 운반하는 데 사용됩니다. 대형 쓰레기나 재활용 자원을 효율적으로 처리할 수 있습니다.'
  }, {
    question: '암롤박스의 제작 기간은 얼마나 걸리나요?',
    answer: '제작 기간은 주문한 암롤박스의 크기와 수량, 그리고 특별 요구사항에 따라 달라질 수 있습니다. 일반적으로 1주 정도 소요됩니다.'
  }, {
    question: '암롤박스 제작 비용은 어떻게 산정되나요?',
    answer: '제작 비용은 암롤박스의 크기, 재료, 특별 요구사항, 제작 수량 등에 따라 산정됩니다. 구체적인 견적은 상담 후 받을 수 있습니다.'
  }, {
    question: '암롤박스의 크기는 어떤 것들이 있나요?',
    answer: '암롤박스는 다양한 크기로 제작될 수 있습니다. 필요에 따라 맞춤 제작도 가능합니다.'
  }, {
    question: '제작된 암롤박스는 어떻게 배송되나요?',
    answer: '제작된 암롤박스는 고객님이 지정한 장소로 배송됩니다.(직접 수령 가능) 배송 비용은 계약 조건에 따라 포함될 수도 있고 별도로 청구될 수도 있습니다.'
  }]);
  
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://worldwide-gabriellia-cngtech.koyeb.app/faq`);
        console.log(response);
        setFaq(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
  useEffect(() => {
    fetchData();
  }, []);

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
            자주 묻는 질문
          </h3>
          {/* <span className="float-right flex rounded-md overflow-hidden border">
            <input
              className="outline-none p-3 w-[250px]"
              type="text"
              placeholder="검색어를 입력해 주세요."
            />
            <button className="material-icons-round bg-primary2 text-white p-3 focus:ring-0">
              search
            </button>
          </span> */}
        </div>
        <div
          id="accordionExample"
          className="font-['pretendard'] flex flex-col gap-8"
        >
          
          {faq.map((item, index) => (
            <div className="" style={{border: '1px', backgroundColor:'darkGray', borderRadius: '30px'}}>
            <h6 className="mb-0 font-['pretendard']" id="headingOne">
              <button
                className="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white py-4 px-5 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235) text-left"
                type="button"
                data-te-collapse-init=""
                data-te-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                  {item.question}
                  {/* 밑에 화살표 */}
                {/* <span className="material-icons-round ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                  expand_more
                </span> */}
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
              <div className="py-4 px-5" style={{ width: '60%'}}>
                <strong> {item.answer} </strong>
              </div>
            </div>
          </div>
          ))}
          
          {/* 아코디언 3 */}
        </div>
      </section>
      {/* 1 */}
      <Footer />
    </>
  );
}
