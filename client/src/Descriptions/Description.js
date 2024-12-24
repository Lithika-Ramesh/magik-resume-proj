import { Side } from '../components/Side'
import { Nav } from '../components/Nav'
import './Description.css'

const Description = () => {
    return(
        <div className="description">
            <Side/>
            <div className="descriptionContainer">
                <Nav/>
                Descriptions here
            </div>
        </div>
    )
}
export default Description