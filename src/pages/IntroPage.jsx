import React from "react";
import Button from "../components/common/Button";
import Toggle from "../components/common/Toggle";

const IntroPage = () => {

   // 클릭 시 실행되는 테스트 함수
   const handleClick = () => {
    alert("버튼이 클릭되었습니다!");
  };

  const handleToggle = (state) => {
    console.log('현재 토글 상태:',state);
  };

  return (
    <div>
      <h1>IntroPage</h1>

      {/* 버튼 테스트 */}
      <Button 
        text="테스트 버튼" 
        onClick={handleClick}
      />
      <div><p>""</p></div>

      {/*토글 테스트*/}
      <Toggle
        onToggle={handleToggle}/>


    </div>
  );

};

export default IntroPage;