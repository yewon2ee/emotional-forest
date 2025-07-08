import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/common/BottomNav';
import MyTreeList from '../components/mypage/MyTreeList';
import Header from '../components/common/Header';
import "../styles/MyPage.css"

/*테스트용 더미 데이터- API 연동 전이니까*/
const dummyTrees = [
  { id: 1, image: "/assets/tree_objects/autumn.png" },
  { id: 2, image: "/assets/tree_objects/spring.png" },
  { id: 3, image: "/assets/tree_objects/summer.png" },
  { id: 4, image: "/assets/tree_objects/winter.png" },
];

//초기값 (API 연결하여 데이터 작성)
const initialStats = {
  treeCount: 66,
  likeCount: 201,
  cheerCount: 88
};

const MyPage = () => {
  const navigate = useNavigate();

  const [stats, setStats] = useState(initialStats);

  const handleTreeClick = (id) =>{
    navigate(`/post/${id}`)
    console.log(`클릭한 나무의 아이디는 : ${id}`);
  };

  useEffect(()=> {
//나중에 api 연동하면 useEffet작성
  }, []);

  return (
    <div className='mypage'>
      <Header title='my forest'/>

      <div className='tree-area'>
        <img
          src='/assets/etc/grass.png'
          alt = "잔디"
          className='grass-img'
        />
        {/*MyTreeList에 데이터랑 클릭 이벤트를 넘겨줘야함*/}
        <MyTreeList data={dummyTrees} onItemClick={handleTreeClick}/>
      </div>

      <div className='stat-area'>
        <div className='stat-block'>
          <p className='stats-number'>{stats.treeCount}</p>
          <p className='stats-text'>total tree count</p>
        </div>

        <div className='stat-block'>
          <p className='stats-number'>{stats.likeCount}</p>
          <p className='stats-text'>total like count</p>
        </div>

        <div className='stat-block'>
          <p className='stats-number'>{stats.cheerCount}</p>
          <p className='stats-text'>total cheer count</p>
        </div>

      </div>


      <BottomNav/>
    </div>
  )
}

export default MyPage;