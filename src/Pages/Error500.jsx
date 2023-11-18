
import "../Components/styles/ErrorMessage.css"
import { Link } from "react-router-dom"

const Error500 = () => {
  return (
    <div className="web__error">
        <h1 className="oops">¡OOPS!</h1>
        <p className="error">ERROR 500</p>
        <h1 className="no__found">Internal Server Error</h1>
        <Link to="/"><button className="btn btn-outline">GO BACK</button></Link>
    </div>
  )
}

export default Error500