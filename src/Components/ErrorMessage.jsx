
import "../Components/styles/ErrorMessage.css"
import { Link } from "react-router-dom"

const ErrorMessage = () => {
  return (
    <div className="web__error">
        <h1 className="oops">¡OOPS!</h1>
        <p className="error">ERROR</p>
        <h1 className="no__found">Website not found</h1>
        <Link to="/"><button className="btn btn-outline">GO BACK</button></Link>
    </div>
  )
}

export default ErrorMessage