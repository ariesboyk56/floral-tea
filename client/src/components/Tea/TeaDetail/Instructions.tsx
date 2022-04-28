import { FC } from "react"
import "../../../styles/tea/instructions.scss"
interface IProps {
    dose?: string,
    temperature?: string,
    time?: string
}
const Instructions: FC<IProps> = ({dose="1-2", temperature="206", time="5-7"}) => {
  return (
    <div className="instructions">
        <div className="instructions-wrapper">
            <h1>steeping Instructions</h1>
            <div className="instructions-list">
                <div className="instructions-item">
                    <div className="instructions-icon"><img alt="instructions" srcSet="https://lh3.googleusercontent.com/Zs8oMQTfNhqRcguPOSU6c1s78uCn8xNpXUYttnGyviMU5YADwh4nw6touxsjIJN6gh5ca1QoUjLseV64Jy9VEkawfcBDXbS1_8Rr71ZtweiTmLOi8ZADrTmZzeq4tfb9lRD7EvAwLg=s42-p-k 2x" /></div>
                    <div>{`${dose} TBSP`}</div>
                </div>
                <div className="instructions-item">
                    <div className="instructions-icon"><img alt="instructions" srcSet="https://lh3.googleusercontent.com/tmN2Gj9JGa2gz29NjzJT8RXsQ8yqH5fxi5f_Wx_8c4PRxPpqB8ZAH1jSm-b063wTY22-DgQvJC-6cgOklcq9UxZHy2w5rmmIJNvddlxpt0kjB-eQiBHriCMhWWKMRtpkRQ8J_TnyXw=w2400 2x" /></div>
                    <div>{`${temperature} F`}</div>
                </div>
                <div className="instructions-item">
                    <div className="instructions-icon"><img alt="instructions" srcSet="https://lh3.googleusercontent.com/Uuo2q5UAtcJCZAgQn70ZUgEz_4U5mhvvJdH52Sm2sxI_EJcNqxgAdYBb4YI0sOVBeLRvJA_dtb39gn4JqhpSvXE-fVYHxLs_7p3wo4T3RW5Vl5P_ONiG2St3g6kPM1bgtG--xJKdVw=w2400 2x" /></div>
                    <div>{`${time} min`}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Instructions