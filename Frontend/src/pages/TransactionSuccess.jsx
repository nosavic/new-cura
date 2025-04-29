import myImage from "../assets/transactImg.png";
import profilePic from "../assets/transactionNum.png";
import "../styles/transactionsuccess.css";
import imgLine from "../assets/recieptline.png";

function TransactionSuccess() {
  return (
    <>
      <section className="bodybuilder">
        <section className="bigcontainer">
          <div className="transfer">
            <img src={myImage} alt="transaction icon" />
          </div>

          <div className="receipt">
            <p>Transfer Success</p>
          </div>

          <div className="done">
            <img src={profilePic} alt="transaction img number" />
          </div>

          <div>
            <p className="first">Your transfer to Med Plus Pharmacy</p>
            <p className="second">was successful</p>
          </div>

          <div className="recieptdiv">
            <button className="buttonimg">
              {" "}
              Get Reciept
              <img src={imgLine} alt="button line" />
            </button>
          </div>

          <div className="divDone">
            <button className="buttontext">Done</button>
          </div>
        </section>
      </section>
    </>
  );
}
export default TransactionSuccess;
