import "./App.css";
import MenuItem from "./components/MenuItem/MenuItem";
import StoreInfo from "./components/StoreInfo/StoreInfo";

function App() {
  return (
    <>
      <div className="storeDetail">
        <div className="img">
          <img src="/MSE.jpg" alt="소재로운 밤" />
        </div>
        <StoreInfo
          title="소재로운 밤"
          info="여러분의 입과 도파민을 책임지겠습니다."
        />
        <div className="menuList">
          <div className="menuCategory">
            <h3>메인 메뉴</h3>
            <MenuItem name="한우육회" price={"18,000"} />
            <MenuItem name="닭목살구이" price={"17,000"} />
            <MenuItem name="오리훈제" price={"17,000"} />
            <MenuItem name="모듬소시지" price={"12,000"} />
          </div>
          <div className="menuCategory">
            <h3>사이드 메뉴</h3>
            <MenuItem name="떡볶이 & 날치알주먹밥" price={"8,000"} />
            <MenuItem name="어묵우동" price={"6,000"} />
            <MenuItem name="물만두계란탕" price={"6,000"} />
            <MenuItem name="아이스황도" price={"6,000"} />
            <MenuItem name="라면" price={"4,000"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
