import React from 'react';
import '../../styles/Button.css';


const Button = (props) => {
    //음 이렇게도 적는군
    const { text,onClick,type="button", className=""}=props;

  return (
    <button 
        type={type} //버튼 타입 지정
        onClick={onClick} //클릭 시 실행할 함수
        className={`custom-button ${className}`} //css class name
    >
        {text} {/*버튼에 표시될 글자*/}
    </button>    
  )
};

export default Button;
