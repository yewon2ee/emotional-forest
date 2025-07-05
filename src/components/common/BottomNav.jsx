import React from 'react'
import "/src/styles/BottomNav.css"
import { Cog6ToothIcon, HomeIcon, UserIcon} from "@heroicons/react/24/outline";

const BottomNav = () => {
  return (
    // 네비게이션 영역 전체 감싸는 태그 
    <nav className='wrapper'> 
        {/* 각 아이콘을 div로 감싸서 css grid or flex 배치쉽게  */}
        <div>
            <Cog6ToothIcon className='setting-icon' />
        </div>

        <div>
            <HomeIcon className='home-icon '/>
        </div>

        <div>
            <UserIcon className='user-icon'/>
        </div>
    </nav>
  )
}

export default BottomNav;