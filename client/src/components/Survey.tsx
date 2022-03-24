import "../styles/survey.scss";
import { ReactComponent as Survey_Happy_face } from "../images/icons/Survey_Happy_face.svg";
import { ReactComponent as Survey_Sad_face } from "../images/icons/Survey_Sad_face.svg";
import { ReactComponent as Survey_Normal_face } from "../images/icons/Survey_Normal_face.svg";
import { ReactComponent as Survey_Angry_face } from "../images/icons/Survey_Angry_face.svg";
import { ReactComponent as Survey_Very_happy_face } from "../images/icons/Survey_Very_happy_face.svg";
import Group from "../images/Group.png";
import { useState } from "react";
const Survey = () => {
  const [isCheck, setIsCheck] = useState<boolean>(false);
  return (
    <div className="survey">
      {!isCheck ? (
        <div className="container-default">
          <h1>Were you able to find what you were looking for?</h1>
          <ul className="container-default_list">
            <li onClick={()=>setIsCheck(true)}>
              <Survey_Angry_face className="icons" />
            </li>
            <li onClick={()=>setIsCheck(true)}>
              <Survey_Sad_face className="icons" />
            </li>
            <li onClick={()=>setIsCheck(true)}>
              <Survey_Normal_face className="icons" />
            </li>
            <li onClick={()=>setIsCheck(true)}>
              <Survey_Happy_face className="icons" />
            </li>
            <li onClick={()=>setIsCheck(true)}>
              <Survey_Very_happy_face className="icons" />
            </li>
          </ul>
          <h5>Let us know your thoughs</h5>
        </div>
      ) : (
        <div className="container-done">
          <div className="content">
            <img alt="group" srcSet={`${Group} 2x`} />
            <div>
              <h1>Thank you for sharing your thoughts.</h1>
              <p>
                Your responses help us to improve our services a way that
                matters to you.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Survey;
