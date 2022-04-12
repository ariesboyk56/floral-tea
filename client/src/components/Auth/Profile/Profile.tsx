import { useLocation, useNavigate } from "react-router-dom"
import { path } from "../../../utils/contain"
import "../../../styles/profile.scss"
import avatar from "../../../images/account/my2.png"

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
                <img alt="item" srcSet="https://lh3.googleusercontent.com/NaNPey4agoxeD35l8kb-1R3Ji4hPl5VJqUERffAIY4vI-Qwc0kaf0L6_CbsTp4Lx9ylj_bFZqBmYgDQlsXCdoUkcjjbXtUDZSckA7HiJrPkbIjYSx4n-7Qo6xzYcdXEPwqLFBivwjw=w2400 2x" />
            </div>
            <div className="profile-item">
                <img alt="item" srcSet="https://lh3.googleusercontent.com/v09N4RMnUQRREDwVh6yP_mf1GF7-WjxxmPdFwsVQ8b4e1pzwO84OZceMPlNiTm5280F0X7E8H8u1fr5tyKBB2bUda0ecctj9ncp9nL6m56rarR61O_EGGRS-1wJMgpEJpcxDbtRicw=w2400 2x" />
            </div>
            <div className="profile-item" onClick={()=>navigate(`${location.pathname}/${path.ORDERS}`)}>
                <img alt="item" srcSet="https://lh3.googleusercontent.com/dR3vQTTtQoHrL_g--UIY4VbYqTEAaoLtws5ItMed16M_kNuZAyEwb-QCU1iFC2ztKmkk_nYMRkSxvfW0hvr_nCm93K3rRQWx8CxNTDY15xd1QjRMemQqb_fACuebuDt5NRF2tKS98Q=w2400 2x" />
            </div>
            <div className="profile-item" onClick={()=>navigate(`${location.pathname}/${path.ADDRESS}`)}>
                <img alt="item" srcSet="https://lh3.googleusercontent.com/Uhnw8yvICPAjp2n99_5BjBMqaMHfbt7K32SuaYpXH_ziaP6xTu3tzmdCDlAwpSc83q92YfShpF2aRg4iVBOwdFVJa1kUpbDaDdweeMkzjkhkFlqe-b8m4YcPmLMbX_GpbuX09de8tQ=w2400 2x"/>
            </div>
            <div className="profile-item" onClick={()=>navigate(`${location.pathname}/${path.WALLET}`)}>
                <img alt="item" srcSet="https://lh3.googleusercontent.com/X25vUM13B3COFScABn970j67m_cA0af8kBN09SBJ7nNAeysZFnXbUEy7g-Rk2Kk_lKyPCInFK1_oOEYpPoljTRn5YPqOy6Jq45lT_IXeGcCLFCunRiaXz4fJ_x-KgaxgjXlmPYDgYQ=w2400 2x"/>
            </div>
            <div className="profile-item">
                <img alt="item" srcSet="https://lh3.googleusercontent.com/rayO0AO1v6y0BqTphR49QfI7O1kb52bWp7RM9s8szCYGCIlryRgJLCK0Ng57SA6vlKX-vNJpP1NTgf6u6Nzy7S1x5GgzpijQTh1--RKj-kz03WjLu0Swgd1WHPf_5Sa7lWB0XI9ztQ=w2400 2x" />
            </div>
        </div>
    </div>
  )
}

export default Profile