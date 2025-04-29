 import "../styles/paymentsuccess.css";
 import checkPic from "../assets/checklogo.png"


function PaymentSuccess (){

    return(
        <>
        <section className="bodybuilder">
  <section className="divhouse">
<div className="divorder">
    <p className="paymentSuccessful">Payment Successfull</p>
    <p className="orderCompleted">Order Completed!</p>
</div>

<div className="divcheck">
    <img src={checkPic} alt="check logo" />
</div>

<div className="continueShopping">
    <button className="buttonContinueShopping">Continue Shopping</button>
</div>

<div className="orderDetails">
    <button className="buttonOrderDetails">Order Details</button>
</div>
  </section>
  </section>

  </>
    );
}
export default PaymentSuccess;