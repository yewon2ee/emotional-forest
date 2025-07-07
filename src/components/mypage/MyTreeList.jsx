import React from 'react'
import MyRecordItem from './MyRecordItem';

//Mypage 안에 있는 dummyData를 props로 전달받음
const MyTreeList = ({data, onItemClick}) => {
  return (
    <div>   
    {/*더미데이터 배열을 map을 이용해서 랜더링*/}
        {data.map((item)=>(
          <MyRecordItem 
            key={item.id} 
            image={item.image} //이미지 경로 전달
            onClick={()=> onItemClick(item.id)} />
        ))}
    </div>
  )
}

export default MyTreeList;