import React, { useState } from "react";
import TopButton from "../../component/TopButton";
import Header from "../../component/Header";
import Footer from "../../component/Footer";

export default function SubPage22() {
  const [selectTab, setSelectTab] = useState("tab1");
  const [selectTab2, setSelectTab2] = useState("tab1");

  const handleSelectTab = (tab) => {
    setSelectTab(tab);
  };

  const handleSelectTab2 = (tab) => {
    setSelectTab2(tab);
  };
  return (
    <>
      <TopButton />
      <Header />
      <div className="flex flex-col gap-9 justify-center container mt-[60px] pt-[100px]">
        <div>
          <h3
            className="text-primary w-fit inline-block"
            style={{
              background: "url(/img/after_stroke.svg)no-repeat 0 100%/contain",
            }}
          >
            Step 01
          </h3>
          <p className="text-xl text-paragraph pt-4">
            문의 항목을 선택해 주세요.
          </p>
        </div>
        <ul className="flex gap-8 h6 flex-col lg:flex-row" id="tabs-nav">
          <li
            className={`self-stretch flex-grow h-[75px] shadow-md rounded-md overflow-hidden ${
              selectTab === "tab1" ? "active" : ""
            }`}
          >
            <a
              className="flex h-full w-full items-center px-6 py-4 justify-between"
              onClick={() => handleSelectTab("tab1")}
            >
              제품구매
            </a>
          </li>
          <li
            className={`self-stretch flex-grow h-[75px] shadow-md rounded-md overflow-hidden ${
              selectTab === "tab2" ? "active" : ""
            }`}
          >
            <a
              className="flex h-full w-full items-center px-6 py-4 justify-between"
              onClick={() => handleSelectTab("tab2")}
            >
              중고판매
            </a>
          </li>
          <li
            className={`self-stretch flex-grow h-[75px] shadow-md rounded-md overflow-hidden ${
              selectTab === "tab3" ? "active" : ""
            }`}
          >
            <a
              className="flex h-full w-full items-center px-6 py-4 justify-between"
              onClick={() => handleSelectTab("tab3")}
            >
              제품수리
            </a>
          </li>
          <li
            className={`self-stretch flex-grow h-[75px] shadow-md rounded-md overflow-hidden ${
              selectTab === "tab4" ? "active" : ""
            }`}
          >
            <a
              className="flex h-full w-full items-center px-6 py-4 justify-between"
              onClick={() => handleSelectTab("tab4")}
            >
              렌탈/대여
            </a>
          </li>
        </ul>
      </div>
      {/* 1 */}
      <div className="flex flex-col gap-9 justify-center container mt-[60px]">
        <div>
          <h3
            className="text-primary w-fit inline-block"
            style={{
              background: "url(/img/after_stroke.svg)no-repeat 0 100%/contain",
            }}
          >
            Step 02
          </h3>
          <p className="text-xl text-paragraph pt-4">
            문의 항목을 선택해 주세요.
          </p>
        </div>
        <ol className="flex gap-9 flex-col lg:flex-row">
          <li className="flex flex-col  overflow-hidden bg-white lg:w-[calc(33.33%-18px)]">
            <img src="/img/introduce2/product.png" />
            <h5 className="pt-[30px] font-medium w-full">암롤박스</h5>
          </li>
          <li className="flex flex-col  overflow-hidden bg-white lg:w-[calc(33.33%-18px)]">
            <img src="/img/introduce2/product.png" />
            <h5 className="pt-[30px] font-medium w-full">암롤박스</h5>
          </li>
          <li className="flex flex-col  overflow-hidden bg-white lg:w-[calc(33.33%-18px)]">
            <img src="/img/introduce2/product.png" />
            <h5 className="pt-[30px] font-medium w-full">암롤박스</h5>
          </li>
        </ol>
      </div>
      {/* 2 */}
      <div className="flex flex-col gap-9 justify-center container mt-[60px]">
        <div>
          <h3
            className="text-primary w-fit inline-block"
            style={{
              background: "url(/img/after_stroke.svg)no-repeat 0 100%/contain",
            }}
          >
            Step 03
          </h3>
          <p className="text-xl text-paragraph pt-4">
            문의 항목을 선택해 주세요.
          </p>
        </div>
        <ul id="tabs-nav" className="flex gap-8 h6 flex-col lg:flex-row">
          <li
            className={`self-stretch flex-grow h-[75px] shadow-md rounded-md overflow-hidden ${
              selectTab2 === "tab1" ? "active" : ""
            }`}
          >
            <a
              className="flex h-full w-full items-center px-6 py-4 justify-between"
              onClick={() => handleSelectTab2("tab1")}
            >
              견적문의
            </a>
          </li>
          <li
            className={`self-stretch flex-grow h-[75px] shadow-md rounded-md overflow-hidden ${
              selectTab2 === "tab2" ? "active" : ""
            }`}
          >
            <a
              className="flex h-full w-full items-center px-6 py-4 justify-between"
              onClick={() => handleSelectTab2("tab2")}
            >
              현장방문
            </a>
          </li>
        </ul>
      </div>
      {/* 3 */}
      <div className="flex flex-col gap-9 justify-center container my-[60px]">
        <div>
          <h3
            className="text-primary w-fit inline-block"
            style={{
              background: "url(/img/after_stroke.svg)no-repeat 0 100%/contain",
            }}
          >
            Step 04
          </h3>
          <p className="text-xl text-paragraph pt-4">
            문의 내용 및 연락처 정보를 입력해주세요.
          </p>
        </div>
        <ul className="h6 flex flex-col gap-4">
          <li className="self-stretch flex-grow  shadow-md rounded-md overflow-hidden">
            <textarea
              className="h-full w-full p-4 outline-none"
              id="InquiryContent"
              name="InquiryContent"
              placeholder="500자 이내로 상세내용을 입력해 주세요."
              style={{ height: 300 }}
              defaultValue={""}
            />
          </li>
          <li className="self-stretch flex-grow h-[75px] shadow-md rounded-md overflow-hidden">
            <input
              type="text"
              id="InquiryCompany"
              name="InquiryCompany"
              placeholder="이름 및 기업이름을 입력하세요."
              className="h-full w-full p-4 outline-none"
            />
          </li>
          <li className="self-stretch flex-grow h-[75px] shadow-md rounded-md overflow-hidden">
            <input
              type="text"
              id="InquiryCompany"
              name="InquiryCompany"
              placeholder="전화번호(’-’ 제외)을 입력하세요."
              className="h-full w-full p-4 outline-none"
            />
          </li>
          <li className="self-stretch flex-grow h-[75px] shadow-md rounded-md overflow-hidden">
            <input
              type="text"
              id="InquiryCompany"
              name="InquiryCompany"
              placeholder="이메일 주소을 입력하세요."
              className="h-full w-full p-4 outline-none"
            />
          </li>
          <li className="self-stretch flex-grow  py-5 ">
            <label htmlFor="lname" className="h5 pb-2">
              *개인정보처리방침
            </label>
            <div className=" p-6 shadow-md rounded-md overflow-y-scroll overflow-x-hidden h-[300px] w-full text-sm mb-5">
              제1조(목적)
              <br />
              <br />
              C&amp;G tech(이하 ‘회사'라고 함)는 회사가 제공하고자 하는
              서비스(이하 ‘회사 서비스’)를 이용하는 개인(이하 ‘이용자’ 또는
              ‘개인’)의 정보(이하 ‘개인정보’)를 보호하기 위해, 개인정보보호법,
              정보통신망 이용촉진 및 정보보호 등에 관한 법률(이하
              '정보통신망법') 등 관련 법령을 준수하고, 서비스 이용자의 개인정보
              보호 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여
              다음과 같이 개인정보처리방침(이하 ‘본 방침’)을 수립합니다.
              <br />
              <br />
              제2조(개인정보 처리의 원칙)
              <br />
              <br />
              개인정보 관련 법령 및 본 방침에 따라 회사는 이용자의 개인정보를
              수집할 수 있으며 수집된 개인정보는 개인의 동의가 있는 경우에 한해
              제3자에게 제공될 수 있습니다. 단, 법령의 규정 등에 의해 적법하게
              강제되는 경우 회사는 수집한 이용자의 개인정보를 사전에 개인의 동의
              없이 제3자에게 제공할 수도 있습니다.
              <br />
              <br />
              제3조(본 방침의 공개)
              <br />
              <br />
              ① 회사는 이용자가 언제든지 쉽게 본 방침을 확인할 수 있도록 회사
              홈페이지 첫 화면 또는 첫 화면과의 연결화면을 통해 본 방침을
              공개하고 있습니다. ② 회사는 제1항에 따라 본 방침을 공개하는 경우
              글자 크기, 색상 등을 활용하여 이용자가 본 방침을 쉽게 확인할 수
              있도록 합니다.
              <br />
              <br />
              제4조(본 방침의 변경)
              <br />
              <br />
              ① 본 방침은 개인정보 관련 법령, 지침, 고시 또는 정부나 회사
              서비스의 정책이나 내용의 변경에 따라 개정될 수 있습니다. ② 회사는
              제1항에 따라 본 방침을 개정하는 경우 다음 각 호 하나 이상의
              방법으로 공지합니다. 1. 회사가 운영하는 인터넷 홈페이지의 첫
              화면의 공지사항란 또는 별도의 창을 통하여 공지하는 방법 2.
              서면·모사전송·전자우편 또는 이와 비슷한 방법으로 이용자에게
              공지하는 방법 ③ 회사는 제2항의 공지는 본 방침 개정의 시행일로부터
              최소 7일 이전에 공지합니다. 다만, 이용자 권리의 중요한 변경이 있을
              경우에는 최소 30일 전에 공지합니다.
              <br />
              <br />
              제5조(회사 서비스 제공을 위한 정보)
              <br />
              <br />
              회사는 이용자에게 회사의 서비스를 제공하기 위하여 다음과 같은
              정보를 수집합니다. 1. 필수 수집 정보:&nbsp;이메일 주소, 이름 및
              연락처
              <br />
              <br />
              제6조(개인정보 수집 방법)
              <br />
              <br />
              회사는 다음과 같은 방법으로 이용자의 개인정보를 수집합니다. 1.
              이용자가 회사의 홈페이지에 자신의 개인정보를 입력하는 방식 2.
              이용자가 고객센터의 상담, 게시판에서의 활동 등 회사의 서비스를
              이용하는 과정에서 이용자가 입력하는 방식
              <br />
              <br />
              제7조(개인정보의 이용)
              <br />
              <br />
              회사는 개인정보를 다음 각 호의 경우에 이용합니다. 1. 회사의
              서비스를 제공하기 위한 경우 2. 이벤트 및 행사 안내 등 마케팅을
              위한 경우 3. 개인정보 및 관심에 기반한 이용자간 관계의 형성을 위한
              경우 4. 법령 및 회사 약관을 위반하는 회원에 대한 이용 제한 조치,
              부정 이용 행위를 포함하여 서비스의 원활한 운영에 지장을 주는
              행위에 대한 방지 및 제재를 위한 경우
              <br />
              <br />
              제8조(개인정보의 보유 및 이용기간)
              <br />
              <br />
              ① 회사는 이용자의 개인정보에 대해 개인정보의 수집·이용 목적이
              달성을 위한 기간 동안 개인정보를 보유 및 이용합니다. ② 전항에도
              불구하고 회사는 내부 방침에 의해 서비스 부정이용기록은 부정 가입
              및 이용 방지를 위하여 회원 탈퇴 시점으로부터 최대 1년간
              보관합니다.
              <br />
              <br />
              제9조(법령에 따른 개인정보의 보유 및 이용기간)
              <br />
              <br />
              회사는 관계법령에 따라 다음과 같이 개인정보를 보유 및 이용합니다.
              1. 전자상거래 등에서의 소비자보호에 관한 법률에 따른 보유정보 및
              보유기간 - 계약 또는 청약철회 등에 관한 기록 : 5년 - 대금결제 및
              재화 등의 공급에 관한 기록 : 5년 - 소비자의 불만 또는 분쟁처리에
              관한 기록 : 3년 - 표시•광고에 관한 기록 : 6개월 2.
              통신비밀보호법에 따른 보유정보 및 보유기간 - 웹사이트 로그 기록
              자료 : 3개월 3. 전자금융거래법에 따른 보유정보 및 보유기간 -
              전자금융거래에 관한 기록 : 5년 4. 위치정보의 보호 및 이용 등에
              관한 법률 - 개인위치정보에 관한 기록 : 6개월
              <br />
              <br />
              제10조(개인정보의 파기원칙)
              <br />
              <br />
              회사는 원칙적으로 이용자의 개인정보 처리 목적의 달성,
              보유·이용기간의 경과 등 개인정보가 필요하지 않을 경우에는 해당
              정보를 지체 없이 파기합니다.
              <br />
              <br />
              제11조(서비스 미이용자에 대한 개인정보처리)
              <br />
              <br />
              ① 회사는 1년 동안 회사의 서비스를 이용하지 않은 이용자의
              개인정보는 원칙적으로 이용자에게 사전통지하고 개인정보를
              파기하거나 별도로 분리하여 저장합니다.&nbsp; ② 회사는 장기 미이용
              이용자의 개인정보는 별도로 분리되어 안전하게 보관하게 되며, 해당
              이용자의 통지는 분리 보관 처리 일을 기준으로 최소 30일 이전에
              전자우편주소로 전송됩니다. ③ 장기 미이용 이용자는 회사가 미이용자
              DB를 별도로 분리하기 전에 계속 서비스를 이용하고자 하는 경우
              웹사이트(이하 '모바일앱' 포함)에 로그인하시면 됩니다. ④ 장기
              미이용 이용자는 웹사이트에 로그인할 경우 이용자의 동의에 따라
              본인의 계정을 복원할 수 있습니다. ⑤ 회사는 분리 보관된 개인정보를
              4년간 보관 후 지체없이 파기합니다.
              <br />
              <br />
              제12조(개인정보파기절차)
              <br />
              <br />
              ① 이용자가 회원가입 등을 위해 입력한 정보는 개인정보 처리 목적이
              달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침
              및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간
              참조) 일정 기간 저장된 후 파기 되어집니다. ② 회사는 파기 사유가
              발생한 개인정보를 개인정보보호 책임자의 승인절차를 거쳐
              파기합니다.
              <br />
              <br />
              제13조(개인정보파기방법)
              <br />
              <br />
              회사는 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는
              기술적 방법을 사용하여 삭제하며, 종이로 출력된 개인정보는 분쇄기로
              분쇄하거나 소각 등을 통하여 파기합니다.
              <br />
              <br />
              제14조(광고성 정보의 전송 조치)
              <br />
              <br />
              ① 회사는 전자적 전송매체를 이용하여 영리목적의 광고성 정보를
              전송하는 경우 이용자의 명시적인 사전동의를 받습니다. 다만, 다음
              각호 어느 하나에 해당하는 경우에는 사전 동의를 받지 않습니다 1.
              회사가 재화 등의 거래관계를 통하여 수신자로부터 직접 연락처를
              수집한 경우, 거래가 종료된 날로부터 6개월 이내에 회사가 처리하고
              수신자와 거래한 것과 동종의 재화 등에 대한 영리목적의 광고성
              정보를 전송하려는 경우 2. 「방문판매 등에 관한 법률」에 따른
              전화권유판매자가 육성으로 수신자에게 개인정보의 수집출처를
              고지하고 전화권유를 하는 경우 ② 회사는 전항에도 불구하고 수신자가
              수신거부의사를 표시하거나 사전 동의를 철회한 경우에는 영리목적의
              광고성 정보를 전송하지 않으며 수신거부 및 수신동의 철회에 대한
              처리 결과를 알립니다. ③ 회사는 오후 9시부터 그다음 날 오전
              8시까지의 시간에 전자적 전송매체를 이용하여 영리목적의 광고성
              정보를 전송하는 경우에는 제1항에도 불구하고 그 수신자로부터 별도의
              사전 동의를 받습니다. ④ 회사는 전자적 전송매체를 이용하여
              영리목적의 광고성 정보를 전송하는 경우 다음의 사항 등을 광고성
              정보에 구체적으로 밝힙니다. 1. 회사명 및 연락처 2. 수신 거부 또는
              수신 동의의 철회 의사표시에 관한 사항의 표시 ⑤ 회사는 전자적
              전송매체를 이용하여 영리목적의 광고성 정보를 전송하는 경우 다음 각
              호의 어느 하나에 해당하는 조치를 하지 않습니다. 1. 광고성 정보
              수신자의 수신거부 또는 수신동의의 철회를 회피·방해하는 조치 2.
              숫자·부호 또는 문자를 조합하여 전화번호·전자우편주소 등 수신자의
              연락처를 자동으로 만들어 내는 조치 3. 영리목적의 광고성 정보를
              전송할 목적으로 전화번호 또는 전자우편주소를 자동으로 등록하는
              조치 4. 광고성 정보 전송자의 신원이나 광고 전송 출처를 감추기 위한
              각종 조치 5. 영리목적의 광고성 정보를 전송할 목적으로 수신자를
              기망하여 회신을 유도하는 각종 조치
              <br />
              <br />
              제15조(아동의 개인정보보호)
              <br />
              <br />
              ① 회사는 만 14세 미만 아동의 개인정보 보호를 위하여 만 14세 이상의
              이용자에 한하여 회원가입을 허용합니다. ② 제1항에도 불구하고 회사는
              이용자가 만 14세 미만의 아동일 경우에는, 그 아동의
              법정대리인으로부터 그 아동의 개인정보 수집, 이용, 제공 등의 동의를
              그 아동의 법정대리인으로부터 받습니다. ③ 제2항의 경우 회사는 그
              법정대리인의 이름, 생년월일, 성별, 중복가입확인정보(ID), 휴대폰
              번호 등을 추가로 수집합니다.
              <br />
              <br />
              제16조(이용자의 의무)
              <br />
              <br />
              ① 이용자는 자신의 개인정보를 최신의 상태로 유지해야 하며, 이용자의
              부정확한 정보 입력으로 발생하는 문제의 책임은 이용자 자신에게
              있습니다. ② 타인의 개인정보를 도용한 회원가입의 경우 이용자 자격을
              상실하거나 관련 개인정보보호 법령에 의해 처벌받을 수 있습니다. ③
              이용자는 전자우편주소, 비밀번호 등에 대한 보안을 유지할 책임이
              있으며 제3자에게 이를 양도하거나 대여할 수 없습니다.
              <br />
              <br />
              제17조(회사의 개인정보 관리)
              <br />
              <br />
              회사는 이용자의 개인정보를 처리함에 있어 개인정보가 분실, 도난,
              유출, 변조, 훼손 등이 되지 아니하도록 안전성을 확보하기 위하여
              다음과 같이 기술적·관리적 보호대책을 강구하고 있습니다.
              <br />
              <br />
              제18조(삭제된 정보의 처리)
              <br />
              <br />
              회사는 이용자 혹은 법정 대리인의 요청에 의해 해지 또는 삭제된
              개인정보는 회사가 수집하는 "개인정보의 보유 및 이용기간"에 명시된
              바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록
              처리하고 있습니다.
              <br />
              <br />
              제19조(비밀번호의 암호화)
              <br />
              <br />
              이용자의 비밀번호는 일방향 암호화하여 저장 및 관리되고 있으며,
              개인정보의 확인, 변경은 비밀번호를 알고 있는 본인에 의해서만
              가능합니다.
              <br />
              <br />
              제20조(해킹 등에 대비한 대책)
              <br />
              <br />
              ① 회사는 해킹, 컴퓨터 바이러스 등 정보통신망 침입에 의해 이용자의
              개인정보가 유출되거나 훼손되는 것을 막기 위해 최선을 다하고
              있습니다. ② 회사는 최신 백신프로그램을 이용하여 이용자들의
              개인정보나 자료가 유출 또는 손상되지 않도록 방지하고 있습니다. ③
              회사는 만일의 사태에 대비하여 침입차단 시스템을 이용하여 보안에
              최선을 다하고 있습니다. ④ 회사는 민감한 개인정보(를 수집 및
              보유하고 있는 경우)를 암호화 통신 등을 통하여 네트워크상에서
              개인정보를 안전하게 전송할 수 있도록 하고 있습니다.
              <br />
              <br />
              제21조(개인정보 처리 최소화 및 교육)
              <br />
              <br />
              회사는 개인정보 관련 처리 담당자를 최소한으로 제한하며, 개인정보
              처리자에 대한 교육 등 관리적 조치를 통해 법령 및 내부방침 등의
              준수를 강조하고 있습니다.
              <br />
              <br />
              제22조(개인정보 유출 등에 대한 조치)
              <br />
              <br />
              회사는 개인정보의 분실·도난·유출(이하 "유출 등"이라 한다) 사실을
              안 때에는 지체 없이 다음 각 호의 모든 사항을 해당 이용자에게
              알리고 방송통신위원회 또는 한국인터넷진흥원에 신고합니다. 1. 유출
              등이 된 개인정보 항목 2. 유출 등이 발생한 시점 3. 이용자가 취할 수
              있는 조치 4. 정보통신서비스 제공자 등의 대응 조치 5. 이용자가 상담
              등을 접수할 수 있는 부서 및 연락처
              <br />
              <br />
              제23조(개인정보 유출 등에 대한 조치의 예외)
              <br />
              <br />
              회사는 전조에도 불구하고 이용자의 연락처를 알 수 없는 등 정당한
              사유가 있는 경우에는 회사의 홈페이지에 30일 이상 게시하는 방법으로
              전조의 통지를 갈음하는 조치를 취할 수 있습니다.
              <br />
              <br />
              제24조(이용자의 쿠키 설치 선택권)
              <br />
              <br />
              ① 이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서
              이용자는 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를
              허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든
              쿠키의 저장을 거부할 수도 있습니다. ② 다만, 쿠키의 저장을 거부할
              경우에는 로그인이 필요한 회사의 일부 서비스는 이용에 어려움이 있을
              수 있습니다.
              <br />
              <br />
              제25조(쿠키 설치 허용 지정 방법)
              <br />
              <br />
              쿠키 설치 허용 여부를 지정하는 방법(Internet Explorer의 경우)은
              다음과 같습니다. 가. [도구] 메뉴에서 [인터넷 옵션]을 선택합니다.
              나. [개인정보 탭]을 클릭합니다. 다. [고급] 설정에서 설정하시면
              됩니다.
              <br />
              <br />
              제26조(회사의 개인정보 보호 책임자 지정)
              <br />
              <br />
              ① 회사는 이용자의 개인정보를 보호하고 개인정보와 관련한 불만을
              처리하기 위하여 아래와 같이 관련 부서 및 개인정보 보호 책임자를
              지정하고 있습니다. 가. 개인정보 보호 책임자 - 성명: 박찬기 -
              전화번호: 010-4171-9820 - 이메일: cgtech8386@naver.com
              <br />
              <br />
              부칙 제1조 본 방침은 2023.03.01부터 시행됩니다.
            </div>
            <span className="id-save pt-4 block">
              <input
                type="checkbox"
                id="save"
                defaultChecked="checked"
                className="hidden"
              />
              <label
                htmlFor="save"
                className="text-sm cursor-pointer flex items-center"
              >
                <span className="mr-2 border rounded w-6 h-6 inline-block" />
                동의합니다.
              </label>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '\n            input#save[type="checkbox"]:checked + label span{ background: url(/img/introduce2/detail/check_box1.png)50%; }\n          ',
                }}
              />
            </span>
          </li>
        </ul>
        <a
          href=""
          className=" button_bg lg:flex mx-auto mt-12 !bg-primary2 !w-[320px] !h-16"
        >
          문의하기
        </a>
      </div>
      {/* 4 */}
      <Footer />
    </>
  );
}
