
import "../Components/styles/ErrorMessage.css"
import { Link } from "react-router-dom"

const Error403 = () => {
  return (
    <div className="web__error">
        <h1 className="oops">¡OOPS!</h1>
        <p className="error">ERROR 403</p>
        <h1 className="no__found">Forbiden</h1>
        <Link to="/"><button className="btn btn-outline">GO BACK</button></Link>
    </div>
  )
}

export default Error403