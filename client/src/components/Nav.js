import './Nav.css'
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Nav = () => {
  const navigate = useNavigate()

  useEffect(()=>{
      const token =localStorage.getItem('TOKEN')
      if(!token){
          navigate('/signin')
      }
        
  }, [navigate])

  return (
    <div className='Nav'>
       <div className='wrapper'>
        <div className='settings'>
            <SettingsIcon/>
        </div>
        <div className='logout' onClick={()=>{
            localStorage.clear()
            navigate('/signin')
        }}>
            <LogoutIcon/>
        </div>
       </div>
    </div>
  )
}
