import React from 'react'

// 포스트 배열과 랜덤 글을 클릭 했을때 함수를 props로 받음
const TreeImage = ({
    posts,
    onRandomPostClick = (post) => alert(`랜덤 포스트: ${post.id}`),
}) => {

// 포스트 배열의 길이 만큼에서의 랜덤한 인덱스를 생성
//posts[randomIndex]를 골라서 클릭 함수 호출
// 잘 되는지 확인하기 위해 작성함
  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * posts.length);
    onRandomPostClick(posts[randomIndex]);
  };       

  return (
    <div className='tree-img-wrapper'>
        {/*나무 이미지가 없어서 오렌지로 대체*/}
        <img src="../src/assets/fruit/orange.png" alt='나무'/>

        {/*사과 3개로 제한*/}
        {[0,1,2].map((idx) => (
            <div
                key={`fruit-${idx}`}
                onClick={handleClick}
            >
                <img src="../src/assets/fruit/apple.png" alt='사과' className='apple'/>
            </div>
        ))}

        {/*잎사귀도 5개로 제한함 -> 동적으로 하길 원하면 수정해야함*/}
        {[0,1,2,3,4].map((idx) => (
            <div
                key={`leaf-${idx}`}
                onClick={handleClick}
            >
                {/*잎사귀 이미지 없어서 체리로 대체*/}
                <img src='../src/assets/fruit/cherry.png' alt='잎사귀' className='leaf'/>
            </div>
        ))}
    </div>
  )
}

export default TreeImage;