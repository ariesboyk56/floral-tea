import { useLocation, useNavigate } from "react-router-dom"
import { path } from "../../../utils/contain"
import "../../../styles/profile.scss"
import avatar from "../../../images/account/my2.png"
import frame2 from "../../../images/account/Frame2.png"
import frame3 from "../../../images/account/Frame3.png"
import frame4 from "../../../images/account/Frame4.png"
import frame1 from "../../../images/account/Frame1.png"
import frame5 from "../../../images/account/Frame5.png"
import frame6 from "../../../images/account/Frame6.png"

const Profile = () => {
    const navigate = useNavigate()
    const location = useLocation()
  return (
    <div className="profile">
        <div className="profile-img">
            <div className="bg-avatar">
                <div className="avatar">
                    <img alt="avatar" src={`${avatar}`} />
                </div>
                <div className="bd-avatar"></div>
            </div>
            <div className="profile-desc">
                <h1>Hi, Hoa</h1>
                <span>Sign out</span>
            </div>
        </div>
        <div className="profile-list">
            <div className="profile-item" onClick={()=>navigate(`${location.pathname}/${path.PROFILE}`)}>
                <img alt="item" srcSet={`${frame1} 2x`} />
            </div>
            <div className="profile-item">
                <img alt="item" srcSet={`${frame2} 2x`} />
            </div>
            <div className="profile-item" onClick={()=>navigate(`${location.pathname}/${path.ORDERS}`)}>
                <img alt="item" srcSet={`${frame3} 2x`} />
            </div>
            <div className="profile-item">
                <img alt="item" srcSet={`${frame4} 2x`} onClick={()=>navigate(`${location.pathname}/${path.ADDRESS}`)}/>
            </div>
            <div className="profile-item">
                <img alt="item" srcSet={`${frame5} 2x`} onClick={()=>navigate(`${location.pathname}/${path.WALLET}`)}/>
            </div>
            <div className="profile-item">
                <img alt="item" srcSet={`${frame6} 2x`} />
            </div>
        </div>
    </div>
  )
}

export default Profile