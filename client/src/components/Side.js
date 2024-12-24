import './Side.css'
import { Link } from 'react-router-dom'

export const Side = () => {
  return (
    <div className='Side'>
        <div className='top'>
            <Link to ="/" style={{textDecoration:"none"}}>
            <span className='logo magik'>Magik</span>
            <span className='logo resume'>Resume</span>
            </Link>
        </div>
        <hr />
        <div className='center'>
            <ul>
                <Link to="/description" style={{textDecoration:"none"}}>
                <li>
                    <span>Job Descriptions</span>
                </li>
                </Link>
                <Link to="/builder" style={{textDecoration:"none"}}>
                <li>
                    <span>CV Builder</span>
                </li>
                </Link>
                <Link to="/enhance" style={{textDecoration:"none"}}>
                <li>
                    <span>Enhance CV</span>
                </li>
                </Link>
                <Link to="/template" style={{textDecoration:"none"}}>
                <li>
                    <span>Sample Template</span>
                </li>
                </Link>
                <Link to="/summary" style={{textDecoration:"none"}}>
                <li>
                    <span>Summary</span>
                </li>
                </Link>
                <Link to="/guidance" style={{textDecoration:"none"}}>
                <li>
                    <span>Guidance</span>
                </li>
                </Link>
            </ul>
        </div>
    </div>
  )
}