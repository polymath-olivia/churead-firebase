import React from "react";
import Header from "../components/layout/Header";
import Nav from "../components/layout/Nav";
import FeedItem from "../components/FeedItem";
import { useState } from "react";
import { initialFeedList } from "../data/response";
import { useEffect } from "react";

const Home = ({ churead }) => {
  //logic
  const [feedList, setFeedlist] = useState(initialFeedList)

  console.log("churead", churead);

  // 진입 시 딱 한번 실행
  useEffect(() => {
    const newFeed = {
      id: feedList.length + 1,
      userName: "",
      userProfileImage: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
      churead: churead,
      likeCount: 38
    };
    //feedList에 객체 추가
    setFeedlist([newFeed, ...feedList]);
  }, []);

  /**
   * 아이템 삭제하기
   * 1. 휴지통 아이콘이 있는 버튼을 클릭
   * 2. 클릭 이벤트가 발생
   * 3. 클릭 이벤트 발생 시 handleDeleteg 함수가 호출
   * 4. handleDelete 내부 논리
   * 4-1. window confirm 창 띄우기
   * 4-2. 사용자가 선택한 값(boolean타입)을 ok라는 변수에 저장
   * 4-3. 사용자 선택한 값이 true이면 onDelete라는 event로 호출
   * 4-4. onDelete라는 이벤트에서 선택 된 아이템 즉 data를 인자에 넣어서 부모에게 올리기
   * 4-5. 부모는 onDelete라는 이벤트에 handeldDelete라는 함수를 연결
   * 5. handeldDelete라는 함수에서 인자를 확인
   * 6. feedList에 filter함수를 사용
   * 6-1. filter 함수에서 각 요소들의 id값과 자식으로부터 받아온 인자 아이템의 id값과 비교해서 일치하지 않는 요소들만 뽑기
   * 7. filter 함수로 리턴 받은 배열을 feedList라는 state에 반영
   */

  const handleDelete = (selectedItem) => {
    const filterList = feedList.filter(item => item.id !== selectedItem.id);
    console.log("🚀 ~ handleDelete ~ filterList:", filterList)
    setFeedlist(filterList);


    const getData = () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => console.log(json))
    }
  };

  //view
  return (
    <div className="h-full pt-20 pb-[74px] overflow-hidden">
      {/* START: 헤더 영역 */}
      <Header />
      <div className="absolute top-1/2 trnasform-translate-y-1/2 right-5 rounded-lg bg-white text-churead-black flex item-center px-2 text-sm">
        <button type="button">로그아웃</button>
      </div>
      {/* END: 헤더 영역 */}
      <main className="h-full overflow-auto">
        <div>
          {/* START: 피드 영역 */}
          <ul>
            {feedList.map(feed => <FeedItem key={feed.id} data={feed} onDelete={handleDelete} onEdit={(data) => onEdit(data)} />
          )}
          </ul>
          {/* END: 피드 영역 */}
        </div>
      </main>
      {/* START: 네비게이션 영역 */}
      <Nav />
      {/* END: 네비게이션 영역 */}
    </div>
  );
};

export default Home;
