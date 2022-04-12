import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/account.scss";
import { ReactComponent as ArrowRight } from "../../../images/icons/ArrowRight.svg";
import ModalRate from "../../ModalRate";
const MyOrders = () => {
  const [isRate, setIsRate] = useState<boolean>(false);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const history = useNavigate();
  return (
    <>
      <div className="account-container">
        <div className="content orders">
          <div
            className="content-header"
            onClick={() => history("/account/edit")}
          >
            <h4>Order History</h4>
            <div className="content-header_back">
              <span>Back</span>
              <ArrowRight className="content-header_icon" />
            </div>
          </div>

          <div className="content-orders">
            <div className="orders-list">
              <div className="orders-item">
                <div className="orders-item_info">
                  <div className="info-header">
                    <div className="info-header_code">#25614882</div>
                    {!isRate ? (
                      <div className="info-header_status">Completed</div>
                    ) : (
                      <div className="info-header_date">05/03/2022</div>
                    )}
                  </div>
                  <div className="info-space"></div>
                  <div className="info-body">
                    <div className="info-body_left">
                      <img alt="img" src="https://lh3.googleusercontent.com/k0YwPB-hkyEMDiIHKJWeN4tZP4vVs4ssTXf3TWj8v1jEPnAUft8bTMx3UmMzfTu8aPqgR-2NKzoa6je0Es0PYI5yk8ayEIiZdmllMV1yWOIMCsNzKt_Q5qruwAXPEJWJKPXSlFyoFA=w2400" />
                    </div>
                    <div className="info-body_right">
                      <div className="info-body_title">Lemon Meringue tea</div>
                      <div className="info-body_desc">
                        <span>350g</span>
                        <span className="right">x2</span>
                      </div>
                      <div className="info-body_desc">
                        <span>Order total</span>
                        <span className="right total">$19.96</span>
                      </div>
                    </div>
                  </div>
                  <div className="info-space"></div>
                  <div className="info-status">
                    {!isRate ? (
                      <span>Delivery Completed</span>
                    ) : (
                      <span style={{ color: "#6b6c6b" }}>In Process</span>
                    )}
                    <ArrowRight className="info-status_icon" />
                  </div>
                  <div className="info-space"></div>
                  <div className="info-rate">
                    <div className="info-rate_desc">
                      {!isRate ? (
                        <>
                          <p style={{ whiteSpace: "nowrap" }}>
                            Rate products by 04-04-2022
                          </p>
                          <p style={{ color: "#EE732C" }}>
                            Rate now and get 100 points
                          </p>
                        </>
                      ) : (
                        <p>Order would be received by 08/03/2022</p>
                      )}
                    </div>
                    {!isRate ? (
                      <div
                        className="style-btn-1-1 w86h27"
                        onClick={() => setIsShowModal(true)}
                      >
                        <div className="btn primary style-btn-1-2 w86h27 orders-btn">
                          RATE IT NOW
                        </div>
                      </div>
                    ) : (
                      <div className="btn disable w86h27 orders-btn">
                        RECIEVED
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isShowModal && <ModalRate close={setIsShowModal}/>}
    </>
  );
};

export default MyOrders;
