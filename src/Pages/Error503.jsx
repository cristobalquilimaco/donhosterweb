
import "../Components/styles/ErrorMessage.css"
import { Link } from "react-router-dom"

const Error503 = () => {
  return (
    <div className="web__error">
        <h1 className="oops">¡OOPS!</h1>
        <p className="error">ERROR 503</p>
        <h1 className="no__found">Service not available</h1>
        <Link to="/"><button className="btn btn-outline">GO BACK</button></Link>
    </div>
  )
}

export default Error503