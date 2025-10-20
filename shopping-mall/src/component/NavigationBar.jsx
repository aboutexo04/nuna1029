import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
const NavigationBar = () => {
    const menuList = ['여성','Divided',,'남성','신생아/유아','아동','H&M Home','Sale','지속가능성']
    const navigate = useNavigate()
    const goToLogin = () => {
        navigate('/login')
    }
  return (
    <div style={{ width: '100%' }}>
      <div className="login-button" onClick={goToLogin}>
        <FontAwesomeIcon icon={faUser} />
        <span>로그인</span>
      </div>
      <div className='nav-section'>
        <img width={100} src ="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/250px-H%26M-Logo.svg.png"/>
      </div>
      <div className='menu-area'>
        <ul className='menu-list'>
            {menuList.map((menu, index)=>(
                <li key={index}>{menu}</li>
            ))}
        </ul>
       <div className="search-container">
         <input type="text" placeholder="검색..." />
         <FontAwesomeIcon icon={faSearch} className="search-icon" />
       </div>
      </div>

    </div>
  )
}

export default NavigationBar
