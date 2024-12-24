import { Side } from '../components/Side'
import { Nav } from '../components/Nav'
import './Summary.css'

const Summary = () => {
    return(
        <div className="summary">
            <Side/>
            <div className="summaryContainer">
                <Nav/>
                Summary here
            </div>
        </div>
    )
}
export default Summary