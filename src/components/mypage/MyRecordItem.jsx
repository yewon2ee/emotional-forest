import React from 'react'

//마이페이지에서 개별 나무를 렌더딩 함
// props -> image: 나무 이미지 onClick: 나무를 클릭했을때 실행 될 함수
const MyRecordItem = ({image, onClick}) => {
  return (
    <div
        className='my-record-item'
        onClick={onClick} //postDetailpage로 이동하는 클릭 이벤트
    >
      <img src={image} alt="나무" className='tree-img'/> {/*출력할 이미지 props로 전달*/}
    </div>
  )
}

export default MyRecordItem;
