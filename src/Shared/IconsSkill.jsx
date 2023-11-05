import iconsClient from "../Utils/iconsClient"
import "../Shared/Styles/IconsSkill.css"

const IconsSkill = () => {
  return (
    <div className="shared_icons">
<ul className="principal_icons">
    <li className="client_i"><img className="client_icon" src={iconsClient.client_1} alt="" /></li>
    <li className="client_i"><img className="client_icon" src={iconsClient.client_2} alt="" /></li>
    <li className="client_i"><img className="client_icon" src={iconsClient.client_3} alt="" /></li>
    <li className="client_i"><img className="client_icon" src={iconsClient.client_4} alt="" /></li>
    <li className="client_i"><img className="client_icon" src={iconsClient.client_5} alt="" /></li>
    <li className="client_i"><img className="client_icon" src={iconsClient.client_6} alt="" /></li>
    <li className="client_i"><img className="client_icon" src={iconsClient.client_7} alt="" /></li>
    <li className="client_i"><img className="client_icon" src={iconsClient.client_8} alt="" /></li>
</ul>
    </div>
  )
}

export default IconsSkill