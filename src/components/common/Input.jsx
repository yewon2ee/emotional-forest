import React from 'react' //리액트 라이브러리 불러오기 
import '/src/styles/Input.css';

//const는 변수를 선언한다~ 괄호는 파라미터 선언. 
//중괄호는 부모 컴포넌트의 props(속성값 객체)에서 필요값만 꺼내 수정st (부모가 state를 가짐)
//부모컴포넌트가 뭔데 .. 아하 Input 컴포넌트가 부모고 <Input type = "text,, > 이게 자식컴포

//type: input 태그의 속성 (html에서 <input type="text">)
//value: input에 현재 들어있는 값 (React state에서 받아옴)
//onChange: input 내용이 바뀔 때 실행할 함수
//placeholder: 흐릿하게 보이는 힌트 텍스트
// 모두 HTML input 태그의 기본 속성~ React가 props로 전달받아 적용


const Input = ({type="text",value,onChange,placeholder}) => {
  return (
    <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="basic-input"
    />
  )
};

export default Input;
