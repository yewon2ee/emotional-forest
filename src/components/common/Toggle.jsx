import React, { useState } from 'react';
import '/src/styles/Toggle.css'; 

//여기 조금 헷갈림
// 클릭 이벤트 처리: handleClick
// 상태 반전: setIsOn(!isOn)
// 부모에 알리기: onToggle(!isOn)
// UI className 변경: ${isOn ? 'on' : 'off'}



const Toggle = (props) => {
  const { onToggle } = props;


  const [isOn, setIsOn] = useState(false);

  // 토글이 클릭될 때 실행될 함수
  const handleClick = () => {
    setIsOn(!isOn); // 현재 상태의 반대로 변경 
    onToggle(!isOn); // 부모 컴포넌트에 변경된 상태를 알려줌 엄마 나 불껏엉 
  };

  return (
    //달라문양+중괄호 -> 템플릿 리터럴 / 예전에는 그냥 "Hello " + name + "!"이거를 ->
    // 'Hello${name}!'; 로 적을 수 잇음
    <div className={`toggle-switch ${isOn ? 'on' : 'off'}`} onClick={handleClick}>
      <div className="toggle-knob"></div> {/*토글 스위치의 원부분*/}
    </div>
  );
};

export default Toggle; 
