import React from 'react'
import "/src/styles/BottomNav.css"
import { Cog6ToothIcon, HomeIcon, UserIcon} from "@heroicons/react/24/outline";

const BottomNav = () => {
  return (
    <nav className='wrapper'>
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