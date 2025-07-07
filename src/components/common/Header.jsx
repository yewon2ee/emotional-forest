import React from 'react'
import { BackspaceIcon, PencilIcon } from "@heroicons/react/24/outline";
import "/src/styles/Header.css"

const Header = ({
    // showBack과 showEdit = false이면 버튼이 안보이고 true이면 보임
    title="",
    showBack = false,
    showEdit = false,
    onBackClick,
    onEditClick,
}) => {
  return (
    <header className='header-wrapper'>
        <div className='header-back-btn'>
            {showBack && (
                <button onClick={onBackClick} className='header-btn'>
                    <BackspaceIcon className='back-icon' />
                </button>
            )}
        </div>

        <h1 className='header-title'>{title}</h1>

        <div className='header-edit-btn'>
            {showEdit && (
                <button onClick={onEditClick} className='header-btn'>
                    <PencilIcon className='pencil-icon'/>
                </button>
            )}
        </div>
    </header>
  )
}

export default Header;