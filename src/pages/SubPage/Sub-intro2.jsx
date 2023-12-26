import React, { useEffect, useState } from "react";
import TopButton from "../../component/TopButton";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import { Link } from 'react-router-dom';
import axios from "axios";

export default function SubPage() {
  const [openSelectBox, setOpenSelectBox] = useState(false);
  const [select, setSelect] = useState("tab1");
  const [category, setCategory] = useState(1);
  const [tabComment, setTabComment] = useState({
    title: "암롤박스",
    commentOne: "암롤트럭 후방에 적재하여",
    commentTwo: "각종 폐기물 운반에 이용됩니다",
    commentThree: "아래 검색창에 제품 키워드를 입력하면",
    commentFour: "해당 상품을 확인할 수 있습니다.",
    commentFive: "EX) ○○루베, 양문형, 덮개 등",
    img:"/img/introduce2/cg_bg_pc.png"
  });

  const [productList, setProductList] = useState([{
    productID: '1',
    name: '25루베 뭐시기 상품',
    hashtag: '건설폐기물 양문형',
    createDateTime: '2023.06.11',
    titleImage: '/img/introduce2/cg_bg_pc.png'
  },
  {
    productID: '2',
    title: '25루베 뭐시기 상품 2번',
    hashtag: '건설폐기물 양문형',
    createDateTime: '2023.06.16',
    imageLink: '/img/introduce2/cg_bg_pc.png'
    }]);
  
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://worldwide-gabriellia-cngtech.koyeb.app/category?category=${category}`);
        console.log(response);
        setProductList(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
  const moreItem = () => {
    alert('추가로 불러올 상품이 없습니다.');
  }
  
    useEffect(() => {
      fetchData();
    },[category])
  
  const handleSelect = (tab) => {
    setSelect(tab);
    
    switch (tab) {
      case 'tab1':
        setTabComment({
          title: "암롤박스",
          commentOne: "암롤트럭 후방에 적재하여",
          commentTwo: "각종 폐기물 운반에 이용됩니다.",
          commentThree: "아래 검색창에 제품 키워드를 입력하면",
          commentFour: "해당 상품을 확인할 수 있습니다.",
          commentFive: "EX) ○○루베, 양문형, 덮개 등",
          img:"/img/introduce2/cg_bg_pc.png"
        });
        setCategory(1);
        break;
      case 'tab2':
        setTabComment({
          title: "고철박스 / 스크랩박스 / 방통",
          commentOne: "차량 운반용이 아닌 집게차 등 장비를 사용하여",
          commentTwo: "내용물을 수집 할 수 있는 폐기물 박스 맞춤 제작",
          commentThree: "아래 검색창에 제품 키워드를 입력하면",
          commentFour: "해당 상품을 확인할 수 있습니다.",
          commentFive: "EX) ○○루베, 양문형, 덮개 등",
          img:"/img/main/scrabnox.png"
        });
        setCategory(2);
        break;
      case 'tab3':
        setTabComment({
          title: "중고박스",
          commentOne: "보다 저렴한 가격의 폐기물 처리 박스",
          commentTwo: "를 구매하실 수 있습니다.",
          commentThree: "아래 검색창에 제품 키워드를 입력하면",
          commentFour: "해당 상품을 확인할 수 있습니다.",
          commentFive: "EX) ○○루베, 양문형, 덮개 등",
          img:"/img/introduce2/cg_bg_pc.png"
        });
        setCategory(3);
        break;
      case 'tab4':
        setTabComment({
          title: "박스수리",
          commentOne: "고장/파손된 박스를 수리하여",
          commentTwo: "사용 가능합니다.",
          commentThree: "아래 검색창에 제품 키워드를 입력하면",
          commentFour: "해당 상품을 확인할 수 있습니다.",
          commentFive: "EX) ○○루베, 양문형, 덮개 등",
          img:"/img/introduce2/cg_bg_pc.png"
        });
        setCategory(4);
        break;
      default:
        // 기본 동작
        break;
    }
  };


  const TAB_NAME = {
    tab1: "암롤박스",
    tab2: "고철박스/스크랩박스/방통",
    tab3: "중고박스",
    tab4: "박스수리",
  };

  const getTab1 = () => (
    <li id="tab1" className="tab-content">
      <div className="flex flex-col lg:flex-row justify-center lg:items-center self-stretch gap-[60px] px-9 py-5 bg-[#fffaf5]">
        <div className="flex flex-col justify-center  gap-3.5">
          <h3 className="h3 font-bold">{ tabComment.title }</h3>
          <p className=" text-xl font-medium">
            {tabComment.commentOne} <br />
            {tabComment.commentTwo} <br /><br />
            {tabComment.commentThree} <br />
            {tabComment.commentFour} <br />
            {tabComment.commentFive} <br />
          </p>
        </div>
        <img alt="" src={ tabComment.img } className="" width='50%' />
      </div>
      <div className="container pt-9">
        {/* <div className="mb-9 w-full after:content-[''] after:block after:clear-both h-12">
          <span className="float-right flex rounded-md overflow-hidden border">
            <input
              className="outline-none p-3 w-[250px]"
              type="text"
              placeholder="찾으시는 상품을 입력해 주세요."
            />
            <button className="material-icons-round bg-primary2 text-white p-3">
              search
            </button>
          </span>
        </div> */}
        <ol className="grid grid-cols-2 gap-9">
  {productList.map((product, index) => (
    <li key={index} className="flex flex-col overflow-hidden bg-white self-stretch flex-grow">
      <Link to={`/Sub2_1?productID=${product.productID}`}>
        <div style={{ display: 'flex', width: '100%', height: '80vh', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <img alt="" src={product.titleImage} style={{ width: '100%' }} />
          </div>
          <div className="flex flex-col items-end self-stretch overflow-hidden gap-[18px] lg:px-[25px] lg:pt-[30px] pt-4 lg:pb-10 bg-[#fcfefe] border-t border-[#c7d9d2]">
            <h4 className="text-[32px] font-medium w-full">
              {product.name}
            </h4>
            <div className="flex justify-between items-end w-full">
              <i className="flex justify-center items-center gap-3 px-[25px] py-2 rounded-[100px] border border-primary2 font-bold text-primary2">
                # {product.hashTag}
              </i>
              <p className="text-sm font-medium text-paragraph">
                {product.createDateTime.slice(0, 10)}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  ))}
</ol>
      </div>
      <button
        href="/"
        className=" button_bg lg:flex mx-auto mt-12 !bg-primary2 !w-[320px] !h-16"
        onClick={moreItem}
      >
        더보기 <span className="material-icons-round">expand_more</span>
      </button>
    </li>
  );

  const getTab = () => {
    if (select === "tab1") {
      return getTab1();
    } else if (select === "tab2") {
      return getTab1();
    } else if (select === "tab3") {
      return getTab1();
    } else if (select === "tab4") {
      return getTab1();
    }
  };

  return (
    <>
      <TopButton />
      <Header />
      <div
        className={`flex flex-col gap-9 justify-center container mt-[60px] pt-20 relative dropdown_container ${
          openSelectBox ? "active" : ""
        }`}
        style={{}}
      >
        <h3
          className="text-primary w-fit inline-block"
          style={{
            background: "url(/img/after_stroke.svg)no-repeat 0 100%/contain",
          }}
        >
          Categorys
        </h3>
        <div>
          <a
            className="flex h-full w-full items-center px-6 py-4 justify-between dropdown-arrow lg:hidden border rounded-md mb-2"
            onClick={() => setOpenSelectBox(!openSelectBox)}
          >
            <i>{TAB_NAME[select]}</i>
            <span className="transition-all material-icons-round lg:hidden">
              expand_more
            </span>
          </a>
          {/* <input type="hidden" name="product"> */}
          <ul
            className="lg:!flex gap-8 h6 flex-col lg:flex-row hidden dropdown-menu shadow-md lg:shadow-none overflow-hidden"
            id="tabs-nav"
            style={{ display: openSelectBox ? "block" : "none" }}
          >
            <li
              className={`self-stretch flex-grow lg:h-[75px] h-14 shadow-md rounded-md overflow-hidden ${
                select === "tab1" ? "active" : ""
              }`}
            >
              <a
                className="flex h-full w-full items-center px-6 py-4 justify-between"
                onClick={() => handleSelect("tab1")}
              >
                <p id="암롤박스">암롤박스</p>
                <span className="material-icons-round rounded-md bg-white text-primary p-2 w-fit h-fit hidden lg:block">
                  north_east
                </span>
              </a>
            </li>
            <li
              id="고철/스크랩"
              className={`self-stretch flex-grow lg:h-[75px] h-14 shadow-md rounded-md overflow-hidden ${
                select === "tab2" ? "active" : ""
              }`}
            >
              <a
                className="flex h-full w-full items-center px-6 py-4 justify-between"
                onClick={() => handleSelect("tab2")}
              >
                <p>고철박스/스크랩박스/방통</p>
                <span className="material-icons-round rounded-md bg-white text-primary p-2 w-fit h-fit hidden lg:block">
                  north_east
                </span>
              </a>
            </li>
            <li
              id="중고박스"
              className={`self-stretch flex-grow lg:h-[75px] h-14 shadow-md rounded-md overflow-hidden ${
                select === "tab3" ? "active" : ""
              }`}
            >
              <a
                className="flex h-full w-full items-center px-6 py-4 justify-between"
                onClick={() => handleSelect("tab3")}
              >
                <p>중고박스</p>
                <span className="material-icons-round rounded-md bg-white text-primary p-2 w-fit h-fit hidden lg:block">
                  north_east
                </span>
              </a>
            </li>
            <li
              id="박스수리"
              className={`self-stretch flex-grow lg:h-[75px] h-14 shadow-md rounded-md overflow-hidden ${
                select === "tab4" ? "active" : ""
              }`}
            >
              <a
                className="flex h-full w-full items-center px-6 py-4 justify-between"
                onClick={() => handleSelect("tab4")}
              >
                <p>박스수리</p>
                <span className="material-icons-round rounded-md bg-white text-primary p-2 w-fit h-fit hidden lg:block">
                  north_east
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* 1 */}
      <section className="pb-[140px] pt-9">
        <ul id="tabs-content">{getTab()}</ul>
      </section>
      {/* 2 */}
      <Footer />
    </>
  );
}
