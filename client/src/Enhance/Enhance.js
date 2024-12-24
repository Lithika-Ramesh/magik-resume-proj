import { Side } from '../components/Side'
import { Nav } from '../components/Nav'
import './Enhance.css'

const Enhance = () => {
    return(
        <div className="enhance">
            <Side/>
            <div className="enhanceContainer">
                <Nav/>
                CV Enhancer here
            </div>
        </div>
    )
}
export default Enhance