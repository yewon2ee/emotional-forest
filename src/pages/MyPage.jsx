import React from 'react'
import BottomNav from '../components/common/BottomNav';
import MyTreeList from '../components/mypage/MyTreeList';

import apple from "../assets/fruit/apple.png"
import cherry from '../assets/fruit/cherry.png'
/*테스트용 더미 데이터- API 연동 전이니까*/
const dummyData = [
  { id: 1, image: apple},
  { id: 2, image: cherry},
];

const MyPage = () => {
  //각각의 나무를 클릭-> 콘솔 출력 (페이지로 이동하는 함수는 아직 안함)
  const HandleTreeClick = (id) =>{
    console.log(`클릭한 나무의 아이디는 : ${id}`);
  };

  return (
    <div>
      <h1>마이페이지</h1>

      {/*MyTreeList에 데이터랑 클릭 이벤트를 넘겨줘야함*/}
      <MyTreeList data={dummyData} onItemClick={HandleTreeClick}/>
      <BottomNav/>
    </div>
  )
}

export default MyPage;