// Write your JS code here
import './index.css'
import Header from '../Header'

const Products = () => {
  console.log()

  return (
    <>
      <Header />
      <div className="product-bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
          alt="products"
          className="product-image"
        />
      </div>
    </>
  )
}
export default Products
