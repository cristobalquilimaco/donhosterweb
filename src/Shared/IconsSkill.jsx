import iconsClient from "../Utils/iconsClient"
import "../Shared/Styles/IconsSkill.css"

const IconsSkill = () => {
  return (
    <div className="shared_icons">
<ul className="principal_icons">
    <li className="client_i"><img className="client_icon" src={iconsClient.client_1} alt="client donhoster1" width="250" height="78"/></li>
    <li className="client_i"><img className="client_icon" src={iconsClient.client_2} alt="client donhoster 2" width="250" height="78"/></li>
    <li className="client_i"><img className="client_icon" src={iconsClient.client_3} alt="client donhoster 3" width="250" height="78"/></li>
    <li className="client_i"><img className="client_icon" src={iconsClient.client_4} alt="client donhoster 4" width="250" height="78"/></li>
    <li className="client_i"><img className="client_icon" src={iconsClient.client_5} alt="client donhoster 5" width="250" height="78"/></li>
    <li className="client_i"><img className="client_icon" src={iconsClient.client_6} alt="client donhoster 6" width="250" height="78"/></li>
    <li className="client_i"><img className="client_icon" src={iconsClient.client_7} alt="client donhoster 7" width="250" height="78"/></li>
    <li className="client_i"><img className="client_icon" src={iconsClient.client_8} alt="client donhoster 8" width="250" height="78"/></li>
</ul>
    </div>
  )
}

export default IconsSkill