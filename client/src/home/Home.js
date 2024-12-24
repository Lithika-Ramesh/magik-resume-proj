import './Home.css'
import { Side } from '../components/Side'
import { Nav } from '../components/Nav'
import Database from '../Database/Database'






const Home = () => {
  return (
    <div className='Home'>
      <Side/>
      <div className='homeContainer'>
        <Nav/>       
        <div className='Top'>
          <div className='title'>
           Job applications tracking
          </div>
          <Database />
        </div>
         <div className='bottom'>
          CV display here
        </div>
      </div>
    </div>
  )
}

export default Home
