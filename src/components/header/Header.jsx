import React from 'react'
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    
  return (
    <header>    
        <div>Header</div>
        <button onClick={() => navigate('/')}>Go to Layout 1</button>
        <button onClick={() => navigate('/page/pray')}>Go to Layout 2</button>
        <button onClick={() => navigate('/page/education')}>Go to Layout 3</button>
    </header>

  )
}

export default Header