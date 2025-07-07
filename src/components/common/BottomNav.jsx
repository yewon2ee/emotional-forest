import React from 'react'
import { useNavigate } from 'react-router-dom';
import "/src/styles/BottomNav.css"
import { Cog6ToothIcon, HomeIcon, UserIcon} from "@heroicons/react/24/outline";

const BottomNav = () => {
  const navigate = useNavigate();

  const goToSetting = () => navigate('/setting');
  const goToHome = () => navigate('/home');
  const goToMyPage = () => navigate('/my');

  return (
    // 네비게이션 영역 전체 감싸는 태그 
    <nav className='wrapper'> 
        {/* 각 아이콘을 div로 감싸서 css grid or flex 배치쉽게 */}
        <div onClick={goToSetting}>
            <Cog6ToothIcon className='setting-icon' />
        </div>

        <div onClick={goToHome}>
            <HomeIcon className='home-icon '/>
        </div>

        <div onClick={goToMyPage}>
            <UserIcon className='user-icon'/>
        </div>
    </nav>
  )
}

export default BottomNav;