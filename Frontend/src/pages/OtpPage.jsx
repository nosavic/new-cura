import "../styles/otppage.css";
import onePic from "../assets/one.com.png";
import twoPic from "../assets/two.com.png";
import threePic from "../assets/three.com.png";

function OtpPage(){

    return(
        <div className="bodyotp">
<div className="boxOne">

    <div className="topText">
    <p>Check your Email or phone number for OTP</p>
</div>

<span className="spanText">Here’s how it works </span>

<div className="boxTwo">
    <div className="boxchilds">
        <div className="oneAchord"><img src={onePic} alt="" width="30px"/></div>
        <div className="twoAchord">Arrive at the pharmacy</div>
    </div>
    <div className="boxchilds">
    <div className="oneAchord"><img src={twoPic} alt=""  width="30px"/></div>
    <div className="twoAchord">Meet the pharmacist and provide OTP</div>
    </div>
    <div className="boxchilds">
    <div className="oneAchord"><img src={threePic} alt="" width="30px"/></div>
    <div className="twoAchord">Pharmacist confirms your pick up</div>
    </div>
    <div className="boxchilds">
    <div className="onlyAchord">Use your drugs</div>
    </div>

</div>
</div>
</div>
    );
}
export default OtpPage;