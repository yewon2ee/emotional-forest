import React from 'react'
import BottomNav from '../components/common/BottomNav';
import Header from '../components/common/Header';
import LeafList from '../components/tree/LeafList';
import TreeImage from '../components/tree/TreeImage';
import "/src/styles/TreePage.css"

const dummyPosts =[
  {id: 1, content: "나는 오늘 개발만 했다"},
  {id: 2, content: "해커톤을 무사히 끝내고 싶다. 해커톤을 무사히 끝내고 싶다. 해커톤을 무사히 끝내고 싶다. "},
  {id: 3, content: "끝나면 진짜 방학을 즐겨야지"}
];

const TreePage = () => {
  return (
    <div>
      <Header
        title=''
        showBack={true}
        showEdit={true}
      />

      {/*나무 +잎사귀 + 열매*/}
      <TreeImage posts={dummyPosts}/>

      {/*글 리스트*/}
      <LeafList posts={dummyPosts}/>

      <BottomNav/>
    </div>
  )
}

export default TreePage;
