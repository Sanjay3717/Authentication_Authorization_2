// Write your JS code here
import './index.css'
import Header from '../Header'

const Cart = () => {
  console.log()

  return (
    <>
      <Header />
      <div className="cart-bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          alt="cart"
          className="cart-image"
        />
      </div>
    </>
  )
}
export default Cart
